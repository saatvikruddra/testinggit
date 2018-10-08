import React, { Component } from 'react';
import Counter from './mappingFunction'
import CartTopic from './theCartTopic'
class Counters extends Component {
    
    render() { 
        return ( 
<React.Fragment>
            <CartTopic/>
            <hr/>
            <div>
                <Counter />
                <Counter />
                <Counter />
                <Counter />
            </div>

</React.Fragment>
             );
        }
    }
    
export default Counters;