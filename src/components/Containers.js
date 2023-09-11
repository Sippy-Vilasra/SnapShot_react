import React, { useEffect, useContext } from 'react'
import { PhotoContext } from '../context/PhotoContext'

import Loader from './Loader'

const Containers = ({ searchTerm }) => {
    const { images, loading, runSearch } = useContext(PhotoContext)
    // console.log(runSearch, '9898888')
    useEffect(() => {
        runSearch(searchTerm)
    }, [searchTerm])

    return (
        <>

            <div className="photo-container">

                {loading ? <Loader /> :
                    images.map((item) => (
                        <img src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`} />
                    ))
                }

            </div>
        </>
    )
}

export default Containers