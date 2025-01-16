import React from 'react'
import RAM from "../assets/images/Ram1500.jpg"

function RecentCollections() {
    return (
        <div className="recentCollectionsContainer">
            Navbar
            <div className="yourCollection">
                <h2>Your Collection</h2>
                <h5>Your most recent additions</h5>

                <div className="cardsRow">
                    <div className="itemCard">
                        <img className='itemCardIMG' src={RAM} alt="" />

                        <div className="cardInfo">
                            <h2 className="cardTitle">2020 RAM 1500 Rebel</h2>

                            <p className="category key">Category: <span className="categoryVal key-val">Hot Wheels</span> </p>

                            <p className="YOM key">Year of Manufacture: <span className="yomVal key-val">2024</span> </p>

                            <p className="purchasePrice key">Purchase Price: <span className="purchaseVal key-val">179</span> </p>

                            <p className="purchaseDate key">Purchase Date: <span className="purchaseDateVal key-val">9th Jan 2025</span> </p>

                            <p className="rarity key">Rarity: <span className='rarityVal key-val'>Common</span> </p>

                            <p className="tags-labels key">Tags/Labels: <span className='tagsVal key-val'>THEN AND NOW</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentCollections
