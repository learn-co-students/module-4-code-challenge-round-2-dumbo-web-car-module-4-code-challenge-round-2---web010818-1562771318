import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {

  state = {
    transactionsList: []
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(data => {
      this.setState({transactionsList: data})
    })
  }

  render() {
    // console.log(this.state.transactionsList);
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>

        <AccountContainer transactionsList={this.state.transactionsList}
          />

      </div>
    )
  }
}

export default App
