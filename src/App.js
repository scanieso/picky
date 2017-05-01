import React, { Component } from 'react';
import Select from './Select';
import './App.css';
import PICKS from './utils/picks';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';

const TYPE_OPTIONS = [
  'To Do',
  'To Eat',
  'Random'
];

class App extends Component {
  mixins: [ReactFireMixin]

  constructor(props) {
    super(props);
    this.state = {
      selectedType: 'Random'
    };

    const config = {
      apiKey: 'AIzaSyBhcL-9fXFb53AnaClbUuZn0tl271ngsiY',

      // Only needed if using Firebase Realtime Database (which we will be in this example)
      databaseURL: 'https://picky-654c3.firebaseio.com',

      // Only needed if using Firebase Authentication
      authDomain: 'picky-654c3.firebaseapp.com',

      // Only needed if using Firebase Storage
      storageBucket: 'picky-654c3.appspot.com'
    };

    firebase.initializeApp(config);
  }

  componentWillMount() {
    console.log('componentWillMount');
    var ref = firebase.database().ref("items");
    console.log(ref);
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
