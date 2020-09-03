import React from 'react';
import './App.css';
import Home from './components/Home'
import SidebarN from './components/SidebarN'
import SignupMondal from './components/SignupMondal.jsx'
import LoginMondal from './components/LoginMondal.jsx'
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
      <div>

      <SidebarN />
      <Switch>
        {/* <Route path="/" render={() => <Home />} /> */}
        <div>
      
        <Route path="/login" render={() => <LoginMondal submitHandler={this.loginHandler} />}/>
        <Route path="/signup" render={() => <SignupMondal submitHandler={this.signupHandler}/>}/>
        
        </div>
        
      </Switch>
  

        </div>


      )
  };
}

export default App;
