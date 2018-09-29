import React from 'react'
import '../index.css';
import { Img01, Img02, Img03, Img04, Img05, Img06, Img07, Img08, Img09, Img10 } from '../assets/Images'
  
function Displayicon (props) {
  let icon = props.icon
  console.log(props.data===props.utc)
  let className;
const iconClass = props.data===props.utc ? ' menu-active': 'weather-icon' 
  switch (icon) {

  case 'sn':
  return (<img src={Img08} alt='Snow' className = {iconClass} />)
  case 'sl':
  return (<img src={Img07} alt='Sleet' className = {iconClass} />)
  case 'h':
  return (<img src={Img02} alt='Hail' className = {iconClass} />)
  case 't':
  return (<img src={Img09} alt='Thunderstorm' className = {iconClass} />)
  case 'hr':
  return (<img src={Img04} alt='Heavy Rain' className = {iconClass} />)
  case 'lr':
  return (<img src={Img10} alt='Light Rain' className = {iconClass} />)
  case 's':
  return (<img src={Img06} alt='Showers' className = {iconClass} />)
  case 'hc':
  return (<img src={Img03} alt='Heavy Cloud' className = {iconClass} />)
  case 'lc':
  return (<img src={Img05} alt='Light Cloud' className = {iconClass} />)
  case 'c':
  return (<img src={Img01} alt='Clear' className = {iconClass} />)
  default:
  return <p>No icon to display</p>
}

  console.log(props.icon)

  return <div>
           Search For User
         </div>
}
export default Displayicon
