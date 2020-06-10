import React, { Component } from 'react';

  class SingleSum extends Component {
  
    render() {
    return (
        <div>
            <p className={'capitalize sum'}>{this.props.category}: {this.props.sum}</p>
            <hr/>
        </div>
        )
    }
    
  }
        
export default SingleSum;

