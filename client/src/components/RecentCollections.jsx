import React from 'react'
import ItemCard from './ItemCard'
import "../assets/styles/RecentCollections.css"

function RecentCollections() {
    return (
        <div className="recentCollectionsContainer">
            Navbar
            <div className="yourCollection">
                <h2>Your Collection</h2>
                <h5>Your most recent additions</h5>

                <div className="cardsRow">
                    <ItemCard />
                </div>
            </div>
        </div>
    )
}

export default RecentCollections
