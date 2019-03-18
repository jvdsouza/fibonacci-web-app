import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      fibVal: '',
      error: ''
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
        numInput: this.state.input
      })
    })
    .then(response => response.json())
    .then(data => this.setState({fibVal: data}))
    .catch(err => console.log("there was an error :(", err))
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
            <h1>{this.state.fibVal}</h1>
          </div>
        </div>
        <footer>Made by Jason D'souza with React</footer> 
      </div>
    );
  }
}

export default App;
