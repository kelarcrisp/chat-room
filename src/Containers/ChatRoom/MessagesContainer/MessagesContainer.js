import React from 'react';
import classes from './MessagesContainer.module.css';
import InputArea from './InputArea/InputArea';
import FormInfoDisplay from './FormInfoDisplay/FormInfoDisplay';
const MessagesContainer = () => {
    return (
        <div className={classes.MessagesContainer}>
            <FormInfoDisplay />
            <div className={classes.InputArea}> <InputArea /></div>

        </div>
    );
};

export default MessagesContainer;