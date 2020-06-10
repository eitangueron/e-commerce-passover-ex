import React, { Component } from 'react';


  class Transaction extends Component {
    
    deleteAction = () => {
        this.props.deleteAction(this.props.actionData)
    }

    render() {
        const actionData = this.props.actionData
        return (
            <div id={this.props.trackNum} className="transaction">
              <div className="transaction-info">
                <p className="capitalize">Category: {actionData.category}</p>
                <p className="capitalize">Vendor: {actionData.vendor}</p>
                <p>Amount: {actionData.amount}</p>
              </div>
              <div className="delete">
                <i class="material-icons" onClick={this.deleteAction}>delete</i>
              </div>
            </div>
            )
    }

  }
        
export default Transaction;

