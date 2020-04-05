import React, { useEffect, useRef } from 'react';
import classes from './FormInfoDisplay.module.css';

const FormInfoDisplay = (props) => {


    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [props.messagesToDisplay]);


    return (
        <div id='formScroll' className={classes.FormInfoDisplayContainer}>
            <h2 style={{ textAlign: 'center' }}>The greatest chat</h2>
            <div className={classes.TextConvo}>
                <div>
                    {props.messagesToDisplay.map((message, index) => {
                        return (
                            <ul key={Math.random()}><li className={classes.MyText}>{message}</li></ul>
                        )
                    })}
                    <div ref={messagesEndRef} />
                </div>
                <div className={classes.TheirText}>
                    their text
            </div>
            </div>

        </div>
    );
};

export default FormInfoDisplay;
