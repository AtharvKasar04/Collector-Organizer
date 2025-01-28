import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import "../assets/styles/Collection.css"
import ItemCard from './ItemCard'
import axios from 'axios'

function Collection() {

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        yearOfManufacture: "",
        purchasePrice: "",
        purchaseDate: "",
        rarity: "",
        tags: "",
        image: null,
    });

    const [collection, setCollection] = useState([]); //Fetched items ikde store hotil
    const [loading, setLoading] = useState(false); //loading sathi
    const [filteredCollection, setFilteredCollection] = useState([]);
    const [searchCategory, setSearchCategory] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    useEffect(() => {
        fetchUserCollection();
    }, []);

    const fetchUserCollection = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:4000/item/fetch-items", {
                withCredentials: true, // auth biscuits (cookies) hehe!!!
            });
            setCollection(response.data);
        } catch (error) {
            console.error("Error fetching collection:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (searchCategory === "") {
            setFilteredCollection(collection);
        } else {
            const filtered = collection.filter(item =>
                item.category.toLowerCase().includes(searchCategory.toLowerCase())
            );
            setFilteredCollection(filtered);
        }
    }, [searchCategory, collection]);

    const handleSubmitCollection = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title);
        data.append("category", formData.category);
        data.append("yearOfManufacture", formData.yearOfManufacture);
        data.append("purchasePrice", formData.purchasePrice);
        data.append("purchaseDate", formData.purchaseDate);
        data.append("rarity", formData.rarity);
        data.append("tags", formData.tags);
        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            const response = await axios.post("http://localhost:4000/item/create-item", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true, // Include cookies for authentication
            });

            alert("Item added successfully!");
            setFormData({
                title: "",
                category: "",
                yearOfManufacture: "",
                purchasePrice: "",
                purchaseDate: "",
                rarity: "",
                tags: "",
                image: null,
            });
            fetchUserCollection(); // Refresh the collection list
        } catch (error) {
            console.error("Error adding item:", error);
            alert("Failed to add item.");
        }
    };


    return (
        <div className='collectionContainer'>
            <Navbar />

            <div className="addItemContainer">
                <h3 className="addItemHeading">Add new item</h3>

                <form onSubmit={handleSubmitCollection} className="addItemInputFields">
                    <input
                        type="text"
                        placeholder="Enter product name"
                        className="addItem-input"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Enter product category"
                        className="addItem-input"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Year of Manufacture"
                        className="addItem-input"
                        name="yearOfManufacture"
                        value={formData.yearOfManufacture}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Purchase price"
                        className="addItem-input"
                        name="purchasePrice"
                        value={formData.purchasePrice}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Purchase date"
                        className="addItem-input"
                        name="purchaseDate"
                        value={formData.purchaseDate}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Rarity"
                        className="addItem-input"
                        name="rarity"
                        value={formData.rarity}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Tags/Label"
                        className="addItem-input"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                    />
                    <input
                        type="file"
                        className="addItem-input"
                        onChange={handleFileChange}
                    />
                    <button type="submit" className="addItemButton">
                        Add
                    </button>
                </form>

            </div>

            <div className="yourCollectionSection">
                <h2 className="yourCollectionHeading">Your Collection</h2>

                <div className="yourCollectionElements">
                    <input
                        type="text"
                        placeholder="Search categories"
                        className="searchCategories"
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)} // Update search input
                    />

                    <label htmlFor="sort-by" className='sort-by-label'>Sort by</label>

                    <select name="sort-by" id="sort-by" className='sort-by'>
                        <option value="Latest">Latest</option>
                        <option value="Oldest">Oldest</option>
                    </select>
                </div>
            </div>

            <div className="itemCardsSection">
                {/* <ItemCard /> */}

                {loading ? (
                    <p>Content Load hotay thamb...</p>
                ) : filteredCollection.length > 0 ? (
                    filteredCollection.map((item) => (
                        <ItemCard
                            key={item._id}
                            id={item._id}
                            image={`http://localhost:4000${item.imageUrl}`}
                            title={item.title}
                            category={item.category}
                            yearOfManufacture={item.yearOfManufacture}
                            purchasePrice={item.purchasePrice}
                            purchaseDate={item.purchaseDate}
                            rarity={item.rarity}
                            tags={item.tags}
                            onRemove={fetchUserCollection}
                        />
                    ))
                ) : (
                    <p>No items found for the search term</p>
                )}
            </div>
        </div>
    )
}

export default Collection
