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
      <div className='weatherToday'>
          
      <div>
      <div className='today'>
            <h3>{this.props.title + ',' + '  ' + this.state.data.parent.title}</h3>
            {this.state.data.consolidated_weather.filter(word => word.applicable_date === utc)
               .map(forecastData => <div className='today'>
                                      <Displayicon utc={utc} data={forecastData.applicable_date} icon={forecastData.weather_state_abbr} />
                                      <p className='temp'>
                                        {Math.round(forecastData.the_temp)} ℃
                                      </p>
                                      <p>
                                        {this.getDayName(forecastData.applicable_date, '-')+', '+forecastData.applicable_date}
                                      </p>
                                    </div>)}
          </div>
      
      <aside className='aside'>
      {this.state.data.consolidated_weather.filter(word => word.applicable_date === utc).map(forecastData => <div className='today'>
{/*                                <Displayicon utc={utc} data={forecastData.applicable_date} icon={forecastData.weather_state_abbr} />
 */}                            
                                 <p>Humidity: {forecastData.humidity}%</p>
                                 <p>Wind speed: {forecastData.wind_speed.toFixed(1)} m/s</p>
                                 <p>Max Temp: {forecastData.max_temp.toFixed(1)}℃</p>
                                 <p>Min Temp: {forecastData.min_temp.toFixed(1)} ℃</p>
                                 </div>)}
      </aside>
      </div>
      
        {this.state.data.consolidated_weather.filter(word => word.applicable_date !== utc)
           .map(forecastData => <div className='otherDays'>
                                  <Displayicon utc={utc} data={forecastData.applicable_date} icon={forecastData.weather_state_abbr} />
                                  <p>
                                    {Math.round(forecastData.the_temp)} ℃
                                  </p>
                                  <p>
                                    {this.getDayName(forecastData.applicable_date, '-')}
                                  </p>
                                </div>)}
      </div>
    )
  }
}
export default DetailedData
