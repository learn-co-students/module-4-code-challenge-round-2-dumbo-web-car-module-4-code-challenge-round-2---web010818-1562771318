import React from 'react'

class Search extends React.Component {

  render(){
// console.log(this.props);
  return (
    <div className="ui huge fluid icon input">
      <input onChange={this.props.handleChange}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}}

export default Search
