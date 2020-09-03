import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Button,
} from 'semantic-ui-react';
import CalendarLG from './CalendarLG.jsx'



const SidebarN = () => {

  const [visible, setVisible] = React.useState(false)

  return (
    <Grid columns={1}>
      <Grid.Column 
      color='grey'>
        <Button onClick={() => setVisible(true)}> Menu</Button>
      </Grid.Column>

      <Grid.Column
      color='grey'>
        <Sidebar.Pushable as={Segment} style={{height: '100vh'}}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
            color='grey'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='calendar alternate' />
              Events
            </Menu.Item>
            <Menu.Item as={NavLink} exact to='/signup'>
              <Icon name='user plus' />
              Signup
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='lock' />
              Login
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
          <div className='Calendar-background' style={{background: "gray"}}>
            <Segment basic>
                <CalendarLG />
            </Segment>
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}

export default SidebarN