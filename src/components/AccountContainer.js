import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactionsList: [],
    unfilteredTransactions: [],
    searchTerm: ""
  }

//-------------------FETCH TRANSACTIONS DATA
  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(data => {
      this.setState({
        transactionsList: data,
        unfilteredTransactions: data
      })
    })
  }

//-----------------------UPDATE STATE FOR THE SEARCH TERM
  handleChange= (event)=> {
   this.setState({searchTerm: event.target.value}, () => {
     const search = this.state.searchTerm.toLowerCase()
     const transactionsClone = [...this.state.unfilteredTransactions]

//---------------------clone search term and transactionsList
//----------------------search works lowercased and with capitalization
      let filtered = transactionsClone.filter(transaction => transaction.description.toLowerCase().includes(search) || transaction.category.toLowerCase().includes(search)
     )

 this.setState({transactionsList: filtered})
   })



}
  render() {



    // console.log(this.state.transactionsList);

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList
           transactionsList={this.state.transactionsList} />
      </div>
    )
  }
}

export default AccountContainer
