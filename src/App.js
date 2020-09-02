import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom'


class App extends React.Component{
  render() {
    return (

        <div> 
          <h1>home</h1>
          
          <NavLink to="/login">
            <button className="login" value="login" >login</button>
          </NavLink>

          <NavLink to="/signup">
            <button className="signup" value="signup" >signup</button>
          </NavLink>
          
        </div>
        

      )
  };
}

export default App;
