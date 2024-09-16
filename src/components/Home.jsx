import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import flightsData from "../data/flights_data"

export default function Home() {
    useEffect(() => {
        document.body.style.background = "linear-gradient(180deg, #FFAF4B 82.63%, #BD6E53 107.28%)";
        document.body.style.height = "100vh"
      }, []);
      
    const navigate = useNavigate();
    const [search, setSearch] = useState({
        From: "",
        To: "",
        Date: ""
    });
    const [isFromDropdownVisible, setFromDropdownVisible] = useState(false);
    const [isToDropdownVisible, setToDropdownVisible] = useState(false);
    const DepCities=[];
    flightsData.map((e)=>{
        if(!DepCities.includes(e.departure.city)){
            DepCities.push(e.departure.city)
        }
    })
    const ArrCities = []
        flightsData.map((e)=>{
        if(!ArrCities.includes(e.arrival.city)){
            ArrCities.push(e.arrival.city)
        }
    })

    function handelSubmit(e){
        e.preventDefault();
        console.log(search);
        navigate("/Result",{state:{search}})
    }

    useEffect(() => {
        function runSlideshow() {
            let currentIndex = 0;
            const slides = document.querySelector('.slides');
            const totalSlides = document.querySelectorAll('.slides img').length;

            setInterval(function () {
                currentIndex++;

                if (currentIndex === totalSlides) {
                    currentIndex = 0;
                }

                slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            }, 3000);
        }

        runSlideshow();
    }, []);

    return (
        <main>
            <div id="slideshow">
                <div className="slides">
                    <img src={require("../images/slideFrame/SFimg1.png")} alt="Slide 1" />
                    <img src={require("../images/slideFrame/SFimg2.png")} alt="Slide 2" />
                    <img src={require("../images/slideFrame/SFimg3.png")} alt="Slide 3" />
                    <img src={require("../images/slideFrame/SFimg4.png")} alt="Slide 4" />
                </div>
            </div>
            <div className="titleParent">
                <p className="title">AIR TRACKER</p>
            </div>
            <div className="section">
                <p>
                    Experience seamless flight tracking with our user-friendly interface. Stay informed on real-time departure and arrival updates, ensuring you never miss a moment. Your go-to tool for hassle-free travel information.
                </p>
                
                    <form className="searchSection" onSubmit={handelSubmit}>
                        <div className="child1">
                            <div>
                                <h4>From</h4>
                                <input
                                    type="text"
                                    placeholder="Country, city or airport"
                                    onChange={(e) => {setSearch({ ...search, From: e.target.value });
                                    setFromDropdownVisible(true);}
                                }
                                    value={search.From}
                                    required
                                />                                                                                                                          
                        {isFromDropdownVisible && (
                                        <ul className="Dropdown">
                                            {DepCities.filter(e => e.charAt(0).toLowerCase() === search.From.charAt(0).toLowerCase()).map(element => (
                                                <li 
                                                    key={element}
                                                    onClick={(e) => {
                                                        setSearch({ ...search, From: e.target.textContent });
                                                        setFromDropdownVisible(false); // Hide dropdown after clicking an item
                                                    }}
                                                >
                                                    {element}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                            </div>
                            <div>
                                <h4>To</h4>
                                <input
                                    type="text"
                                    placeholder="Country, city or airport"
                                    required
                                    onChange={(e) => {setSearch({ ...search, To: e.target.value });
                                    setToDropdownVisible(true)
                                }}
                                    value={search.To}
                                />
                                {isToDropdownVisible && (
                                    <ul className="Dropdown">
                                        {ArrCities.filter(e => e.charAt(0).toLowerCase() === search.To.charAt(0).toLowerCase()).map(element => (
                                            <li 
                                                key={element}
                                                onClick={(e) => {
                                                    setSearch({ ...search, To: e.target.textContent });
                                                    setToDropdownVisible(false); // Hide dropdown after clicking an item
                                                }}
                                            >
                                                {element}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div>
                                <h4>Date</h4>
                                <input
                                    type="date"
                                    required
                                    onChange={(e) => setSearch({ ...search, Date: e.target.value })}
                                />
                                
                            </div>
                            <div>
                                <h4>Travellers & Class</h4>
                                <input type="text" placeholder="number of travellers & class" />
                            </div>
                        </div>
                        <div className="child2">
                            <button>Search</button>
                        </div>
                    </form>
                </div>
            
        </main>
    );
}
