import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const MyBookings = () => {
    const [bookings, setbookings] = useState([]);
    const userToken = localStorage.getItem("userToken");
    const title = 'Spacer';
    const link1 = '/';
    const link2 = '/role-selector'
    const link3 = '/spaces';
    const link4 = '/my-bookings';
    const label1 = 'Home';
    const label2 = 'Change Role'
    const label3 = 'Spaces';
    const label4 = 'My Bookings';
    useEffect(() => {
        const fetchData = async () => {
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
            };
            const response = await fetch("http://127.0.0.1:3000/bookings", {
                headers: headers,
            });
            const data = await response.json();
            console.log(data);
            setbookings(data);
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        const userToken = localStorage.getItem("userToken");
        const response = await fetch(`http://127.0.0.1:3000/delete_booking`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
            },
        });
        if (response.ok) {
            setbookings(bookings.filter((booking) => booking.id !== id));
            console.log("booking deleted Successfully");
        } else {
            console.log("booking deletion failed");
        }
    };

    const handleEdit = async (id, arrival, departure, status) => {
        const userToken = localStorage.getItem("userToken");
        const response = await fetch(`http://127.0.0.1:3000/update_booking`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
            },
            body: JSON.stringify({ arrival, departure, status }),
        });
        if (response.ok) {
            setbookings(
                bookings &&
                bookings.map((booking) =>
                    booking.id === id
                        ? { ...booking, status }
                        : booking
                )
            );
            console.log("booking updated successfully");
        } else {
            console.log("booking update failed");
        }
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
            <br/>
            <h1 style={{ color: "#75A2A5" }}>My bookings</h1>
            <table
                style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    width: "100%",
                }}
            >
                <thead>
                <tr>
                    <th style={{ padding: "10px", color: "#75A2A5" }}>Created at</th>
                    <th style={{ padding: "10px", color: "#75A2A5" }}>Title</th>
                    <th style={{ padding: "10px", color: "#75A2A5" }}>Status</th>
                    <th style={{ padding: "10px", color: "#75A2A5" }}>Arrival</th>
                    <th style={{ padding: "10px", color: "#75A2A5" }}>Departure</th>
                    <th style={{ padding: "10px", color: "#75A2A5" }}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {bookings &&
                    bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td style={{ padding: "10px", color: "black" }}>
                                {booking.created_at}
                            </td>
                            <td style={{ padding: "10px", color: "black" }}>
                                {booking.title}
                            </td>
                            <td style={{ padding: "10px", color: "black" }}>{booking.status}</td>
                            <td style={{ padding: "10px", color: "black" }}>
                                {booking.arrival}
                            </td>
                            <td style={{ padding: "10px", color: "black" }}>
                                {booking.departure}
                            </td>
                            <td style={{ padding: "10px" }}>
                                <button
                                    onClick={() =>

                                        handleEdit(
                                            booking.status
                                        )
                                    }
                                    style={{backgroundColor: "#75A2A5", color: "black", padding: "10px", borderRadius: "12px", marginRight: "10px", opacity: '80%'}}
                                >
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(booking.id)}
                                        style={{ backgroundColor: "#75A2A5", color: "black", padding: "10px", borderRadius: "10px", opacity: '80%' }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default MyBookings;