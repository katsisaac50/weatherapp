import React, { Component } from 'react'
import DetailedData from './DetailedData';

 class WeatherUpdates extends Component {
  render() {
      const {title,woeid}= this.props.city
    return (
      <div>
        {title}
        <DetailedData woeid={woeid} key={woeid}/>
      </div>
    )
  }
}
export default WeatherUpdates;