import React, { Component } from 'react'
import WeatherUpdates from './WeatherUpdates';

class WeatherList extends Component {
  constructor(){
    super();
    this.state={}
  }
  
  render() {
    const {locationData}=this.props
    if (!locationData)
    return null  
    return (
      <div>
      {locationData.map(city=>
        /* <div>
        <h1 key={city.title}>{city.title}</h1>
        <p>{city.woeid}</p>
        </div> */
      
       <WeatherUpdates key={city.title} city={city}/>
        
        )}

      </div>
    )
  }
}

export default WeatherList