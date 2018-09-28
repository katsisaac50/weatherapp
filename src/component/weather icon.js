import React from 'react'
import { Img01, Img02, Img03, Img04, Img05, Img06, Img07, Img08, Img09, Img10 } from '../assets/Images'
  
function Displayicon (props) {
  let icon = props.icon
  switch (icon) {

  case 'sn':
  return (<img src={Img08} alt='Snow' style={{width: '64px'}} />)
  case 'sl':
  return (<img src={Img07} alt='Sleet' style={{width: '64px'}} />)
  case 'h':
  return (<img src={Img02} alt='Hail' style={{width: '64px'}} />)
  case 't':
  return (<img src={Img09} alt='Thunderstorm' style={{width: '64px'}} />)
  case 'hr':
  return (<img src={Img04} alt='Heavy Rain' style={{width: '64px'}} />)
  case 'lr':
  return (<img src={Img10} alt='Light Rain' style={{width: '64px'}} />)
  case 's':
  return (<img src={Img06} alt='Showers' style={{width: '64px'}} />)
  case 'hc':
  return (<img src={Img03} alt='Heavy Cloud' style={{width: '64px'}} />)
  case 'lc':
  return (<img src={Img05} alt='Light Cloud' style={{width: '64px'}} />)
  case 'c':
  return (<img src={Img01} alt='Clear' style={{width: '64px'}} />)
  default:
  return <p>No icon to display</p>
}

  console.log(props.icon)

  return <div>
           Search For User
         </div>
}
export default Displayicon
