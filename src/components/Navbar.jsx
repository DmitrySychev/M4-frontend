import React from 'react'
import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const Navbar = (props) => (

<Menu fixed='top' inverted >
<Container>
  <Dropdown item simple text='Pandemic Events' as={Link} to='/' header left floated>
    <Dropdown.Menu>
      <Dropdown.Item as={Link} to='/createevent'>Host an Event</Dropdown.Item>
      <Dropdown.Item as={Link} to='/events'>List Events</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Header>Header Item</Dropdown.Header>
      <Dropdown.Item>List Item</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  {console.log(props.user)}
  <div class='right item'>
  <Menu.Item as={Link} to='/signup' >Signup</Menu.Item>

  { 
  
    props.user === null ?

    <Menu.Item as={Link} to='/login' >Login</Menu.Item>
    :
    <Menu.Item as={Link} to='/' >Logout</Menu.Item>
    
  }

  </div>
</Container>
</Menu>
  
)

export default Navbar