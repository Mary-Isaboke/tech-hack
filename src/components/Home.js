import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 

const Home = () => {
    
    return (
        <div className="home-container">
            <div className="home-header">Medication Reminder App</div>
            <div className="home-content">
                <p>Welcome to your Medication Reminder App!</p>
                <p>Never forget to take your medications again.</p>
                <div className="action-buttons">
                    <Link to="/home" className="home-button">Home</Link>
                    <Link to="/login" className="home-button">Login</Link>
                    <Link to="/signup" className="home-button">Signup</Link>
                    <Link to="/medications" className="home-button">Medications List</Link>
                    <Link to="/add-medication" className="home-button">Add Medication</Link>
                    <Link to="/add-reminder" className="home-button">Add Reminder</Link>  
                </div>
            </div>
        </div>
    );
}

export default Home;

