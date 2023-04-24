import React, { useState, useEffect } from 'react';

const SpaceDetails = ({ match }) => {
    const [space, setSpace] = useState(null);
    const spaceId = match.params.spaceId;

    useEffect(() => {
        // Fetch space details data from API with bearer token authentication
        const fetchSpaceDetails = async () => {
            try {
                const response = await fetch(`https://api.example.com/spaces/${spaceId}`, {
                    headers: {
                        Authorization: 'Bearer {token}',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setSpace(data.space);
                } else {
                    console.error('Failed to fetch space details:', response.statusText);
                }
            } catch (error) {
                console.error('Failed to fetch space details:', error);
            }
        };

        fetchSpaceDetails();
    }, [spaceId]);

    if (!space) {
        return <div>Loading...</div>; // Display a loading indicator while fetching data
    }

    return (
        <div>
            <h1>{space.name}</h1>
            <img src={space.image_url} alt={space.name} />
            <p>Location: {space.location}</p>
            <p>Description: {space.description}</p>
            <p>Available Dates: {space.available_dates}</p>
            <p>Hourly Rate: ${space.hourly_rate}</p>
            <p>Daily Rate: ${space.daily_rate}</p>
        </div>
    );
};

export default SpaceDetails;
