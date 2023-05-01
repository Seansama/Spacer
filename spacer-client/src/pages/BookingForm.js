import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";

const BookingForm = ({spaceId}) => {
    const [formData, setFormData] = useState({
        title: "",
        arrival: "",
        departure: "",
        status: "Check in",
        space_id: spaceId
    });
    const userToken = localStorage.getItem('userToken')
    const navigate = useNavigate()
    const title = 'Spacer';
    const link1 = '/';
    const link2 = '/role-selector'
    const link3 = '/spaces';
    const link4 = '/my-bookings';
    const label1 = 'Home';
    const label2 = 'Change Role'
    const label3 = 'Spaces';
    const label4 = 'My Bookings';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        fetch(`http://127.0.0.1:3000/spaces/${spaceId}/bookings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                    console.log("Form data submitted:", data);
                    // Reset form data after successful submission
                    setFormData({
                        title: "",
                        arrival: "",
                        departure: "",
                        status: "Check in",
                        space_id: spaceId
                    }, navigate('/spaces'));
                })
            .catch((error) => {
                console.error("Error submitting form data:", error);
            });
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
            <div style={{ background: "white", padding: "2rem", borderRadius: "10px", width: "600px", margin: "0 auto" }}>
                <h2 style={{textAlign: "center", color: "#75A2A5", paddingBottom: "20px"}}>Make a booking</h2>
                <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "60px" }}>
                    <label style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5"}}>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "15px", borderRadius: "10px" }}
                        />
                    </label>
                    <label style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5"}}>
                        Arrival Date:
                        <input
                            type="datetime-local"
                            name="arrival"
                            value={formData.arrival}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "15px", borderRadius: "10px" }}
                        />
                    </label>
                    <label style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5"}}>
                        Departure Date:
                        <input
                            type="datetime-local"
                            name="departure"
                            value={formData.departure}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "15px", borderRadius: "10px" }}
                        />
                    </label>
                    <label style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5"}}>
                        Status:
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "15px", borderRadius: "10px" }}
                        >
                            <option value="Checked in">Check in</option>
                            <option value="Checked out">Check out</option>
                        </select>
                    </label>
                    <button
                        type="submit"
                        style={{ gridColumn: "1 / span 2", backgroundColor: "#75A2A5", color: "#181b1e", border: "none", padding: "15px", borderRadius: "10px", cursor: "pointer", marginTop: "1rem" }}
                    >
                        Make a booking
                    </button>
                </form>
            </div>
        </>
    );
};

export default BookingForm;
