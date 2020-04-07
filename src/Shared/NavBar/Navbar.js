import React, { Component } from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase/app';

class NavBar extends Component {
    state = {
        myUser: ''
    }
    signOut = () => {
        firebase.auth().signOut().then(userSignedOut => {
            console.log(userSignedOut)
        })
        console.log('signed out')
        window.location = 'http://localhost:3000'
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user.displayName, 'user')
            this.setState({
                myUser: user.displayName
            })
        });
    }

    render() {


        return (
            <div className={classes.NavBarContainer}>
                <div className={classes.NavItemsLeft}>
                    {this.state.myUser} is signed in
                </div>
                <div className={classes.NavItemsRight}>
                    {/* <NavLink
                        to="/Profile"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        profile page
                    </NavLink> */}
                    <button
                        onClick={this.signOut}
                        style={{ margin: '0 10px' }}> Sign out </button>
                </div>
            </div>
        );
    }
}

export default NavBar;