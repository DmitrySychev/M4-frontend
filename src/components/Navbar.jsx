import React from 'react'
import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';



class Navbar extends React.Component { 

  state = {
    user: localStorage.token,
    data: this.props.data
  }

  logoutHandler=()=>{
    localStorage.removeItem('token')
    window.location.reload()
    console.log('success')
  }

render() { 

  return (

  <Menu fixed='top' inverted >
  <Container>
    <Dropdown item simple text='Pandemic Events' as={Link} to='/' header left floated>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to='/createevent'>Host an Event</Dropdown.Item>
        <Dropdown.Item as={Link} to='/events'>My Events</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Header Item</Dropdown.Header>
        <Dropdown.Item>Events Home</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    {console.log(this.state)}
    <div class='right item'>
    <Menu.Item as={Link} to='/signup' >Signup</Menu.Item>

  { 
  
    this.state.user === undefined ?

    <Menu.Item as={Link} to='/login' >Login</Menu.Item>

    :

    <Menu.Item onClick={() => this.logoutHandler()} >Logout</Menu.Item>
    
  }

  </div>
</Container>
</Menu>

)}}

export default Navbar