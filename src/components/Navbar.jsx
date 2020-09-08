import React from 'react'
import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';



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
    <Dropdown item simple text='Pandemic Events' as={Link} to='/' left >
      <Dropdown.Menu>

        {this.state.user === undefined ? 
        <>
        <Dropdown.Item text='My Events' as={Link} to='/login' />
        <Dropdown.Item text='Host an Event' as={Link} to='/login' />
        </>
        :
        <>
        <Dropdown.Item text='My Events' as={Link} to='/me/events' />
        <Dropdown.Item text='Host an Event' as={Link} to='/createevent' />
        </>
      }
  
        <Dropdown.Divider />
        <Dropdown.Header>Header Item</Dropdown.Header>
        <Dropdown.Item text='Events Home' as={Link} to="/events" />
      </Dropdown.Menu>
    </Dropdown>
    <div className='right item'>
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