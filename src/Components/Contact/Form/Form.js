import React, {useState, useRef, useEffect} from "react";
import {FormControl, Grid} from "@mui/material";
import {ContactForm, FormWrapper, Button, FormDescription, FormInput, FormArea, FileLabel} from './FormStyles'
import BoxIcon from "../../BoxIcon";
import Typography from "@mui/material/Typography";
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import {formValidation} from "./formValidation";
import axios from "axios";
import CustomizedSnackbars from "./AlertMessage";

const Form = () => {

    const sxStyles = {
        width: '100%',
    }
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

    const handleFile = (e) => {
        const file = [...e.target.files];
        setFiles((prevState) => [...prevState, ...file]);
    }

    useEffect(() => {
        setIsFormValid(formValidation(name, lastName, email, company))

    }, [name, lastName, email, company]);

    const sendForm = async (e) => {
        e.preventDefault();
        const data = {
            service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
            template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
            user_id: process.env.NEXT_PUBLIC_USER_ID,
            template_params: {
                'name': name,
                'lastName': lastName,
                'company': company,
                'email': email,
                'message': message
            }
        };

        try {
            let response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
            console.log(response);
            await setsuccessResponse(!successResponse);
        } catch (e) {
            console.log(e);
            setError(!error);
        }


    }


    return (
        <FormWrapper>
            <ContactForm onSubmit={sendForm}>
                <FormDescription variant={'h4'}>
                    Fill the Form Below!
                </FormDescription>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <FormControl sx={sxStyles}>
                            <label>First Name</label>
                            <FormInput name={'firstName'} onChange={() => setName(nameRef.current.value)}
                                       type={'text'}
                                       placeholder={'John'} required value={name}
                                       ref={nameRef}></FormInput>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl sx={sxStyles}>
                            <label>Last Name</label>
                            <FormInput name={'lastName'}
                                       type={'text'}
                                       placeholder={'Mauer'}
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
                            placeholder={'example@mail.com'}
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
                        >


                        </FormArea>
                    </FormControl>
                </Grid>
                <Grid>
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
                        <UploadFileOutlinedIcon/>
                        Upload files

                    </FileLabel>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                    <Button type="submit" onMouseEnter={() => setIsButtonHover(!isButtonHover)}
                            onMouseLeave={() => setIsButtonHover(!isButtonHover)}
                            disabled={!isFormValid}
                    >
                        <BoxIcon hoverState={isButtonHover}/>
                        <Typography>
                            Just Send!
                        </Typography>
                    </Button>

                </Grid>
            </ContactForm>

            <CustomizedSnackbars error={error} success={successResponse} setError={setError}
                                 setSuccess={setsuccessResponse}/>
        </FormWrapper>

    )

};

export default Form;