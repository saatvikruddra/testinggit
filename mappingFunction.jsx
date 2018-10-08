import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0
     };
     styles = {
         fontSize : 15,
         fontWeight : 'bold'
     }

     handleIncrement = () => {
         this.setState({count: this.state.count + 1 })
     };
     handleDecrement = () => {
         this.setState({count: this.state.count -1})
     }
     
     
    //  buttonDisabled = {
    //         let buttonDisable = ""
    //  }

    render() { 
        return ( 
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                onClick={this.handleIncrement} 
                className = "btn btn-secondary btn-sm">
                Increment
                </button>
                <button onClick={this.handleDecrement}
                className = "btn m-2 btn-secondary btn-sm"
                disabled={!this.state.count}>
                Decrement
                </button>
                <button className="btn btn-warning btn-sm ml-4"> x Reset</button>
            </div>

         );

        }

    

    resetButton() {
        this.baseState= this.state;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;