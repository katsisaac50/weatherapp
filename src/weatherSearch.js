import React, { Component } from 'react';
import WeatherList from './WeatherList';
import './App.css';
import axios from 'axios';

class WeatherSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { searchKeyword: ""};
    this.search = this.search.bind(this);
  }

  componentDidMount () {
    let url = `https://www.metaweather.com/api/location/search/?query=london`

    fetch(url)
      .then(response => response.json())
      .then(data => {

        this.setState({
          locationData: data,
        })
      })
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
     <div className="container">
      <div className="search">
          <input
          class="search_4"
            placeholder="enter city name"
            onChange={e => {
              this.setState({ searchKeyword: e.target.value });
            }}
            value={searchKeyword}
          />
          <button class="submit_4" onClick={this.search}>Search</button>
      </div>
      <main className="main">
        <WeatherList locationData={locationData} isFirstTime={isFirstTime} />

      </main>
      </div>
    );
  }
}

export default WeatherSearch;