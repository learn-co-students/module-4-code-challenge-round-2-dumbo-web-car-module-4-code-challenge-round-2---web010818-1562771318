import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {


  state ={
    transactions: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(r => r.json())
      .then(transactionData => {
        this.setState({transactions: transactionData})
      })
  }

  handleChange = (input) => {
    this.setState({searchTerm: input})
  }

  render() {

    let transArray = [...this.state.transactions]
    transArray = transArray.filter(trans => {
      return trans.description.includes(this.state.searchTerm) || trans.category.includes(this.state.searchTerm)
    })



    return (
      <div>
        <Search search={this.handleChange}/>
        <TransactionsList transactions={transArray} />
      </div>
    )
  }
}

export default AccountContainer
