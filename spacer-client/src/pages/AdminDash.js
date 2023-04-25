import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";

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

const title = 'Spacer';
const link1 = '/';
const link2 = '/role-selector'
const link3 = '/create-space';
const link4 = '/my-spaces';
const label1 = 'Home';
const label2 = 'Change Role'
const label3 = 'Create Space';
const label4 = 'My Spaces';

const AdminDash = () => (
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
            <h1 style={{color: '#75A2A5'}}>Welcome to the Dashboard</h1>
            <div style={containerStyle}>
                <div style={{ ...cardStyle, marginRight: '16px' }}>
                    <CreateSpace />
                </div>
                <div style={cardStyle}>
                    <MySpaces />
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




export default AdminDash;