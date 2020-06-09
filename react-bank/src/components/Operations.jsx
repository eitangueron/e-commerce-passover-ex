import React, { Component } from 'react';

  class Operations extends Component {

    constructor(){
      super()
      this.state={
        categoryInput:"",
        vendorInput:"",
        amountInput:"",
      }
    }

    updateInput = (event) => {
      if(event.target.name === 'category-input'){
        this.setState({categoryInput:event.target.value})
      } else if(event.target.name === 'vendor-input'){
        this.setState({vendorInput:event.target.value})
      } else if(event.target.name === "amount-input"){
        this.setState({amountInput:event.target.value})
      }
    }

    clearInputFields = () => {
      this.setState({
        categoryInput:"",
        vendorInput:"",
        amountInput:""
      })
    }

    deposit = () =>{
      if(this.state.categoryInput && this.state.vendorInput && this.state.amountInput){
        this.props.addTransaction(this.state.amountInput, this.state.vendorInput, this.state.categoryInput)
        this.clearInputFields()
      }
    }

    withdraw = () =>{
      if(this.state.categoryInput && this.state.vendorInput && this.state.amountInput){
        this.props.addTransaction(0-this.state.amountInput, this.state.vendorInput, this.state.categoryInput)
        this.clearInputFields()
      }
    }

    render() {
    return (<div id="operations">
              <input type="text" placeholder="Category" name="category-input" value={this.state.categoryInput} onChange={this.updateInput}/>
              <br/>
              <input type="text" placeholder="Vendor" name="vendor-input" value={this.state.vendorInput} onChange={this.updateInput}/>
              <br/>
              <input type="number" placeholder="Amount" name="amount-input" value={this.state.amountInput} onChange={this.updateInput}/>
              <br/>
              <button onClick={this.deposit}>Deposit</button>
              <br/>
              <button onClick={this.withdraw}>Withdraw</button>
          </div>)
    }
    
  }
        
export default Operations;

