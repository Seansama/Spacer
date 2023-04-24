import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // You can use a routing library like react-router-dom for navigation

const SpaceCard = ({ space }) => {
    return (
        <div className="space-card">
            <img src={space.image_url} alt={space.name} />
            <h2>{space.name}</h2>
            <h3>{space.location}</h3>
            <p>Daily Rate: ${space.daily_rate}</p>
        </div>
    );
};

const SpacesView = () => {
    const [spaces, setSpaces] = useState([]);
    const userToken = localStorage.getItem('userToken')


    useEffect(() => {
        // Fetch spaces data from API with bearer token authentication
        const fetchSpaces = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                }
            };
            try {
                const response = await fetch(' http://127.0.0.1:3000/spaces', config);

                if (response.ok) {
                    const data = await response.json();
                    setSpaces(data.spaces);
                } else {
                    console.error('Failed to fetch spaces:', response.statusText);
                }
            } catch (error) {
                console.error('Failed to fetch spaces:', error);
            }
        };

        fetchSpaces();
    }, []);

    return (
        <body style={{backgroundColor: "#181b1e"}}>
            <div>
                <h1>Spaces</h1>
                <div className="space-card-container">
                    {spaces && spaces.map(space => (
                        <Link to={`/spaces/${space.id}/booking/`} key={space.id}>
                            <SpaceCard space={space} />
                        </Link>
                    ))}
                </div>
            </div>
        </body>
    );
};

export default SpacesView;
