import React, { Component } from 'react';
import NavBar from '../../Shared/NavBar/Navbar';
import SideBar from '../ChatRoom/SideBar/SideBar';
import MessagesContainer from './MessagesContainer/MessagesContainer';
import classes from './ChatRoom.module.css';
class ChatRoom extends Component {
    render() {
        return (
            <div className={classes.ChatRoomContainer}>
                <div className={classes.NavBarContainer}><NavBar /></div>
                <div className={classes.SideAndMessages}>
                    <SideBar />
                    <MessagesContainer />
                </div>

            </div>
        );
    }
}

export default ChatRoom;