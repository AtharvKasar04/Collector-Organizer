import { useNavigate } from 'react-router-dom'
import "../assets/styles/ItemCard.css"
import api from '../api/api';

function ItemCard({ id, image, title, category, yearOfManufacture, purchasePrice, purchaseDate, rarity, tags, onRemove }) {

    const navigate = useNavigate();

    const handleEdit = () => {

        const item = {
            _id: id,
            image,
            title,
            category,
            yearOfManufacture,
            purchasePrice,
            purchaseDate,
            rarity,
            tags,
        };
        
        navigate(`/edit-item`, { state: { item } });
    }

    const handleRemove = async () => {
        const confirm = window.confirm("Are you sure you want to delete this item?");
        if (!confirm) return;

        try {
            await api.get(`/item/delete-item/${id}`, {
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
                src={image ? image : "https://placehold.jp/500x300.png"}
                alt={title || "Item"}
            />

            <div className="cardInfo">
                <h2 className="cardTitle">{title || "No title"}</h2>

                <p className="category key">Category: <span className="categoryVal key-val">{category || "N/A"}</span> </p>

                <p className="YOM key">Year of Manufacture: <span className="yomVal key-val">{yearOfManufacture || "N/A"}</span> </p>

                <p className="purchasePrice key">Purchase Price: <span className="purchaseVal key-val">{purchasePrice || "N/A"}</span> </p>

                <p className="purchaseDate key">Purchase Date: <span className="purchaseDateVal key-val">{purchaseDate || "N/A"}</span> </p>

                <p className="rarity key">Rarity: <span className='rarityVal key-val'>{rarity || "N/A"}</span> </p>

                <p className="tags-labels key">Tags/Labels:
                    {tags && tags.length > 0 ? (
                        <div className="tagsContainer">
                            {tags.map((tag, index) => (
                                <span key={index} className="tagsVal">{tag}</span>
                            ))}
                        </div>
                    ) : (
                        "N/A"
                    )}
                </p>
            </div>

            <button className='itemEditButton' onClick={handleEdit}>Edit</button>

            <button className='removeItemButton' onClick={handleRemove}>Remove from Collection</button>
        </div>
    )
}

export default ItemCard
