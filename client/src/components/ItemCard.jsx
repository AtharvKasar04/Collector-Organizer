import React from 'react'
import "../assets/styles/ItemCard.css"
import RAM from "../assets/images/Ram1500.jpg"

function ItemCard({ image, title, category, yearOfManufacture, purchasePrice, purchaseDate, rarity, tags }) {
    return (
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

            <button className='itemEditButton'>Edit</button>

            <button className='removeItemButton'>Remove from Collection</button>
        </div>
    )
}

export default ItemCard
