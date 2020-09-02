import React from 'react';
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';


class App extends React.Component{

  state = {
    user: null
  }



  signupHandler = (userObj) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user: userObj })
    })
      .then(res => res.json())
      .then(console.log)
  }

  loginHandler = (userInfo) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ userInfo })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data.user })
      }, () => this.props.history.push("/home"))
   
  }

  // componentDidMount() {
  //   const (token)
  // }

  

  render() {
    return (

    <>
      <Switch>
        <Route path="/signup" render={() => <Signup submitHandler={this.signupHandler}/>} />
        <Route path="/home" render={() => <Home />} /> 
        <Route path="/login" render={() => <Login submitHandler={this.loginHandler} />}/>

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
