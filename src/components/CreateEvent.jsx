import React from 'react';
import Footer from './Footer.jsx';
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Dropdown, Segment } from 'semantic-ui-react';

const category = [
    { key: 'zoomparty', text: 'Zoom Party', value: 'Zoom Party' },
    { key: 'happyhour', text: 'Happy Hour', value: 'Happy Hour' },
    { key: 'gamenight', text: 'Game Night', value: 'Game Night' },
    { key: 'politicaldiscussion', text: 'Political Discussion', value: 'Political Discussion' },
    { key: 'airbnb', text: 'AirBnb Experience', value: 'AirBnb Experience' },
]

const thumbs = [
    {
      key: 'Zoom Party',
      text: 'Zoom Party',
      value: 'https://ca-times.brightspotcdn.com/dims4/default/9321c96/2147483647/strip/true/crop/2400x1350+0+125/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2F37%2Ff1c988db40109234e505b4891a05%2Fla-zoom-party-etiquette.jpg',
      image: { avatar: false, src: 'https://ca-times.brightspotcdn.com/dims4/default/9321c96/2147483647/strip/true/crop/2400x1350+0+125/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2F37%2Ff1c988db40109234e505b4891a05%2Fla-zoom-party-etiquette.jpg' },
    },
    {
      key: 'Happy Hour',
      text: 'Happy Hour',
      value: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_600,q_75,w_1440/v1/clients/palmsprings/HappyHour_shutterstock_9516081f-6dc6-4844-a64a-e8834ecf2831.jpg',
      image: { avatar: false, src: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_600,q_75,w_1440/v1/clients/palmsprings/HappyHour_shutterstock_9516081f-6dc6-4844-a64a-e8834ecf2831.jpg' },
    },
    {
      key: 'Game Night',
      text: 'Game Night',
      value: 'https://mk0snacknationnm0gwv.kinstacdn.com/wp-content/uploads/2020/08/virtual_game_night.png',
      image: { avatar: false, src: 'https://mk0snacknationnm0gwv.kinstacdn.com/wp-content/uploads/2020/08/virtual_game_night.png' },
    },
    {
      key: 'Political Discussion',
      text: 'Political Discussion',
      value: 'https://ourpolitics.net/wp-content/uploads/2018/02/pov620-twitter.jpg',
      image: 'https://ourpolitics.net/wp-content/uploads/2018/02/pov620-twitter.jpg',
    },
    {
      key: 'AirBnB Experience',
      text: 'AirBnB Experience',
      value: 'https://www.nsbuzz.ca/wp-content/uploads/2020/06/airbnbexperiences.jpg',
      image: 'https://www.nsbuzz.ca/wp-content/uploads/2020/06/airbnbexperiences.jpg',
    }
  ]


class CreateEvent extends React.Component {


    state = {
        title: '',
        description: '',
        date: '',
        category: '',
        thumbnail: ''
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    changeHandlerDropdown = (e, data ) => {
        this.setState({ [data.name]: data.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        return (
          <>
            { this.props.user ? 
            <>
     
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='grey' textAlign='center'>
                  <Image src='' /> HOST AN EVENT
                </Header>
                <Form size='large' onSubmit={this.submitHandler}>
              <Form.Input 
                    fluid 
                    icon='user' 
                    iconPosition='left' 
                    placeholder='Title' 
                    name='title'
                    value={this.state.title}
                    onChange={this.changeHandler}
                  />
                  <Form.TextArea 
                    fluid 
                    icon='envelope' 
                    iconPosition='left'
                    placeholder='Description'
                    name='description'
                    value={this.state.description}
                    onChange={this.changeHandler}
                  />
                  <Form.Input
                    fluid 
                    icon='lock'
                    iconPosition='left'
                    placeholder='date'
                    type='date'
                    name='date'
                    value={this.state.date}
                    onChange={this.changeHandler}
                  />

                
                    <Segment>
                        <Dropdown 
                            placeholder='Category' 
                            fluid 
                            selection 
                            options={category}
                            name='category'
                            value={this.state.category.value}
                            onChange={this.changeHandlerDropdown} 
                        />
                    </Segment>

                <Segment>
                    <Dropdown 
                        placeholder='Thumbnails' 
                        fluid 
                        selection 
                        options={thumbs} 
                        name='thumbnail'
                        // value={this.state.thumbnail}
                        onChange={this.changeHandlerDropdown} 
                    />
                </Segment>
        
                  <Button color='grey' fluid size='large' type='submit'>
                    Host it!
                  </Button>
              </Form>

              </Grid.Column>
            </Grid>
            <Footer />
            </>
            :
            <>
            <Redirect to='/signup' />
            </>
            }
          </>
          )

        
    }
}

export default CreateEvent