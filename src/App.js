import React, { Component } from 'react';
import Select from './Select';
import './App.css';

const options = [
  'Activity',
  'Restaurant',
  'Random'
];

class App extends Component {
  handleChange(e) {
    const { value } = e.target;
    this.setState({ category: value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1>Picky</h1>
            <p>App to choose stuff</p>
          </div>
        </header>

        <main id="main">
          <div className="container">
            <Select options={options} onChange={this.handleChange} />

            <p>Selected: {this.category}</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
