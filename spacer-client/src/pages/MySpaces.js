import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";

const MySpaces = () => {
    const [spaces, setSpaces] = useState([]);
    const adminToken = localStorage.getItem('adminToken')
    const title = 'Spacer';
    const link1 = '/';
    const link2 = '/role-selector'
    const link3 = '/create-space';
    const link4 = '/my-spaces';
    const label1 = 'Home';
    const label2 = 'Change Role'
    const label3 = 'Create Space';
    const label4 = 'My Spaces';
    useEffect(() => {
        const fetchData = async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${adminToken}`
            };
            const response = await fetch("http://127.0.0.1:3000/show_spaces", {
                headers: headers
            });
            const data = await response.json();
            console.log(data)
            setSpaces(data);
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        const adminToken = localStorage.getItem('adminToken')
        const response = await fetch(`http://127.0.0.1:3000/delete_space`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${adminToken}`
            }
        });
        if (response.ok) {
            setSpaces(spaces.filter((space) => space.id !== id));
            console.log("Space deleted Successfully");
        } else {
            console.log("Space deletion failed");
        }
    };

    const handleEdit = async (id, description) => {
        const adminToken = localStorage.getItem('adminToken')
        const response = await fetch(`http://127.0.0.1:3000/update_space`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${adminToken}`
            },
            body: JSON.stringify({ description }),
        });
        if (response.ok) {
            setSpaces(
                spaces && spaces.map((space) =>
                    space.id === id ? { ...space, description } : space
                )
            );
            console.log("Space updated successfully");
        } else {
            console.log("Space update failed");
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
            <h1 style={{color: "#75A2A5"}}>My spaces</h1>
            <div style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
            }}>
                {spaces && spaces.map((space) => (
                    <div key={space.id} style={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "15px",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        width: "calc(23% - 15px)",
                        marginBottom: "15px"
                    }}>
                        <img src={space.image_url}
                             alt={space.name}
                             style={{
                                 maxWidth: "100%",
                                 maxHeight: "200px",
                                 borderRadius: "15px"
                             }}
                        />
                        <h2 style={{color: "black"}}>{space.name}</h2>
                        <p style={{color: "black"}}>{space.description}</p>
                        <p style={{color: "black"}}>{space.location}</p>
                        <h3 style={{color: "black"}}>{space.daily_rate}</h3>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <button style={{ backgroundColor: "#75A2A5", color: "black", padding: "10px", borderRadius: "12px", marginRight: "10px", opacity: "80%"}} onClick={() => handleDelete(space.id)}>Delete</button>
                            <button style={{ backgroundColor: "#75A2A5", color: "black", padding: "10px", borderRadius: "10px", opacity: "80%" }} onClick={() => {
                                const newDescription = prompt("Enter a new hotel description:");
                                handleEdit(space.id, newDescription);
                            }}>Edit</button>

                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MySpaces
