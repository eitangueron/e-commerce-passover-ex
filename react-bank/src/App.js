import './App.css';
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import React, { Component } from 'react';
import axios from '../node_modules/axios'

// http://localhost:4000/transactions

  class App extends Component {
    
    constructor(){
      super()
      this.state={
        transactions:[],
      }
    }

    async getTransactions() {
      return axios.get("http://localhost:4000/transactions")
    }
  
    async componentDidMount() {
      const response = await this.getTransactions()
      this.setState({ transactions: response.data })
    }
    
    reducer = (accumulator, currentValue) => accumulator + currentValue;

    addTransaction = async (amount, vendor, category) => {
      const response = await axios.post(`http://localhost:4000/transaction`,{amount, vendor, category})
      const newTransactions = [...this.state.transactions]
      newTransactions.push(response.data)
      this.setState({transactions:newTransactions})
    }

    deleteAction = async (actionData) => {
      const response = await axios.delete(`http://localhost:4000/transaction/${actionData.amount}/${actionData.vendor}/${actionData.category}`)
      const indexToDelete = this.state.transactions.findIndex(a => a._id===response.data._id)
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

