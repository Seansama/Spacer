import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title, link1, label1, link2, label2, link3, label3, link4, label4 }) => {
    const handleLogout = () => {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.endsWith('Token')) {
                localStorage.removeItem(key);
            }
        });
    };
    return (
        <nav style={{ backgroundColor: 'black', position: 'sticky', top: 0, opacity: "90%" }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#75A2A5', marginLeft: '24px', fontSize: 24 }}>{title}</span>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    paddingTop: '16px',
                    paddingBottom: '16px',
                }}
            >
                <Link
                    to={link1}
                    style={{ color: '#75A2A5', marginRight: '27px', textDecoration: 'none' }}
                    onClick={handleLogout}
                >
                    {label1}
                </Link>
                <Link
                    to={link2}
                    style={{ color: '#75A2A5', marginRight: '27px', textDecoration: 'none' }}
                    onClick={handleLogout}
                >
                    {label2}
                </Link>
                <Link
                    to={link3}
                    style={{ color: '#75A2A5', marginRight: '27px', textDecoration: 'none' }}
                >
                    {label3}
                </Link>
                <Link
                    to={link4}
                    style={{ color: '#75A2A5', marginRight: '27px', textDecoration: 'none' }}
                >
                    {label4}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
