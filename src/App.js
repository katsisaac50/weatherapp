import React, { Component } from 'react';
import './App.css';
import WeatherSearch from './weatherSearch';
import Headers from './component/header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Headers/>
      <WeatherSearch/>
      </div>
    );
  }
}

export default App;
