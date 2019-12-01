import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.css';
import { Login } from './components/Login'
import LostPassword from './components/LostPassword'
import Signup from './components/Signup'

const App = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/lostpassword" component={LostPassword}/>
        <Route path="/" component={Login}/>
    </Switch>
  </BrowserRouter>
  // <div className="App"> <Login  key='form'/> </div>
)

export default App