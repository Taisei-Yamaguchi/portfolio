import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="w-72 max-md:w-full hero min-h-screen bg-base-100">
            <div className="hero-content flex-col ">
            <div className="avatar">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/images/taisei.jpeg" />
                </div>
            </div>
            <div>
                <h1 className="text-5xl font-bold">Taisei Yamaguchi</h1>
                <p className="py-6">
                Profile
                </p>
                <button className="btn btn-primary"><NavLink to='/about'>About Me</NavLink></button>
            </div>
        </div>
    </div>
    );
}

export default SideBar;
