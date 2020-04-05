import React, { useState } from 'react';
import classes from './MessagesContainer.module.css';
import InputArea from './InputArea/InputArea';
import FormInfoDisplay from './FormInfoDisplay/FormInfoDisplay';
const MessagesContainer = () => {


    const [messages, setMessages] = useState([])
    const handleSubmit = (e, message) => {
        e.preventDefault();
        let holder = [];
        holder.push(...messages, message)
        setMessages(holder)
        console.log(messages)
    }

    return (
        <div className={classes.MessagesContainer}>
            <FormInfoDisplay messagesToDisplay={messages} />
            <div className={classes.InputArea}> <InputArea handleSubmit={handleSubmit} /></div>

        </div>
    );
};

export default MessagesContainer;