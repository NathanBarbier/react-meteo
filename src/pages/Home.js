import React, { useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import axios from 'axios'

const Home = () => {
    const [data, setData] = useState([])

    const handleSearch = (searchTerm) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&lang=fr&units=metric&appid=6193f9c91e0d8975adb8c302aeaf5862`
        fetchData(url)
    }

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url)
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    
    console.log(data)

    return (
        <>
            <h1>Meteo</h1>

            <div>
                <h1>Search Example</h1>
                <SearchForm onSearch={handleSearch} />
            </div>

            <div>{data.name}</div>
        </>
    )
}

export default Home
