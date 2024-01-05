// Home.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Taisei's Portfolio</h1>
                    <p className="py-6">
                        Full Stack Engineer
                    </p>
                    <button className="btn btn-secondary"><NavLink to='deliverables'>Deliverables</NavLink></button>
                </div>
            </div>
        </div>
    );
};

export default Home;
