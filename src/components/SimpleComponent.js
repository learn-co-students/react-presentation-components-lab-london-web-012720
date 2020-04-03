// Code SimpleComponent Here
import React from 'react';
import SimplerComponent from './SimplerComponent'


class SimpleComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    state = { 
        mood: "happy"
     }

     handleClick = () => {
        // const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
         this.setState({ mood: "sad" });
     }
    render() { 
        return ( 
        <div onClick={this.handleClick}>{this.state.mood}
        </div>
         );
    }
}
 
export default SimpleComponent;