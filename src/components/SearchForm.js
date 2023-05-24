import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SearchForm = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(searchTerm)
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className='ps-3'
                    type='text'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}

export default SearchForm
