import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    const searchResults = this.props.searchResults.map(curr => <li key={curr.id} data-id={curr.id} onClick={this.props.handleSelect} className="currency-list-item"><a href="#" style={{ color: 'black' }} className="currency"><span>{curr.name}</span><span>{curr.currency_symbol}</span></a></li>)
    return (
      <div>
        <h1>CryptoCurrency Calculator</h1>
        <form>
          <div className="form-group">
            <label>Search for a Currency: </label> <br />
            <input onChange={this.props.handleChange} className="field" autoComplete="off" type="text" name="name" placeholder="Ex: Bitcoin, Litecoin, Ethereum..." />
          </div>
          <div className="currency-list">
            {searchResults}
          </div>
        </form>
      </div>
    )
  }
}

export default Search;