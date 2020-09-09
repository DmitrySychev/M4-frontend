import React from 'react'
import { Segment, Container, Header, Image, Button, Grid } from 'semantic-ui-react'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom';


class EventShowPage extends React.Component{

  state = {
    event: '',
    eventCreator: null,
    attendees: null,
    eventId: window.location.href.split('/')[4] 
  }

  componentDidMount() {
    const eventId = window.location.href.split('/')[4]
    const foundEvent = this.props.data.find(ele => ele.id == eventId)
    this.setState({ event: foundEvent})

    fetch("http://localhost:3000/events/"+eventId)
    .then(resp => resp.json())
    .then(resp => {
      this.setState({eventCreator: resp.created_by.username, attendees: resp.attendees})
    })
  }

  mapAttendees=()=>{
    if (this.state.attendees && this.state.attendees.length > 0) {
     return (
        <p>Here's everyone that's attending this event: {this.state.attendees.map(attendee => <p> {attendee.username}</p>)}</p> 
        )     
    } else{
      return  <p>There's no one attending this event yet besides the host.</p>
    }
  }

  userStatus = () => {
    
    if (this.props.user) {
        if (this.props.joinedEvents !== undefined) {
          if (this.findJoinedEventsId()) {
            return (
            <Button size="small" onClick={()=> this.props.deleteUserEvent(parseInt(this.state.eventId))}>No longer attending</Button>
            )
          }
          
          return (
            <Button size="large" onClick={()=> this.props.joinEvent(this.state.eventId)}>Join Event</Button>
          )
        }

    } else {

      return (
        <>
        <Button size="small" as={Link} to="/login">Join Event</Button>
        </>
      )
    }
 
  }


  findJoinedEventsId = () => {
    const joinedEventsMap = this.props.joinedEvents.map(event => event.id)
    const eId = parseInt(this.state.eventId)
    return joinedEventsMap.includes(eId)
  }
  

  render() {
    return (

      this.state.event ? 
        <div style={{paddingTop: 10 + 'em'}} >
        <Container className="ui very padded segment" >

          { this.state.event.thumbnail ?

            <Segment size='large'>
            <Image src={this.state.event.thumbnail} />
            </Segment>

            :

           <Segment size='large'>
              <Image src='https://ca-times.brightspotcdn.com/dims4/default/90f23c8/2147483647/strip/true/crop/2400x1600+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2F37%2Ff1c988db40109234e505b4891a05%2Fla-zoom-party-etiquette.jpg' />
            </Segment>
          }

            <Segment size='large'>
              <Header text='title' textAlign='center'>{this.state.event.title}</Header>
            </Segment>

            <Segment text textAlign='center'>
                {this.state.event.description}
            </Segment>

            <Segment size='large'>
                <p>Event host: {this.state.eventCreator}.</p>
                {this.mapAttendees()}
            </Segment>

            <Segment >

            <Grid>
              <Grid.Column textAlign="center">
                  
                  {this.userStatus()}
               </Grid.Column>
            </Grid>
            </Segment>

        </Container>

        <Footer />
        </div>

        :

        <>
        </>
      )}
  }
  



export default EventShowPage;

