import React, { Component } from 'react'

export default class Search extends Component {

  // state = {
  //   searchInput: ""
  // }

  handleChange = (event) => {
    
    // this.setState({
    //   searchInput: event.target.value
    // })
    
    this.props.getSearchInput(event.target.value)
  }


  render() {
    
    return (
  
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={this.handleChange}
        // value={this.state.searchInput}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}
}
