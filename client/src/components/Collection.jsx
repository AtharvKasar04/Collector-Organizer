import React from 'react'
import Navbar from './Navbar'
import "../assets/styles/Collection.css"
import ItemCard from './ItemCard'

function Collection() {
    return (
        <div className='collectionContainer'>
            <Navbar />

            <div className="addItemContainer">
                <h3 className="addItemHeading">Add new item</h3>

                <div className="addItemInputFields">
                    <input type="text" placeholder='Enter product name' className='addItem-input' id='productName'/>
                    <input type="text" placeholder='Enter product category' className='addItem-input' id='productCategory'/>
                    <input type="text" placeholder='Year of Manufacture' className='addItem-input'/>
                    <input type="text" placeholder='Purchase price' className='addItem-input'/>
                    <input type="text" placeholder='Purchase date' className='addItem-input'/>
                    <input type="text" placeholder='Rarity' className='addItem-input'/>
                    <input type="text" placeholder='Tags/Label' className='addItem-input'/>
                    <input type="file" placeholder='Upload photo' className='addItem-input'/>
                </div>

                <button className='addItemButton'>Add</button>
            </div>

            <div className="yourCollectionSection">
                <h2 className="yourCollectionHeading">Your Collection</h2>

                <div className="yourCollectionElements">
                    <input type="text" placeholder='Search categories' className='searchCategories'/>
                    
                    <label htmlFor="sort-by" className='sort-by-label'>Sort by</label>

                    <select name="sort-by" id="sort-by" className='sort-by'>
                        <option value="Latest">Latest</option>
                        <option value="Oldest">Oldest</option>
                    </select>
                </div>
            </div>

            <div className="itemCardsSection">
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    )
}

export default Collection
