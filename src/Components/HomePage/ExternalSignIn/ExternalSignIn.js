
import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import classes from './ExternalSignIn.module.css';
class ExternalSignIn extends Component {

    state = {
        isSignedIn: false
    }


    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: (authResult, RedirectURI) => {
                console.log(authResult, RedirectURI)
            }
        }
    }


    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                isSignedIn: !!user
            })
            const RedirectURI = '/'
            if (this.state.isSignedIn) {
                window.location = RedirectURI
            }
        })

    }

    render() {
        return (
            <div className={classes.SignInContainer}>
                <div className={classes.ButtonsContainer}>
                    <div className={classes.SignInButtons}>
                        <p style={{ color: 'white', marginBottom: '50px' }}> Sign in to join the greatest chat on earth!</p>
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    </div>

                </div>

            </div>
        )
    }
}

export default ExternalSignIn