import React from 'react';
import { Input, Dropdown, Segment, Button, Label } from 'semantic-ui-react';


const options = [
    { key: 1, text: 'Zoom Party', value: 'Zoom Party' },
    { key: 2, text: 'Happy Hour', value: 'Happy Hour' },
    { key: 3, text: 'Game Night', value: 'Game Night' },
    { key: 4, text: 'Political Discussion', value: 'Political Discussion' },
    { key: 5, text: 'AirBnB Experience', value: 'AirBnB Experience' },
]

  
class SearchForm extends React.Component{


    // dateHandler=(e)=>{
    //     console.log(this.props)
    //     this.props.dateHandler(e)
    // }

    render() {
        console.log("props in search form", this.props)
        return (
            <Segment attached>
                <Dropdown 
                 
                options={options} 
                selection
                value={this.props.searchCategory}
                text={
                    this.props.searchCategory === null ? 
                    'Category'
                    :
                    this.props.searchCategory
                }
                onChange={(e, data) => this.props.searchHandler(e, data)}
                />
    
                <Label for="start" size='big' >Start Date:</Label>
                    
                <Input onChange={(e) => this.props.dateHandler(e)} type="date"  
                min="2020-09-01" max="2020-09-31" input={this.props.searchDate } ></Input>
                <Button size='large' onClick={this.props.resetFilteredEventsArray}>Reset Search</Button>

            </Segment>

        )
    }
}

export default SearchForm;