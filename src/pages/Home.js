import React, { useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import axios from 'axios'
import WeatherDisplay from '../components/WeatherDisplay'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm)
    }

    return (
        <>
            <h1>Meteo</h1>

            <div>
                <h1>Search Example</h1>
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
