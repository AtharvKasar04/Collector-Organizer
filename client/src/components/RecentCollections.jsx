import React from 'react'
import ItemCard from './ItemCard'
import "../assets/styles/RecentCollections.css"
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function RecentCollections() {
    return (
        <div className="recentCollectionsContainer">
            <Navbar />
            <div className="yourCollection">
                <h2 className='yourCollectionHeading'>Your Collection</h2>
                <h5 className='yourCollectionSubHeading'>Your most recent additions</h5>

                <div className="cardsRow">
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </div>

            <div className="breakerLine"></div>

            <button className='viewCollectionButton'><Link to='/collection' >View entire Collection</Link></button>
        </div>
    )
}

export default RecentCollections
