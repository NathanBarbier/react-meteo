import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function SearchForm({ville}){

    const [data, setData] = useState([])
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ville+'&lang=fr&units=metric&appid=6193f9c91e0d8975adb8c302aeaf5862')
            setData(response.data)
        } catch (error) {
            console.error(error)
        }

        return(
            <p>
                {data}
            </p>
        )
    }
}

export default SearchForm