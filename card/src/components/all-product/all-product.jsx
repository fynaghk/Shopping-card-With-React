import React, { Component } from 'react';
import './style.css';

class All extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="all">
                <h3>All products</h3>
                <h3>10</h3>
                <button className="reset">Reset</button>
            </div>
        );
    }
}
 
export default All;