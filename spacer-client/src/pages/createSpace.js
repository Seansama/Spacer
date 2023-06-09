import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";

const CreateSpace = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image_url: '',
        location: '',
        daily_rate: ''
    });
    const [createdSpace, setCreatedSpace] = useState(false)
    const title = 'Spacer';
    const link1 = '/';
    const link2 = '/role-selector'
    const link3 = '/create-space';
    const link4 = '/my-spaces';
    const label1 = 'Home';
    const label2 = 'Change Role'
    const label3 = 'Create Space';
    const label4 = 'My Spaces';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const adminToken = localStorage.getItem('adminToken')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://spacer.onrender.com/spaces', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${adminToken}`
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // Handle success
                console.log('Space created successfully!');
                setCreatedSpace(true)

            } else {
                // Handle error
                console.error('Failed to create space.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (createdSpace){
        navigate('/admin-dashboard')
    }
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
            <div style={{background: "white", padding: "2rem", borderRadius: "10px", width: "600px", margin: "0 auto"}}>
                <h2 style={{textAlign: "center", color: "#75A2A5", paddingBottom: "20px"}}>Create a Space Here</h2>
                <form onSubmit={handleSubmit} style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "60px"}}>
                    <label style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5"}}>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{width: "100%", padding: "15px", borderRadius: "10px"}}
                        />
                    </label>
                    <label style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5"}}>
                        Description:
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            style={{width: "100%", padding: "15px", borderRadius: "10px"}}
                        />
                    </label>
                    <label style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5"}}>
                        Image URL:
                        <input
                            type="text"
                            name="image_url"
                            value={formData.image_url}
                            onChange={handleChange}
                            style={{width: "100%", padding: "15px", borderRadius: "10px"}}
                        />
                    </label>
                    <label style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5"}}>
                        Location:
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            style={{width: "100%", padding: "15px", borderRadius: "10px"}}
                        />
                    </label>
                    <label style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5"}}>
                        Daily Rate:
                        <input
                            type="number"
                            name="daily_rate"
                            value={formData.daily_rate}
                            onChange={handleChange}
                            style={{width: "100%", padding: "15px", borderRadius: "10px"}}
                        />
                    </label>
                    <button type="submit" style={{gridColumn: "1 / span 2", backgroundColor: "#75A2A5", color: "#181b1e", border: "none", padding: "15px", borderRadius: "10px", cursor: "pointer", marginTop: "1rem"}}>Create Space</button>
                </form>
            </div>
        </>
    );
};

export default CreateSpace;
