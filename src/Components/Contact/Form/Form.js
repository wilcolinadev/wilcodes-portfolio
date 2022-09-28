import React from "react";
import {FormControl, Grid} from "@mui/material";
import {TextareaAutosize, TextField} from "@material-ui/core";

const Form = ()=>{
    return(
        <form>
            <Grid>
                <FormControl >
                    <label>First Name</label>
                    <TextField type={'text'}></TextField>
                </FormControl>
            </Grid>
            <Grid>
                <FormControl >
                    <label>Last Name</label>
                    <TextField type={'text'}></TextField>
                </FormControl>
            </Grid>
            <Grid>
                <FormControl >
                    <label>Company Name</label>
                    <TextField type={'text'}></TextField>
                </FormControl>
            </Grid>
            <Grid>
                <FormControl >
                    <label>Email</label>
                    <TextField type={'email'}></TextField>
                </FormControl>
            </Grid>

            <Grid>
                <FormControl >
                    <label>Message</label>
                    <TextareaAutosize aria-label="minimum height"
                                      minRows={5}
                                      placeholder="Type your message here"
                                      style={{ width: 200 }}></TextareaAutosize>
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
                <button type="submit" >
                   Just Send
                </button>
            </Grid>
        </form>
    )
};

export default Form;