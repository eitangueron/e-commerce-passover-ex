import './App.css';
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import React, { Component } from 'react';

  class App extends Component {
    
    constructor(){
      super()
      this.state={
        transactions:[
          { amount: 3200, vendor: "Elevation", category: "Salary" },
          { amount: -7, vendor: "Runescape", category: "Entertainment" },
          { amount: -20, vendor: "Subway", category: "Food" },
          { amount: -98, vendor: "La Baguetterie", category: "Food" }
        ],
      }
    }
    
    reducer = (accumulator, currentValue) => accumulator + currentValue;

    addTransaction = (amount, vendor, category) => {
      const newTransactions = [...this.state.transactions]
      newTransactions.push({amount, vendor, category})
      this.setState({transactions:newTransactions})
    }

    deleteAction = (actionData) => {
      const indexToDelete = this.state.transactions.findIndex(a => a===actionData)
      const updatedTransactions = [...this.state.transactions]
      updatedTransactions.splice(indexToDelete, 1)
      this.setState({transactions:updatedTransactions})
    }

    render() {
      const balance = this.state.transactions.map(a => a.amount).reduce(this.reducer,0)
      return (
        <div id="app">
          <h1 id="total-balance">Balance: ${balance}</h1>
          <hr/>
          <div id="all-transactions">
            <Transactions data={this.state.transactions} deleteAction={this.deleteAction}/>
          </div>
          <div id="operations">
            <Operations addTransaction={this.addTransaction}/>
          </div>
        </div>
            )
    }
    
  }
        
export default App;

