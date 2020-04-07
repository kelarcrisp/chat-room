import React from 'react';
import classes from './SideBar.module.css';

const SideBar = (props) => {

    return (
        <div className={classes.NavBarContainer}>
            <div style={{ textAlign: 'center' }}>Users logged in</div>
            <div>
                {props.users.map((user, index) => {
                    return <ul className={classes.Users} key={Math.random()}>
                        <li className={classes.User}>{user}</li> </ul>
                })}
            </div>
        </div>
    );
};

export default SideBar;