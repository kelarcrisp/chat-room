
import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect } from 'react-router-dom'
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
            console.log(user, 'user')
            this.setState({
                isSignedIn: !!user
            })
            const RedirectURI = 'http://localhost:3000/Chat-room'
            if (this.state.isSignedIn) {
                window.location = RedirectURI
            }
        })

    }

    render() {
        return (
            <div>
                <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </div>
        )
    }
}

export default ExternalSignIn