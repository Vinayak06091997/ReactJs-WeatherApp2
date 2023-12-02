import React, { useEffect, useState } from 'react'
import '../index.css'

import sun from '../Assets/icons/sun.png'
import cloud from '../Assets/icons/cloud.png'
import fog from '../Assets/icons/fog.png'
import rain from '../Assets/icons/rain.png'
import snow from '../Assets/icons/snow.png'
import storm from '../Assets/icons/storm.png'
import wind from '../Assets/icons/windy.png'



const MiniCard = ({time,temp,iconString}) => {

  const[icon,setIcon]=useState()

  useEffect(()=>{
    if(iconString){
      if(iconString.toLowerCase().includes('cloud'))
      {
        setIcon(cloud)
      }else  if(iconString.toLowerCase().includes('fog'))
      {
        setIcon(fog)
      }else  if(iconString.toLowerCase().includes('rain'))
      {
        setIcon(rain)
      }else  if(iconString.toLowerCase().includes('thunder'))
      {
        setIcon(snow)
      }else  if(iconString.toLowerCase().includes('storm'))
      {
        setIcon(storm)
      }else  if(iconString.toLowerCase().includes('wind'))
      {
        setIcon(wind)
      } 
      else  if(iconString.toLowerCase().include('clear'))
      {
        setIcon(sun)
      } 
    }
  },[iconString])
  return ( 
    <div className='glassCrad  w-[10rem] h-[10rem] p-4 flex flex-col'>
        <p className='text-center'>{new Date().toLocaleTimeString('en',{weekday:'long'}).split(" ")[10]}</p>
        <hr/>
        <div className=' w-full flex justify-center items-center flex-1'>

          <img src={icon} className='w-[4rem] h-[4rem]'/>

        </div>
        <p className='text-center font-bold'>{temp}&deg;C</p>
    </div>
  )
}

export default MiniCard