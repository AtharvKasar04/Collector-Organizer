import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import "../assets/styles/Collection.css";
import api from '../api/api';

function EditItem() {
    const location = useLocation();
    const navigate = useNavigate();
    const item = location.state?.item;

    const [formData, setFormData] = useState({
        title: '',
        productCategory: '',
        yearOfManufacture: '',
        purchasePrice: '',
        purchaseDate: '',
        rarity: '',
        tags: [],
        image: null,
    });

    useEffect(() => {
        if (item) {
            const formattedDate = item.purchaseDate ? new Date(item.purchaseDate) : null;

            setFormData({
                title: item.title || '',
                productCategory: item.category || '',
                yearOfManufacture: item.yearOfManufacture || '',
                purchasePrice: item.purchasePrice || '',
                purchaseDate: formattedDate && !isNaN(formattedDate.getTime())
                    ? formattedDate.toISOString().split('T')[0]
                    : '',
                rarity: item.rarity || '',
                tags: Array.isArray(item.tags) ? item.tags : [],
                image: null,
            });
        }
    }, [item]);

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === 'tags') {
            setFormData({ ...formData, tags: value.split(',').map((tag) => tag.trim()) });
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmitEdit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData();
        formDataObj.append('title', formData.title);
        formDataObj.append('category', formData.productCategory);
        formDataObj.append('yearOfManufacture', formData.yearOfManufacture);
        formDataObj.append('purchasePrice', formData.purchasePrice);
        formDataObj.append('purchaseDate', formData.purchaseDate);
        formDataObj.append('rarity', formData.rarity);

        formData.tags.forEach((tag) => formDataObj.append('tags[]', tag));

        if (formData.image) {
            formDataObj.append('image', formData.image);
        }

        try {
            const response = await api.put(`/item/edit-item/${item._id}`, formDataObj, {
                withCredentials: true,
            });

            if (response.status === 200) {
                alert('Item updated successfully');
                navigate('/collection');
            } else {
                alert(`Error: ${response.data.message}`);
            }
        } catch (error) {
            console.error(error);
            alert('Something went wrong');
        }
    };

    return (
        <div className="collectionContainer">
            <Navbar />

            <div className="addItemContainer">
                <h3 className="addItemHeading">Edit</h3>

                <form className="addItemInputFields" onSubmit={handleSubmitEdit}>
                    <input
                        type="text"
                        placeholder="Enter product name"
                        className="addItem-input"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Enter product category"
                        className="addItem-input"
                        id="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Year of Manufacture"
                        className="addItem-input"
                        id="yearOfManufacture"
                        value={formData.yearOfManufacture}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Purchase price"
                        className="addItem-input"
                        id="purchasePrice"
                        value={formData.purchasePrice}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        placeholder="Purchase date"
                        className="addItem-input"
                        id="purchaseDate"
                        value={formData.purchaseDate}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Rarity"
                        className="addItem-input"
                        id="rarity"
                        value={formData.rarity}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Tags/Label (comma-separated)"
                        className="addItem-input"
                        id="tags"
                        value={formData.tags.join(', ')}
                        onChange={handleChange}
                    />
                    <input
                        type="file"
                        placeholder="Upload photo"
                        className="addItem-input"
                        onChange={handleFileChange}
                    />

                    <button type="submit" className="addItemButton">Confirm changes</button>
                </form>
            </div>
        </div>
    );
}

export default EditItem;
