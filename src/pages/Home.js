import React, { useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import axios from 'axios'
import WeatherDisplay from '../components/WeatherDisplay'    
import Error from '../components/Error'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [error, setError] = useState([])

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm)
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

            <div>
                { searchTerm  ? (
                    <WeatherDisplay searchTerm={searchTerm} />
                )
            : null}
                
            </div>
        </>
    )
}

export default Home
