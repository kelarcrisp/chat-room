import React from 'react';
import classes from './FormInfoDisplay.module.css';

const FormInfoDisplay = (props) => {
    return (
        <div className={classes.FormInfoDisplayContainer}>
            <div className={classes.TextConvo}>
                <div>
                    {props.messagesToDisplay.map((message, index) => {
                        return (
                            <ul key={Math.random()}><li className={classes.MyText}>{message}</li></ul>
                        )
                    })}
                </div>
                <div className={classes.TheirText}>
                    their text
            </div>
            </div>

        </div>
    );
};

export default FormInfoDisplay;
