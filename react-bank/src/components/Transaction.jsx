import React, { Component } from 'react';

  class Transaction extends Component {
    
    deleteAction = () => {
        this.props.deleteAction(this.props.actionData)
    }

    render() {
        const actionData = this.props.actionData
        return (
            <div id={this.props.trackNum} className="transaction">
                <p>Category: {actionData.category}</p>
                <p>Vendor: {actionData.vendor}</p>
                <p>Amount: {actionData.amount}</p>
                <button onClick={this.deleteAction}>Delete</button>
                <hr/>
            </div>
            )
    }

  }
        
export default Transaction;

