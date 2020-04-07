import React from 'react';
import './App.css';
import ExternalSignIn from './Components/HomePage/ExternalSignIn/ExternalSignIn';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import ChatRoom from './Containers/ChatRoom/ChatRoom';
import Profile from './Containers/Profile/Profile';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={ExternalSignIn} />
        <Route path='/Chat-room' component={ChatRoom} />
        <Route path='/Profile' component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
