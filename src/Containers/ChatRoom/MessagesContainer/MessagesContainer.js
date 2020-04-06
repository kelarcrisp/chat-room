import React, { useState, useEffect } from 'react';
import classes from './MessagesContainer.module.css';
import InputArea from './InputArea/InputArea';
import FormInfoDisplay from './FormInfoDisplay/FormInfoDisplay';
import firebase from 'firebase/app';
const MessagesContainer = () => {


    const [messages, setMessages] = useState([])
    const [user, setUser] = useState('')
    let connection = new WebSocket('ws://localhost:9090/')


    const handleSubmit = (e, message) => {
        e.preventDefault();
        console.log(message, 'message')
        console.log(user, 'user')
        const data = {
            username: user.myUser || 'kelar',
            message: message
        }
        if (connection.readyState === 1) {
            connection.send(JSON.stringify(data))
        }
    }


    useEffect(() => {
        connection.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data)
            console.log(dataFromServer, 'DATA FROM SERVER')
            let holder = [...messages, dataFromServer]
            setMessages(holder)
            console.log(messages, 'messages')
        }
    }, [handleSubmit])


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user.displayName, 'user IN MESSAGEcONTAINER')
            setUser({
                myUser: user.displayName
            })
        });
    }, [])
    return (
        <div className={classes.MessagesContainer}>
            <FormInfoDisplay messagesToDisplay={messages} />
            <div className={classes.InputArea}> <InputArea handleSubmit={handleSubmit} /></div>

        </div>
    );
};

export default MessagesContainer;