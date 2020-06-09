import React, { Component } from 'react';
import Transaction from './Transaction'

  class Transactions extends Component {
  
    render() {
        const data = this.props.data
        return (
            data.map((action,i) => <Transaction key={'transaction '+i} actionData={action} trackNum={'transaction '+i} deleteAction={this.props.deleteAction}/>)
            )
    }
    
  }
        
export default Transactions;

