import React, { Component } from 'react';
import SingleSum from './SingleSum'
import { PieChart } from 'react-minimal-pie-chart';
 
  class Analytics extends Component {
  
    render() {
        const transactions = this.props.transactions
        const final = {}
        transactions.forEach(transaction => {
            if(final[transaction.category]){
                final[transaction.category]+=transaction.amount 
            } else {
                final[transaction.category] = transaction.amount
            }
        })
        const colors = ['#2ecc71', '#f1c40f', '#f39c12', '#9b59b6', '#1abc9c']
        const pieData = Object.keys(final).map((category,i) => ({'title': category, 'value':Math.abs(final[category]), color: colors[i]}) )
        console.log(final)
        return (
            <div id="sums">
                <h2>Total by category:</h2>
                {Object.keys(final).map(category => <SingleSum category={category} sum={final[category]}/>)}
                <PieChart id="pie-chart" data={pieData}/>
            </div>)
    }
    
  }
        
export default Analytics;

