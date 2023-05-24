import React, { useState } from 'react';
import SearchBar from '../components/SearchBar'
import SearchForm from '../components/SearchForm';

const Home = () => {
    const [search, setSearch] = useState('');
    
    const handleSearch = (searchTerm) => {
        setSearch(searchTerm)
    }

    return (
        <>
            <h1>Meteo</h1>

            <div>
                <h1>Search Example</h1>
                <SearchBar onSearch={handleSearch} />
            </div>

            <SearchForm ville={search} />
        </>
    )
}

export default Home
