import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      fibVal: ''
    }
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    fetch('http://localhost:3001/fibonacci', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
  }

  render() {
    return (
      <div className="main Helvetica tc">
        <div className="ma2">Which number of the fibonacci sequence do you want?</div>
        <input className="ma2" type="text" onChange={this.onInputChange}/>
        <button className="button" onClick={this.onSubmit}>Search</button>
        <div>
          The number {this.state.input} represents:
          <div>
            <h1></h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
