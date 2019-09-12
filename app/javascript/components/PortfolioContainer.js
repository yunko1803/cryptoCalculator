import React, { Component } from 'react';
import Search from './Search';
import Calculate from './Calculate';
import axios from 'axios';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolio: [],
      search_results: [],
      active_currency: null,
      amount: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    const activeCurrency = this.state.search_results.filter(item => item.id == parseInt(id));
    this.setState({
      active_currency: activeCurrency[0],
    })
    debugger
  }

  handleChange(e) {

    // this.setState({
    //   [e.target.name]: e.target.value
    // })
    console.log(e.target.value);
    axios.post('http://localhost:3000/search', {
      search: e.target.value
    })
      .then((data) => {
        this.setState({
          search_results: [...data.data.currencies]
        })
      })
      .catch((err) => {
        console.log(err);
    })
    console.log(this.state.search_results);
  }
  handleAmount(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleSumbit(e) {

  }

  render() {

    const searchOrCalculate = this.state.active_currency ?
      <Calculate hanleChange={this.handleAmount} handleSubmit={this.handleSubmit} active_currency={this.state.active_currency} amount={this.state.amount}/> :
      <Search searchResults={this.state.search_results} handleSelect={this.handleSelect} name={this.state.name} handleChange={this.handleChange} />
    
    return (
      <div>
        {searchOrCalculate}
      </div>
      
    )
  }
}

export default PortfolioContainer;