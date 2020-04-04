import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core'
import classes from './InputArea.module.css';
import SendIcon from '@material-ui/icons/Send';


const InputArea = () => {

    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    return (
        <div className={classes.ContactContainer}>
            <form
                onSubmit={handleSubmit}
                className={classes.FormInfoContainer} autoComplete="on">
                <TextField
                    style={{width: '400px'}}
                    className={classes.TextField}
                    onChange={handleChange}
                    id="message" label="Message" variant="outlined" />
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    startIcon={<SendIcon></SendIcon>}
                    style={{height: '55px'}}
                >
                    Send!
                    </Button>
            </form>
        </div >

    );
};

export default InputArea;