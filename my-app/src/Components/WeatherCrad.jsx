import React, { useEffect, useState } from 'react'
import {useData} from '../Utilis/useData'
import '../index.css'

import sun from '../Assets/icons/sun.png'
import cloud from '../Assets/icons/cloud.png'
import fog from '../Assets/icons/fog.png'
import rain from '../Assets/icons/rain.png'
import snow from '../Assets/icons/snow.png'
import storm from '../Assets/icons/storm.png'
import wind from '../Assets/icons/windy.png'


const WeatherCrad = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions
}) => {

  const[icon,setIcon]=useState(sun);
  const{time}=useData()

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
   <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCrad p-4'> 
      <div className='flex w-full justify-center items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt='Weather_icon'/>
        <p className='font-bold text-5xl flex justify-center items-center'>
          {temperature} &deg;C
        </p>

      </div>
      <div className='font-bold text-center text-xl'>
          {place}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
          <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
          <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
          <p className='flex text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>
            Wind Speed <p className='text-normal'>{windspeed} km/h</p>
          </p>
          <p className='flex text-center p-2 font-bold bg-green-600 shadow rounded-lg'>
            Humidity <p className='text-normal'>{humidity } gm/m </p>
          </p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 p-3'>
          <p className='fonts-semibold text-lg'>Heat Index</p>

          <p className=' text-lg'>{heatIndex?heatIndex:'N/A'}</p>
      </div>
      <hr className='bg-slate-600'/>
      <div className='w-full flex justify-between items-center font-semibold'>
        {conditions}
      </div>
   </div>
  )
}

export default WeatherCrad