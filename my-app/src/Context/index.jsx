import axios from 'axios'
import { useContext,createContext,useState,useEffect } from 'react'

const StateContext=createContext()


export const StateContextProvider =({childre

    const [weather,setWeather] =useState({})
cd
    const [values,setValues] =useState([])

    const [place,setPlace] =useState('Jaipur')

    const [location,setLocation]=useState('')


    //fetch api
    const fetchWeather=async()=>{

        const options={
            method:'GET',
            url:'https://visual-crossing-weather.p.rapidapi.com/forecast' ,
            params:{
                aggregateHours:'24',
                location:place,
                contentType:'json',
                unitGroup:'metric',
                shortColumnNames: 0,
            },
            headers:{
                'X-RapidAPI-Key': '9FAQJRE5W6P9UYW874SJ3ZCJ2',
                'X-RapidAPI-Host':'visual-crossing-weather.p.rapidapi.com'
            }
        }
        try{

                const response =await axios.request(options)
                console.log(response)
                const thisData=Object.values(response.data.location)[0]
                console.log(thisData)
                setLocation(thisData.address)
                setValues(thisData.values)
                setWeather(thisData.values[0])


        }catch(e){
            console.error();

            alert("This Place Does not exits")

        }

    }

    useEffect(()=>{
          fetchWeather()

    },[place])

    useEffect(()=>{
        console.log(values)
    },[values])

    return(
       < StateContext.Provider value={{
        weather,
        setPlace,
        values,
       
        place

       }}>
            {children}
       </StateContext.Provider>
    )
}

export  const useStateContext=()=>useContext(StateContext)