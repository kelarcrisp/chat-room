import React, { useState, useEffect } from 'react';
import classes from './MessagesContainer.module.css';
import InputArea from './InputArea/InputArea';
import FormInfoDisplay from './FormInfoDisplay/FormInfoDisplay';
import firebase from 'firebase/app';
const MessagesContainer = () => {


    const [messages, setMessages] = useState([])
    const [user, setUser] = useState('')
    let connection = new WebSocket('ws://localhost:9090/')



    useEffect(() => {
        connection.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data)
            const holder = [...messages, dataFromServer];
            setMessages(holder)
            console.log(messages, 'new state with messags from serve')
        }
    }, [connection.onmessage, messages])

    const handleSubmit = (e, message) => {
        e.preventDefault();
        console.log(message, 'message')
        // let holder = [];
        // holder.push(...messages, message)
        // setMessages(holder)
        const data = {
            username: user,
            message: message
        }
        connection.send(JSON.stringify(data))
    }



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