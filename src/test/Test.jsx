import flightsData from "../data/flights_data"
import { useState } from "react"
import "./Test.css"
export default function Test() {
    const [data,setData] = useState(flightsData)
    const [data1,setdata1] = useState(data[1])



  return (
    <>

 
    </>
  )
}
