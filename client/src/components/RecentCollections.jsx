import { useEffect, useState } from 'react';
import ItemCard from './ItemCard'
import "../assets/styles/RecentCollections.css"
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import api from '../api/api';

function RecentCollections() {

    const [recentItems, setRecentItems] = useState([]);

    useEffect(() => {
        const fetchRecentCollections = async () => {
            try {
                const response = await api.get('/item/fetch-items');
                // console.log(response);
                if (response.status === 200) {
                    setRecentItems(response.data.slice(0, 4));
                } else {
                    console.error('Failed to fetch recent collections');
                }
            } catch (error) {
                console.error('Error fetching recent collections:', error);
            }
        };

        fetchRecentCollections();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return ''; 

        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' }); 
        const year = date.getFullYear();

        let daySuffix = 'th';
        if (day === 1 || day === 21 || day === 31) daySuffix = 'st';
        if (day === 2 || day === 22) daySuffix = 'nd';
        if (day === 3 || day === 23) daySuffix = 'rd';

        return `${day}${daySuffix} ${month} ${year}`;
    };

    return (
        <div className="recentCollectionsContainer">
            <Navbar />
            <div className="yourCollection">
                <h2 className='yourCollectionHeading'>Your Collection</h2>
                <h5 className='yourCollectionSubHeading'>Your most recent additions</h5>

                <div className="cardsRow">
                    {recentItems.length > 0 ? (
                        recentItems.map((item) => (
                            <ItemCard
                                key={item._id}
                                id={item._id}
                                image={item.image}
                                title={item.title}
                                category={item.category}
                                yearOfManufacture={item.yearOfManufacture}
                                purchasePrice={item.purchasePrice}
                                purchaseDate={formatDate(item.purchaseDate)}
                                rarity={item.rarity}
                                tags={item.tags}
                            />
                        ))
                    ) : (
                        <p>No items found in your collection.</p>
                    )}
                </div>
            </div>

            <div className="breakerLine"></div>

            <button className='viewCollectionButton'><Link to='/collection' >View entire Collection</Link></button>
        </div>
    )
}

export default RecentCollections
