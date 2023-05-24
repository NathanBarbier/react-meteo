import React, { useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import axios from 'axios'
import Error from '../components/Error'

const Home = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState([])

    const handleSearch = (searchTerm) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&lang=fr&units=metric&appid=6193f9c91e0d8975adb8c302aeaf5862`
        fetchData(url)
    }

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url)
            setData(response.data)
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            {error ?? null}

            <div className='container mt-5'>

            <h1>Meteo</h1>

            <div>
                <SearchForm onSearch={handleSearch} />
            </div>

            <div>{data.name}</div>
            </div>

        </>
    )
}

export default Home
