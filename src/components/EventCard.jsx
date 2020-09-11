import React from 'react'
import { Card, Image, Button, Container, Segment, Popup, Label, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const timeoutLength = 2500


class EventCard extends React.Component{

  state = {
    event: '',
    attendees: [],
    isOpen: false,
    eventId: this.props.event.id
  }

  componentDidMount() {
      fetch("http://localhost:3000/events/" + this.state.eventId)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({attendees: resp.attendees})
      })
  }
  

callDeleteUserEvent=(eventId)=>{
  if(this.props.deleteUserEvent){
    this.props.deleteUserEvent(eventId)
  }else{
    console.log("no props delete user event")
  }}
 


  userStatus = () => {
    
    if (this.props.user) {
        if (this.props.joinedEvents !== undefined) {
          if (this.findJoinedEventsId()) {
            return (
            <Button stacked size="small" onClick={()=> this.props.deleteUserEvent(this.props.event.id)}>No longer attending</Button>
            )
          }
          return (
            <Button stacked size="small" onClick={()=> this.props.joinEvent(this.props.event.id)}>Join Event</Button>
          )
        }

    } else {

      return (
        <>
        <Button stacked size="small" as={Link} to="/login">Join Event</Button>
        </>
      )
    }
 
  }


  findJoinedEventsId = () => {
    const joinedEventsMap = this.props.joinedEvents.map(event => event.id)
    return joinedEventsMap.includes(this.props.event.id)
  }


  handleOpen = () => {
    this.setState({ isOpen: true })

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false })
    }, timeoutLength)
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }


  render() {
    return (
     
      <>
       <Popup
        trigger={
        <Card className="four wide column" style={{ margin: '1em' }}  id={this.props.event.id} >
          <Image src={
            this.props.event.thumbnail ?
            this.props.event.thumbnail
            :
            'https://ca-times.brightspotcdn.com/dims4/default/9321c96/2147483647/strip/true/crop/2400x1350+0+125/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2F37%2Ff1c988db40109234e505b4891a05%2Fla-zoom-party-etiquette.jpg'
            } />
          <Card.Content >
            <Card.Header>{this.props.event.title}</Card.Header>
            <div id="date">Date: {this.props.event.date}</div>
            <div id="category">Occasion: {this.props.event.category}</div>

            <Card.Description >
              {this.props.event.description}
            </Card.Description>
 
            
              <Container attached={true} className="centered" style={{ margin: 'auto' }} >
                <Grid>
                  <Grid.Column textAlign="center">

              {this.userStatus()}
              <Button size='small' as={Link} to={'/events/' + this.props.event.id} style={{ marginTop: '1em' }} >Learn More</Button>
                  </Grid.Column>
                  </Grid>

              </Container>
            
          </Card.Content>
        </Card>
      }
      on='hover'
      onClose={this.handleClose}
      onOpen={this.handleOpen}
    >
      <Popup.Header>Attending</Popup.Header>
          <Popup.Content>
 
            <Label square color='teal' >
            {this.state.attendees.length}
            </Label> 

          </Popup.Content>
      </Popup>
    </>
 
      )}
  
  
  
}



export default EventCard;



