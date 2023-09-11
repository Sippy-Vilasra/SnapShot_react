import React, { useContext } from 'react'
import Containers from './Containers'
import { PhotoContext } from '../context/PhotoContext'
const Item = ({ searchTerm }) => {
    const { querys } = useContext(PhotoContext)
    return (
        <div>
            <h2>{querys} Pictures</h2>
            <Containers searchTerm={searchTerm} />
        </div>
    )
}

export default Item