import React from 'react'
import { Popup, Card, Image, Rating } from 'semantic-ui-react'

class EventCard extends React.Component{

  render(){
    return (

      <Popup
      trigger={
        <Card className="four wide column" >
          <Image src='https://ca-times.brightspotcdn.com/dims4/default/90f23c8/2147483647/strip/true/crop/2400x1600+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2F37%2Ff1c988db40109234e505b4891a05%2Fla-zoom-party-etiquette.jpg' />
          <Card.Content>
            <Card.Header>{this.props.event.title}</Card.Header>
            <div id="date">Date: {this.props.event.date}</div>
            <Card.Description>
              {this.props.event.description}
            </Card.Description>
            {/* If event.user_id === token id, then render the delete button */}
            <button >Delete Event</button>
          </Card.Content>
        </Card>
      }
    >
      <Popup.Header>User Rating</Popup.Header>
      <Popup.Content>
        <Rating icon='star' defaultRating={3} maxRating={4} />
      </Popup.Content>
    </Popup>
    )
  }
}
  

export default EventCard
