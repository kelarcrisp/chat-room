
import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
firebase.initializeApp({
    apiKey: 'AIzaSyB9JlL6VkkQFN13MHaO3ynx6K9BnGEADYk',
    authDomain: 'chatroom-9dfd4.firebaseapp.com'
})
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
            signInSuccess: () => false
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                isSignedIn: !!user
            })
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