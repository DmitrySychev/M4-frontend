import React from 'react'
import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';



class Navbar extends React.Component { 

  // state = {
  //   user: 'this.props.user'
  // }

  logoutHandler=()=>{
    localStorage.removeItem('token')
    window.location.reload()
    console.log('success')
  }
  


render() { 

  return (

  <Menu fixed='top' inverted >
  <Container>
    <Dropdown item simple text='Quarantine Social Calendar' as={Link} to='/' left='true' >
      <Dropdown.Menu>

        {this.props.user === undefined || this.props.user === null ? 
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
        <Dropdown.Item text='Events Home' as={Link} to="/events" />
      </Dropdown.Menu>
    </Dropdown>
    <div className='right item'>
    <Menu.Item as={Link} to='/signup' >Signup</Menu.Item>
    
  { 
  
    this.props.user === undefined || this.props.user === null ?
    
    
    <Menu.Item as={Link} to='/login' >Login</Menu.Item>
    :
    <Menu.Item onClick={() => this.logoutHandler()} >Logout</Menu.Item>
    
    
  }

  </div>
</Container>
</Menu>

)}}

export default Navbar