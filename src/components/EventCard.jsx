import React from 'react'
import { Card, Image, Button, Container, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import EventShowPage from '../components/EventShowPage.jsx'


class EventCard extends React.Component{


callDeleteUserEvent=(eventId)=>{
  if(this.props.deleteUserEvent){
    this.props.deleteUserEvent(eventId)
  }else{
    console.log("no props delete user event")
  }
}

  joinedAndNotCreated=()=>{
    // console.log(this.props)
    return this.props.joined === 'true' && this.props.created === 'false' ?
            
    <Button size="small" onClick={()=> this.callDeleteUserEvent(this.props.event.id)}>No longer attending</Button>
                                                      // looking for the wrong id, need user_event id, not event id
    :     
    <Button size="small" onClick={()=> this.props.joinEvent(this.props.event.id)}>Join Event</Button>
  }

  render(){
    console.log("props in event card", this.props)
  
    return (
     
      <>
       
        <Card className="four wide column" >
          <Image src='https://ca-times.brightspotcdn.com/dims4/default/90f23c8/2147483647/strip/true/crop/2400x1600+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2F37%2Ff1c988db40109234e505b4891a05%2Fla-zoom-party-etiquette.jpg' />
          <Card.Content>
            <Card.Header>{this.props.event.title}</Card.Header>
            <div id="date">Date: {this.props.event.date}</div>
            <Card.Description>
              {this.props.event.description}
            </Card.Description>
 
            <Container >
              <Segment vertical='true'>

              { this.props.user ?
              
              this.joinedAndNotCreated()
                :
              <Button size="small" as={Link} to="/login">Join Event</Button>}

              {this.props.created === 'true' ?  
                  <Button size='small' onClick={()=> this.props.deleteEvent(this.props.event.id)} >Delete Event</Button>
                      
                    :

                  console.log('')
              }

                <Button size='small' as={Link} to={'/events/' + this.props.event.id}   >Learn More</Button>
              </Segment>
            </Container>

          </Card.Content>
        </Card>
        </>
 
      )}
  
  
  }
  



export default EventCard;



