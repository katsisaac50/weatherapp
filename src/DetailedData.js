import React, { Component } from 'react'
import moment from 'moment'
import Displayicon from './component/weather icon'

var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
class DetailedData extends Component {
  constructor () {
    super()
    this.state = {}
  }
  // make an api request to fetch detailed data using /api/location/(woeid) end-point
  componentDidMount () {
    let url = `https://www.metaweather.com/api/location/${this.props.woeid}/`

    fetch(url)
      .then(response => response.json())
      .then(data => {

        this.setState({data})
        console.log(data)
      })
  }

  /*
  * This function returns the Day Name
  * INPUT :    appDate : Date in mm-dd-yyyy format
  *  using moment libray to get date
  */

  getDayName (appDate, seperator) {
    var dt = moment(appDate, 'YYYY-MM-DD')

    return dt.format('dddd')
  }

  render () {
    if (!this.state.data)
      return null
    // {console.log(this.state.data)}
    return (
      <main className="main">
      <div className='weatherToday'>
          <div className='today'>
            <h3>{this.props.title + ',  ' + this.state.data.parent.title}</h3>
            {this.state.data.consolidated_weather.filter(word => word.applicable_date === utc)
               .map(forecastData => <div key = {forecastData.id}>
                                      <Displayicon utc={utc} data={forecastData.applicable_date} icon={forecastData.weather_state_abbr} />
                                      <p>{forecastData.weather_state_name}</p>
                                      <p className='temp'>
                                        {Math.round(forecastData.the_temp)} ℃
                                      </p>
                                      <p>
                                        {this.getDayName(forecastData.applicable_date, '-') + ', ' + forecastData.applicable_date}
                                      </p>
                                    </div>)}
          </div>
          
            {this.state.data.consolidated_weather.filter(word => word.applicable_date === utc)
               .map(forecastData => <aside className='aside' key = {forecastData.id}>
                                      <p>
                                        Humidity:
                                        {forecastData.humidity}%
                                      </p>
                                      <p>
                                        Wind speed:
                                        {forecastData.wind_speed.toFixed(1)} m/s
                                      </p>
                                      <p>
                                        Max Temp:
                                        {forecastData.max_temp.toFixed(1)}℃
                                      </p>
                                      <p>
                                        Min Temp:
                                        {forecastData.min_temp.toFixed(1)} ℃
                                      </p>
                                      </aside>)}
  
        </div>
        <div className='text-center'>
        {this.state.data.consolidated_weather.filter(word => word.applicable_date !== utc)
           .map(forecastData => 
                                  <div className='otherDays ' key = {forecastData.id}>
                                  <p>{forecastData.weather_state_name}</p>
                                  <Displayicon utc={utc} data={forecastData.applicable_date} icon={forecastData.weather_state_abbr} />
                                    <p>
                                      {Math.round(forecastData.the_temp)} ℃
                                    </p>
                                    <p>
                                      {this.getDayName(forecastData.applicable_date, '-')}
                                    </p>
                                  </div>
                                  
                                )}
                                </div>  
      </main>)
  }
}
export default DetailedData
