import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../assets/styles/ItemCard.css"
import RAM from "../assets/images/Ram1500.jpg"

function ItemCard({id, image, title, category, yearOfManufacture, purchasePrice, purchaseDate, rarity, tags, onRemove }) {

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit-item`)
    }

    const handleRemove = async () => {
        const confirm = window.confirm("Are you sure you want to delete this item?");
        if (!confirm) return;

        try {
            await fetch(`http://localhost:4000/delete-item/${id}`, {
                method: "DELETE",
                credentials: "include",
            });

            alert("Item removed successfully!");
            if (onRemove) onRemove(); //Collection chi list update
        } catch (error) {
            console.error("Error removing item:", error);
            alert("Failed to remove item.");
        }
    };


    return (
        <div className="itemCard">
            <img className='itemCardIMG' 
                src={image || "https://placehold.jp/500x300.png"} 
                alt={title || "Item"} 
            />

            <div className="cardInfo">
                <h2 className="cardTitle">{title || "No title"}</h2>

                <p className="category key">Category: <span className="categoryVal key-val">Hot Wheels</span> </p>

                <p className="YOM key">Year of Manufacture: <span className="yomVal key-val">2024</span> </p>

                <p className="purchasePrice key">Purchase Price: <span className="purchaseVal key-val">179</span> </p>

                <p className="purchaseDate key">Purchase Date: <span className="purchaseDateVal key-val">9th Jan 2025</span> </p>

                <p className="rarity key">Rarity: <span className='rarityVal key-val'>Common</span> </p>

                <p className="tags-labels key">Tags/Labels: <span className='tagsVal key-val'>THEN AND NOW</span> </p>
            </div>

            <button className='itemEditButton' onClick={handleEdit}>Edit</button>

            <button className='removeItemButton' onClick={handleRemove}>Remove from Collection</button>
        </div>
    )
}

export default ItemCard
