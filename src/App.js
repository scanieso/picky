import React, { Component } from 'react';
import Select from './Select';
import './App.css';
import PICKS from './utils/picks';

const TYPE_OPTIONS = [
  'To Do',
  'To Eat',
  'Random'
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: 'Random'
    };
  }

  pick = (e) => {
    const selectedType = e.target.value;
    const random = Math.random();
    let picks = PICKS;

    if (selectedType !== 'Random') {
      picks = PICKS.filter((pick) => {
        return pick.type === selectedType;
      });
    }

    const pick = picks[Math.floor(picks.length * random)];
    this.setState({
      pick: pick.name
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1>Picky</h1>
            <p>App to choose stuff</p>

            <Select
              options={TYPE_OPTIONS}
              onChange={this.pick} />
          </div>
        </header>

        <main id="main">
          <div className="container">
            <h2>{this.state.pick}</h2>
            <button onClick={this.pick}>Try another?</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
