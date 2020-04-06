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
        console.log(messages, 'messages')
        socket.emit("send", message);
        setMessage("");
    }

    useEffect(() => {

        socket.on("connect", () => {
            socket.emit("username", firebaseUser);
        });

        socket.on("users", users => {
            setUsers(users);
        });

        socket.on("message", message => {
            setMessages(messages => [...messages, message]);
        });

        socket.on("connected", user => {
            setUsers(users => [...users, user]);
        });

        socket.on("disconnected", id => {
            setUsers(users => {
                return users.filter(user => user.id !== id);
            });
        });
    }, []);


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user.displayName, 'user IN MESSAGEcONTAINER')
            setFirebaseUser({
                myUser: user.displayName
            })
        });
    }, [])

    return (
        <div className={classes.MessagesContainer}>

            <FormInfoDisplay messagesToDisplay={messages}
                firebaseUser={firebaseUser.myUser}
                serverUsers={users}

            />
            <div className={classes.InputArea}> <InputArea handleSubmit={handleSubmit} /></div>

        </div>
    );
};

export default MessagesContainer;