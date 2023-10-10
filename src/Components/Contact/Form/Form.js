import React, { useEffect, useRef, useState } from 'react';
import { FormControl, Grid } from '@mui/material';
import { Button, ContactForm, FileLabel, FormArea, FormDescription, FormInput, FormWrapper } from './FormStyles';
import BoxIcon from '../../BoxIcon';
import Typography from '@mui/material/Typography';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { formValidation } from './formValidation';
import axios from 'axios';
import CustomizedSnackbars from './AlertMessage';
import ProgressBar from './ProgressBar';

const Form = () => {
  const instance = axios.create();
  instance.defaults.headers.common['Content-Type'] = 'application/json';
  const sxStyles = {
    width: '100%',
  };
  const [isButtonHover, setIsButtonHover] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const nameRef = useRef(null);
  const [name, setName] = useState('');
  const lastNameRef = useRef(null);
  const [lastName, setLastName] = useState('');
  const companyRef = useRef(null);
  const [company, setCompany] = useState('');
  const emailRef = useRef(null);
  const [email, setEmail] = useState('');
  const messageRef = useRef(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [successResponse, setsuccessResponse] = useState(false);
  const [files, setFiles] = useState([]);
  const [urlFiles, setUrlFiles] = useState([]);
  const [messageAlert, setMessageAlert] = useState('');
  const [isProgressActive, setIsProgressActive] = useState(false);

  const handleFile = (e) => {
    const file = [...e.target.files];
    setFiles((prevState) => [...prevState, ...file]);
  };

  const cleanForm = () => {
    setEmail('');
    setMessage('');
    setName('');
    setCompany('');
    setFiles([]);
  };

  useEffect(() => {
    const uploadFiles = async () => {
      setIsProgressActive(!isProgressActive);
      const uploaders = files.map((file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('tags', 'browser_upload');
        formData.append('upload_preset', process.env.NEXT_PUBLIC_PRESET);
        try {
          return instance.post(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/upload`,
            formData,
            {
              headers: {
                'Content-Type': null,
                'X-Requested-With': 'XMLHttpRequest',
              },
            }
          );
        } catch (e) {
          setError(!error);
          setMessageAlert('Server Error, Try again!');
        }
      });

      try {
        await axios.all(
          uploaders.map(async (data) => {
            const result = await data;
            const fileURL = result.data.secure_url;
            setUrlFiles((prevState) => {
              const newState = [...prevState];
              newState.push(fileURL);
              return [...newState];
            });
          })
        );
        setIsProgressActive(false);
        setFiles([]);
        setMessageAlert('File attached Successfully!');
        setsuccessResponse(!successResponse);
        console.log(files[0]);
      } catch (e) {
        setMessageAlert('Server Error, Try again!');
        setError(!error);
      }
    };

    if (files.length) {
      uploadFiles();
    }
  }, [files]);

  useEffect(() => {
    setIsFormValid(formValidation(name, lastName, email, company, message));
  }, [name, lastName, email, company, message]);

  const sendForm = async (e) => {
    e.preventDefault();
    setIsProgressActive(!isProgressActive);
    const data = {
      service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_USER_ID,
      template_params: {
        name: name,
        lastName: lastName,
        company: company,
        email: email,
        message: message,
        files: urlFiles,
      },
    };

    try {
      await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
      setsuccessResponse(true);
      setMessageAlert('Message sent Successfully!');
    } catch (e) {
      setMessageAlert('Server Error, Try again!');
      setError(!error);
    }

    cleanForm();
  };

  return (
    <FormWrapper>
      <ContactForm onSubmit={sendForm} id={'form'}>
        <FormDescription variant={'h4'}>Fill the Form Below!</FormDescription>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl sx={sxStyles}>
              <label>First Name</label>
              <FormInput
                name={'firstName'}
                onChange={() => setName(nameRef.current.value)}
                type={'text'}
                placeholder={'e.g. John'}
                required
                value={name}
                ref={nameRef}
              ></FormInput>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl sx={sxStyles}>
              <label>Last Name</label>
              <FormInput
                name={'lastName'}
                type={'text'}
                placeholder={'e.g. Mauer'}
                ref={lastNameRef}
                value={lastName}
                onChange={() => setLastName(lastNameRef.current.value)}
              ></FormInput>
            </FormControl>
          </Grid>
        </Grid>

        <Grid>
          <FormControl sx={sxStyles}>
            <label>Company Name</label>
            <FormInput
              name={'companyName'}
              type={'text'}
              placeholder={'Company Optional'}
              ref={companyRef}
              value={company}
              onChange={() => setCompany(companyRef.current.value)}
            ></FormInput>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={sxStyles}>
            <label>Email</label>
            <FormInput
              name={'email'}
              type={'email'}
              placeholder={'e.g. example@mail.com'}
              ref={emailRef}
              value={email}
              onChange={() => setEmail(emailRef.current.value)}
            ></FormInput>
          </FormControl>
        </Grid>

        <Grid>
          <FormControl sx={sxStyles}>
            <label>Message</label>
            <FormArea
              name={'message'}
              minRows={5}
              placeholder="Type your message here"
              sx={sxStyles}
              ref={messageRef}
              value={message}
              onChange={() => setMessage(messageRef.current.value)}
            ></FormArea>
          </FormControl>
        </Grid>
        <Grid>
          <ProgressBar status={isProgressActive} />
          <FileLabel htmlFor="choose-file">
            <input
              name={'files'}
              accept="image/*, .pdf"
              id="choose-file"
              multiple
              type="file"
              hidden
              onChange={(e) => handleFile(e)}
            />
            <UploadFileOutlinedIcon />
            Upload files
          </FileLabel>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Button
            type="submit"
            onMouseEnter={() => isFormValid && setIsButtonHover(!isButtonHover)}
            onMouseLeave={() => isFormValid && setIsButtonHover(!isButtonHover)}
            disabled={!isFormValid}
          >
            <BoxIcon hoverState={isButtonHover} />
            <Typography>Just Send!</Typography>
          </Button>
        </Grid>
      </ContactForm>

      <CustomizedSnackbars
        error={error}
        success={successResponse}
        setError={setError}
        setSuccess={setsuccessResponse}
        message={messageAlert}
        setLoading={setIsProgressActive}
      />
    </FormWrapper>
  );
};

export default Form;
