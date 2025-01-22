import React from 'react'
import Navbar from './Navbar'
import "../assets/styles/Collection.css"
import ItemCard from './ItemCard'

function EditItem() {
    return (
        <div className='collectionContainer'>
            <Navbar />

            <div className="addItemContainer">
                <h3 className="addItemHeading">Edit</h3>

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

                <button className='addItemButton'>Confirm changes</button>
            </div>

        </div>
    )
}

export default EditItem
