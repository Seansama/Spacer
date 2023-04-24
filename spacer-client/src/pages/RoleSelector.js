import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminCard = () => (
    <Link to="/admin-login" style={cardStyle}>
        <h2>Admin</h2>
        <p>Click here to access the administrator panel.</p>
    </Link>
);

const UserCard = () => (
    <Link to="/client-login" style={cardStyle}>
        <h2>User</h2>
        <p>Click here to access the user panel and view hotels.</p>
    </Link>
);

const HomeView = () => (
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
                    <AdminCard />
                </div>
                <div style={cardStyle}>
                    <UserCard />
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




export default HomeView;
