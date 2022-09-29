import React from "react";
import {FormControl, Grid} from "@mui/material";
import {TextareaAutosize, TextField} from "@material-ui/core";
import {ContactForm, FormWrapper, Button} from './FormStyles'
import BoxIcon from "../../BoxIcon";
import Typography from "@mui/material/Typography";
const Form = ()=>{
    const sxStyles = {
        width:'100%',
    }
    return(
        <FormWrapper>
            <ContactForm>
                <Grid >
                    <FormControl sx={sxStyles}>
                        <label>First Name</label>
                        <TextField type={'text'} placeholder={'Wilfredo'} required></TextField>
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl sx={sxStyles}>
                        <label>Last Name</label>
                        <TextField type={'text'} placeholder={'Colina'}></TextField>
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl sx={sxStyles}>
                        <label>Company Name</label>
                        <TextField type={'text'} placeholder={'Company Name'}></TextField>
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl sx={sxStyles}>
                        <label>Email</label>
                        <TextField type={'email'} placeholder={'example@mail.com'}></TextField>
                    </FormControl>
                </Grid>

                <Grid>
                    <FormControl sx={sxStyles}>
                        <label>Message</label>
                        <TextareaAutosize
                            minRows={5}
                            placeholder="Type your message here"
                            sx={sxStyles}></TextareaAutosize>
                    </FormControl>
                </Grid>
                <Grid>
                    <label htmlFor="choose-file" >
                        <input
                            accept="image/*"
                            id="choose-file"
                            multiple
                            type="file"
                        />
                    </label>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                    <Button type="submit" >
                        <BoxIcon/>
                        <Typography >
                            Just Send!
                        </Typography>
                    </Button>

                </Grid>
            </ContactForm>
        </FormWrapper>

    )
};

export default Form;