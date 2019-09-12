import React, { Component } from 'react';

class Calculate extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <h1>How much {this.props.active_currency} do you own?</h1>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label>Enter amount owned: </label> <br />
            <input onChange={this.props.handleChange} className="field" autoComplete="off" type="text" name="name" placeholder="How much do you onw?" value={this.props.amount} />
          </div>
          <div className="form-group" >
            <input type="submit" className="calculate-btn" value="Calculate My Total"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default Calculate;