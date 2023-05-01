import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";

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
const title = 'Spacer';
const link1 = '/'
const label1 = 'Home'

const HomeView = () => (
    <>
        <Navbar title={title} link1={link1} label1={label1}/>
        <div>
            <h1 style={{color: '#75A2A5'}}>Welcome to the User Selection desk</h1>
            <h2>Please select a role to continue: </h2>
            <br/>
            <div style={containerStyle}>
                <div style={{ ...cardStyle}}>
                    <AdminCard />
                </div>
                <div style={cardStyle}>
                    <UserCard />
                </div>
            </div>
        </div>
    </>

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
    justifyContent: 'center',
    alignItems: 'center',
};




export default HomeView;
