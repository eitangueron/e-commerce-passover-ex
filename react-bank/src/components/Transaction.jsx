import React, { Component } from 'react';


  class Transaction extends Component {
    
    deleteAction = () => {
        this.props.deleteAction(this.props.actionData)
    }

    render() {
        const actionData = this.props.actionData
        return (
            <div id={this.props.trackNum} className="transaction">
                <p className="capitalize">Category: {actionData.category}</p>
                <p className="capitalize">Vendor: {actionData.vendor}</p>
                <p>Amount: {actionData.amount}</p>
                <i class="material-icons" onClick={this.deleteAction}>delete</i>
                <hr/>
            </div>
            )
    }

  }
        
export default Transaction;

