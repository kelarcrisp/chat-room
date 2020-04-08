import React, { useState, useEffect } from 'react';
import NavBar from '../../Shared/NavBar/Navbar';
import SideBar from '../ChatRoom/SideBar/SideBar';
import MessagesContainer from './MessagesContainer/MessagesContainer';
import classes from './ChatRoom.module.css';
const ChatRoom = () => {

    const [myUsers, setMyUsers] = useState(['john'])


    const getUsers = (users) => {
        setMyUsers((userss) => [...userss, users])
    }

    let setOfUsers;
    if (myUsers) {
        setOfUsers = [...new Set(myUsers)];

    }
    return (
        <div className={classes.ChatRoomContainer}>
            <div className={classes.NavBarContainer}><NavBar /></div>
            <div className={classes.SideAndMessages}>
                <SideBar users={setOfUsers} />
                <MessagesContainer getUsers={getUsers} />
            </div>

        </div>
    );
}

export default ChatRoom;