import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CreateSpace = () => (
    <Link to="/create-space" style={cardStyle}>
        <h2>Create Space</h2>
        <p>Please click here to create a space .</p>
    </Link>
);

const MySpaces = () => (
    <Link to="/my-spaces" style={cardStyle}>
        <h2>My spaces</h2>
        <p>Please click here to view, edit or remove space listings.</p>
    </Link>
);

const AdminDash = () => (
    <div style={{
        position: "relative",
        backgroundColor: "#181b1e",
        width: "100%",
        height: "952px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "16px",
        color: "#fff",
        fontFamily: "Inter",
    }}>
        <img
            style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "607px",
                height: "952px",
                objectFit: "cover",
            }}
            alt=""
            src="/rectangle-9@2x.png"
        />
        <div>
            <h1>Welcome to the Dashboard</h1>
            <div style={containerStyle}>
                <div style={{ ...cardStyle, marginRight: '16px' }}>
                    <CreateSpace />
                </div>
                <div style={cardStyle}>
                    <MySpaces />
                </div>
            </div>
        </div>
        <Outlet />
    </div>
);

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#75A2A5',
    padding: '16px',
    borderRadius: '10px',
    width: '200px',
    height: '200px',
    margin: '16px',
    textDecoration: 'none',
    color: 'black',
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
};




export default AdminDash;