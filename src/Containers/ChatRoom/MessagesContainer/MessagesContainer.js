import React, { useState, useEffect } from 'react';
import classes from './MessagesContainer.module.css';
import InputArea from './InputArea/InputArea';
import FormInfoDisplay from './FormInfoDisplay/FormInfoDisplay';
import firebase from 'firebase/app';
import io from "socket.io-client";
const MessagesContainer = () => {

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [firebaseUser, setFirebaseUser] = useState('');

    const socket = io("http://localhost:3001", {
        transports: ["websocket", "polling"]
    });
    const handleSubmit = (e, message) => {
        e.preventDefault();
        socket.emit("send", message, firebaseUser);
        setMessage("");
    }


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('' + user.displayName, 'user IN MESSAGEcONTAINER')
            const holder = user.displayName
            setFirebaseUser(holder)
        });
    }, [])



    useEffect(() => {

        socket.on("users", users => {
            setUsers(users);
            console.log(users, 'users array')
        });

        socket.on("message", (message) => {
            setMessages(messages => [...messages, message]);

        });

        socket.on("connected", user => {
            setUsers(users => [...users, user]);
            console.log(user, 'user in connected')
        });

        socket.on("disconnected", id => {
            setUsers(users => {
                return users.filter(user => user.id !== id);
            });
        });
    }, []);


    console.log(messages, 'users from server')
    return (
        <div className={classes.MessagesContainer}>
            <FormInfoDisplay messagesToDisplay={messages}
                firebaseUser={firebaseUser}
                serverUsers={messages}
            />
            <div className={classes.InputArea}> <InputArea handleSubmit={handleSubmit} /></div>

        </div>
    );
};

export default MessagesContainer;