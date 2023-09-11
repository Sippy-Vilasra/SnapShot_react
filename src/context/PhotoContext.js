import React, { createContext, useState } from 'react'
import axios from 'axios'
import { apiKey } from '../api/config'
export const PhotoContext = createContext()

const PhotoContextProvider = props => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [querys, setQuerys] = useState('')
    console.log(querys, '::::::::::::::')
    const runSearch = query => {
        // console.log(query, 'OOOOOOO')
        setQuerys(query)
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then((res) => {
                console.log(res.data.photos.photo)
                setImages(res.data.photos.photo)
                setLoading(false)
            }).then((err) => {
                console.log(err)
            })
    }
    return (
        <PhotoContext.Provider value={{ images, loading, runSearch, querys }}>
            {props.children}
        </PhotoContext.Provider>
    )
}

export default PhotoContextProvider