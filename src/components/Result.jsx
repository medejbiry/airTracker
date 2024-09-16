import React from 'react'
import { useLocation } from "react-router-dom";
import flightsData from "../data/flights_data"
import {useState , useEffect} from "react"
import Flight from "./Flight.jsx"
import "./Result.css"
export default function Result() {
  const location = useLocation();
  const { search } = location.state; 
    const [data,setData] = useState(flightsData)
    let flights = data.filter((x)=>x.departure.city == search.From && x.arrival.city == search.To )
    useEffect(() => {
      document.body.style.background = "white";
      

    }, []);

 
  return (
    <div className='Result'>
        <div className='Rtitle'><p>Selected flight infos</p></div>
        <div className='Flights'>
            {flights.map((element) => <Flight flight={element} />)}
        </div>



    </div>
  )
}
