import React from 'react'
import "./Flight.css"

export default function Flight(props) {
    const [Flight]= [props.flight]
    console.log(Flight)
  return (
    <div className="Parent">
            <div className="child">
              <img src={require("../images/RAM.png")} />
            </div>
            <div className="child">
              <div className="Hour">
                <p>{Flight.departure_time.slice(11,16)}</p>
              </div>
              <div className="Country">
                <p>{Flight.departure.country}</p>
                <p>{Flight.departure.city}</p>
              </div>
            </div>
            <div className="child">
              <div className="flesh">
              </div>
              <div className="arr1"></div>
              <div className="arr2"></div>
            </div>
            <div className="child">
            <div className="Hour">
                <p>{Flight.arrival_time.slice(11,16)}</p>
              </div>
              <div className="Country">
                <p>{Flight.arrival.country}</p>
                <p>{Flight.arrival.city}</p>
              </div>
            </div>
            <div className="child">
            </div>
            <div className="child">
              <p>{Flight.price} $$</p>
              <button>En savoir plus</button>
            </div>
    </div>
  )
}
