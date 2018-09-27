import React, { Component } from 'react';
import WeatherList from './WeatherList';
import './App.css';
import axios from 'axios';

class WeatherSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { searchKeyword: "", isFirstTime: true };
    this.search = this.search.bind(this);
  }

  search() {
    const url = `https://www.metaweather.com/api/location/search/?query=${this.state.searchKeyword}`

    /* fetch(url).then(body => {
      console.log('body ', body);
       this.setState({ gits: body.items, isFirstTime: false })
       
    }
    ); */
    fetch(url)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>{
      console.log(data),
      this.setState({
        locationData: data,
        isLoading: false,
      })}
    )
    // Catch any errors we hit and update the app
    .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { searchKeyword,locationData, isFirstTime } = this.state;
    return (
      <div className="App">
        <div className="github">
        <div className="search">
          <input
            placeholder="search for user"
            onChange={e => {
              this.setState({ searchKeyword: e.target.value });
            }}
            value={searchKeyword}
          />
          <button onClick={this.search}>Search</button>
          <WeatherList locationData={locationData} isFirstTime={isFirstTime} />
        </div>
      </div>
      </div>
    );
  }
}

export default WeatherSearch;