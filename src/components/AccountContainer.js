import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  // constructor() {
  //   super()
  //   // get a default state working with the data imported from TransactionsData
  //   // use this to get the functionality working
  //   // then replace the default transactions with a call to the API

  // }

  state = {
    transactions: [],
    searchInput: ""
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response => response.json())
    .then(transactionsData => this.setState({
      transactions: transactionsData
    }))
  }

  getSearchInput = (userInput) => {
    this.setState({
      searchInput: userInput
  })
}


  render() {

    const filteredTransactions = [...this.state.transactions].filter(transaction => (transaction.description.includes(this.state.searchInput) || transaction.category.includes(this.state.searchInput)))


    return (
      <div>
        <Search getSearchInput={this.getSearchInput}/>
        <TransactionsList transactions={filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
