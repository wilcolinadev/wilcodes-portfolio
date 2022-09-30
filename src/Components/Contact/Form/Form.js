import React, {useState} from "react";
import {FormControl, Grid} from "@mui/material";
import {ContactForm, FormWrapper, Button, FormDescription, FormInput, FormArea} from './FormStyles'
import BoxIcon from "../../BoxIcon";
import Typography from "@mui/material/Typography";

const Form = () => {
    const sxStyles = {
        width: '100%',
    }
    const [isButtonHover, setIsButtonHover] = useState(false);
    return (
        <FormWrapper>
            <ContactForm>
                <FormDescription variant={'h4'}>
                    Fill the Form Below!
                </FormDescription>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <FormControl sx={sxStyles}>
                            <label>First Name</label>
                            <FormInput type={'text'} placeholder={'Wilfredo'} required></FormInput>
                        </FormControl>
                    </Grid>
                  <Grid item xs={12} md={6}>
                      <FormControl sx={sxStyles}>
                          <label>Last Name</label>
                          <FormInput type={'text'} placeholder={'Colina'}></FormInput>
                      </FormControl>
                  </Grid>

                </Grid>

                <Grid>
                    <FormControl sx={sxStyles}>
                        <label>Company Name</label>
                        <FormInput type={'text'} placeholder={'Company Name'}></FormInput>
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl sx={sxStyles}>
                        <label>Email</label>
                        <FormInput type={'email'} placeholder={'example@mail.com'}></FormInput>
                    </FormControl>
                </Grid>

                <Grid>
                    <FormControl sx={sxStyles}>
                        <label>Message</label>
                        <FormArea
                            minRows={5}
                            placeholder="Type your message here"
                            sx={sxStyles}>

                        </FormArea>
                    </FormControl>
                </Grid>
                <Grid>
                    <label htmlFor="choose-file">
                        <input
                            accept="image/*,.pdf"
                            id="choose-file"
                            multiple
                            type="file"

                        />
                    </label>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                    <Button type="submit" onMouseEnter={() => setIsButtonHover(!isButtonHover)}
                            onMouseLeave={() => setIsButtonHover(!isButtonHover)}>
                        <BoxIcon hoverState={isButtonHover}/>
                        <Typography>
                            Just Send!
                        </Typography>
                    </Button>

                </Grid>
            </ContactForm>
        </FormWrapper>

    )
};

export default Form;