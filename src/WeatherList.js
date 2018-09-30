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
       <WeatherUpdates key={city.title} city={city}/>
        
        )}
      </div>
    )
  }
}

export default WeatherList