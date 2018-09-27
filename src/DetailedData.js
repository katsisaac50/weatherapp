import React, { Component } from 'react'

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
          // console.log(data)
        });
/*         this.getDayName = this.getDayName.bind(this);
 */    }
      
/*
* This function returns the Day Name
* INPUT :    appDate : Date in mm-dd-yyyy format
*   seperator: the date seperator
*/
 
getDayName(appDate, seperator){


  // Name of the days as Array
  let dayNameArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
  let dateArr = appDate.split(seperator); // split the date into array using the date seperator
  let year = dateArr[0];
  let month = dateArr[1]; 
  let day = dateArr[2];
  
 // Calculate the total number of days, with taking care of leapyear 
 let totalDays = day + (2*month) + parseInt(3*(month+1)/5) + year + parseInt(year/4) - parseInt(year/100) + parseInt(year/400) + 2;
 console.log(totalDays%7)
 
 // Mod of the total number of days with 7 gives us the day number
 let dayNo = (totalDays%7);
 // if the resultant mod of 7 is 0 then its Saturday so assign the dayNo to 7
 if(dayNo == 0){
      dayNo = 7;
 }
return dayNameArr[dayNo-1]; // return the repective Day Name from the array


}

  render() {
    if(!this.state.data)
    return null;
   // {console.log(this.state.data)}
    return (
      <div>
      {this.state.data.consolidated_weather
        .map(forecastData=>
        
        <div>  <p>{Math.round(forecastData.the_temp)} &#8451;</p>
        <p>{this.getDayName(forecastData.applicable_date, "-")}</p>
        </div>)}
        {this.props.woeid}
      </div>
    )
  }
}
export default DetailedData