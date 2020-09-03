import React from 'react'
import { Button, Header, Icon, Modal, Form, Grid, Image, Segment } from 'semantic-ui-react'

class SignupMondal extends React.Component {

    state = {
        open: false,
        username: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

render() {
  return (
    <Modal
      basic
      onClose={() => this.setState({open: false})}
      onOpen={() => this.setState({open: true})}

      size='small'
      trigger={<Button>Signup</Button>}
    >

      <Modal.Content>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='grey' textAlign='center'>
                <Image src='' /> Signup for a new account
              </Header>
              <Form size='large' onSubmit={this.submitHandler}>
              <Form.Input 
                    fluid 
                    icon='user' 
                    iconPosition='left' 
                    placeholder='Username' 
                    name='username'
                    value={this.state.username}
                    onChange={this.changeHandler}
                  />
                  <Form.Input 
                    fluid 
                    icon='envelope' 
                    iconPosition='left' 
                    placeholder='Email' 
                  />
                  <Form.Input
                    fluid 
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.changeHandler}
                  />
                  <Button color='grey' fluid size='large' type='submit'>
                    Signup
                  </Button>
              </Form>
            </Grid.Column>
          </Grid>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => this.setState({open: false})}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => this.setState({open: false})}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>

  )
}}

export default SignupMondal