import React, { useState, useEffect } from 'react';
import './style.css';

const TempApp = () => {

    const [city, setCity] = useState("");
    const [search, setSearch] = useState("New York");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=67c0211e91c54be2b97fffd414bfbbca`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    return (
        <>
            <div className="box">

                <div className='inputData'>
                    <input
                        type="search"
                        className="inputField"
                        onChange={(event) => {
                            const cityName = event.target.value;
                            setSearch(cityName);
                        }}
                        placeholder="Enter city"
                    />
                </div>
                
                {!city ? (
                    <p className="errorMsg">No data found</p>
                ) : (
                        <>
                        <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view" /> {search}
                    </h2>
                    <h1 className="temp">
                        {city.temp}°Cel
                    </h1>
                    <h3 className="tempmin_max"> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
                </div>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                        </>
                    )
                }

            </div>
        </>
    )
};

export default TempApp;

