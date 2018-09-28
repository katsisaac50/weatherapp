import React, { Component } from 'react';
import moment from 'moment';
class DetailedData extends Component {
    constructor(){
        super();
        this.state={}
    }
    //make an api request to fetch detailed data using /api/location/(woeid) end-point
    componentDidMount(){
      let url=`https://www.metaweather.com/api/location/${this.props.woeid}/`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
      
          this.setState({data}) 
          console.log(data)
        });
/*         this.getDayName = this.getDayName.bind(this);
 */    }
      
/*
* This function returns the Day Name
* INPUT :    appDate : Date in mm-dd-yyyy format
*  using moment libray to get date
*/
 
getDayName(appDate, seperator){
  var dt = moment(appDate, "YYYY-MM-DD");

   return   dt.format('dddd')

}

  render() {
    if(!this.state.data)
    return null;
   // {console.log(this.state.data)}
    return (
      <div>
      <p>{this.state.data.parent.title}</p>
      {this.state.data.consolidated_weather
        .map(forecastData=>
        
        <div>  
        <p>{Math.round(forecastData.the_temp)} &#8451;</p>
        <p>{this.getDayName(forecastData.applicable_date, "-")}</p>
        </div>)}
        {this.props.woeid}
      </div>
    )
  }
}
export default DetailedData