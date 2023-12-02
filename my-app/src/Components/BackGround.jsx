import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'

import Clear from '../Assets/images/Clear.jpg'

import Fog from '../Assets/images/fog.png'

import Cloudly from '../Assets/images/Cloudy.jpg'

import Rainy from '../Assets/images/Rainy.jpg'

import Snow from '../Assets/images/snow.jpg'

import Stormy from '../Assets/images/Stormy.jpg'

import Sunny from '../Assets/images/Sunny.jpg'




const BackGround = () => {
  const {weather}=useStateContext();
  console.log(weather)

  const[image,setImage]=useState(Clear)

  useEffect(()=>{
      if(weather.conditions){
        let imageString=weather.conditions

        if(imageString.toLowerCase().include('clear')){
          setImage(Clear);
        }else if(imageString.toLowerCase().include('cloud')){
          setImage(Cloudly);
        }else if(imageString.toLowerCase().include('fog')){
          setImage(Fog);
        }else if(imageString.toLowerCase().include('rain') || imageString.toLowerCase().include('shower')){
          setImage(Rainy);
        }else if(imageString.toLowerCase().include('snow')){
          setImage(Snow);
        }else if(imageString.toLowerCase().include('thunder') ||imageString.toLowerCase().include('storm')){
          setImage(Stormy);
        }else if(imageString.toLowerCase().include('Sunny')){
          setImage(Sunny);
        }
      }
  },[weather])
  return (
   <img src={image} alt='weather-image' className='h-screen w-full fixed left-0 top-0 -z-[10]'/>
  )
}

export default BackGround