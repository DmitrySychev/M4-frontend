import React from 'react'

import { Popup, Card, Image, Rating } from 'semantic-ui-react'

class EventCard extends React.Component{


  state={
    joined: null
  }

             //* first level of if function: if there is not a user object, render buttons but they reroute to signin 
            //* second level if: if this.props.created === true, display the delete event button
            //* second level if: if this.props.joined === false, display joinEvent button, else display deleteUserEvent button ("no longer attending")

  render(){
    return (
      <>
      {this.props.event ? 
      <>
        <Card className="four wide column" >
          <Image src='https://ca-times.brightspotcdn.com/dims4/default/90f23c8/2147483647/strip/true/crop/2400x1600+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2F37%2Ff1c988db40109234e505b4891a05%2Fla-zoom-party-etiquette.jpg' />
          <Card.Content>
            <Card.Header>{this.props.event.title}</Card.Header>
            <div id="date">Date: {this.props.event.date}</div>
            <Card.Description>
              {this.props.event.description}
            </Card.Description>
 
 
            {this.props.created === true && this.props.joined === true ?  
            <>
            <button onClick={()=> this.props.deleteEvent(this.props.event.id)}>Delete Event</button><br/><br/>
            </>
            :
            null}

            {this.props.joined === true && this.props.created === false ? 
            <div>
            <button onClick={()=> this.props.deleteUserEvent(this.props.event.id)}>No longer attending</button>
            </div>
            :
            <div>
            <button onClick={()=> this.props.joinEvent(this.props.event.id)}>Join Event</button>
            </div>
            } 

            <div>
            <button onClick={()=> this.props.learnMore(this.props.event.id)}>Learn More</button>
            </div>           
          </Card.Content>
        </Card>
        </>

        :

        null 
      } 
      </>
      )}
  
  
  }
  



export default EventCard;



