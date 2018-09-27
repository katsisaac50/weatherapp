import React, { Component } from 'react';
import './App.css';
import WeatherSearch from './weatherSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>weatherapp</h1>
        <WeatherSearch/>
      </div>
    );
  }
}

export default App;
