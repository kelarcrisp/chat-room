import React from 'react';
import classes from './SideBar.module.css';

const SideBar = () => {
    return (
        <div className={classes.NavBarContainer}>
            <div style={{ textAlign: 'center' }}>Users logged in</div>
            <div className={classes.Users}>
                <div className={classes.User}>user</div>
                <div className={classes.User}>user</div>
                <div className={classes.User}>user</div>
                <div className={classes.User}>user</div>
                <div className={classes.User}>user</div>
            </div>
        </div>
    );
};

export default SideBar;