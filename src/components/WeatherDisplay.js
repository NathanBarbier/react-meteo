import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherDisplay = ({ searchTerm }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData(searchTerm)
    }, [])

    const fetchData = async (searchTerm) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&lang=fr&units=metric&appid=6193f9c91e0d8975adb8c302aeaf5862`)
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    if (!data) {
        return <div>Chargement...</div>
    }

    const { name, main, weather } = data

    console.log(data)
    if (!name || !main || !weather) {
        return <div>Données météo manquantes</div>
    }

    

    return (
        <>
            <h3>{name}</h3>
            <div>
                <p>{main.temp}°C</p>
                <p>{weather[0].description}</p>
            </div>
        </>
    )
}

export default WeatherDisplay
