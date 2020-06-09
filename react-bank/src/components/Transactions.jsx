import React, { Component } from 'react';
import Transaction from './Transaction'

  class Transactions extends Component {
  
    render() {
        const data = this.props.data
        return (
          <div id="all-transactions">
            {data.map((action,i) => <Transaction key={'transaction '+i} actionData={action} trackNum={'transaction '+i} deleteAction={this.props.deleteAction}/>)}
          </div>
            )
    }
    
  }
        
export default Transactions;

