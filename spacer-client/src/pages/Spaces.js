import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const SpacesView = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const userToken = localStorage.getItem('userToken')
    const title = 'Spacer';
    const link1 = '/';
    const link2 = '/role-selector'
    const link3 = '/spaces';
    const link4 = '/my-bookings';
    const label1 = 'Home';
    const label2 = 'Change Role'
    const label3 = 'Spaces';
    const label4 = 'My Bookings';

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:3000/spaces", {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${userToken}`
                    },
                });
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleButtonClick = (spaceId) => {
        navigate(`/create-booking/${spaceId}`); // Pass the spaceId to the booking form page
    };
    return (
        <>
            <Navbar
                title={title}
                link1={link1}
                label1={label1}
                link2={link2}
                label2={label2}
                link3={link3}
                label3={label3}
                link4={link4}
                label4={label4}
            />
            <div>
                <h1 style={{ color: "#75A2A5" }}>Our Spaces</h1>
                <br/>
                <div className="booking-container">
                    {data.map((space) => (
                        <div key={space.id} className="booking-card">
                            <img src={space.image_url} alt={space.name} style={{
                                maxWidth: "100%",
                                maxHeight: "200px",
                                borderRadius: "15px"
                            }} />
                            <h2 style={{ color: "black" }}>{space.name}</h2>
                            <p>{space.description}</p>
                            <p>Location: {space.location}</p>
                            <p>Daily Rate: {space.daily_rate}</p>
                            <button style={{ backgroundColor: "#75A2A5", color: "black", padding: "10px", borderRadius: "10px", opacity: "80%" }}
                                    onClick={() => handleButtonClick(space.id)} // Pass space.id to the handleButtonClick function
                            >
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SpacesView;
