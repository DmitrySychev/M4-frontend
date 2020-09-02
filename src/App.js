import React from 'react';
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';


class App extends React.Component{

  state = {
    user: null
  }

  signupHandler = (userObj) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        accept: 'application/json',
        "content-type": 'application/json'
      },
      body: JSON.stringify({ user: userObj})
    })
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    return (

    <>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route path="/signup" render={() => <Signup submitHandler={this.signupHandler}/>} />
      </Switch>
          <div> 
            <h1>home</h1>

            <NavLink to="/login">
              <button className="login" value="login" >login</button>
            </NavLink>

            <NavLink to="/signup">
              <button className="signup" value="signup" >signup</button>
            </NavLink>
            
          </div>
    </>

      )
  };
}

export default App;
