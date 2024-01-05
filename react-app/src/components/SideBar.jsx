import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="w-72 max-md:w-full hero md:min-h-screen bg-amber-50">
            <div className="hero-content flex-col ">
            <div className="avatar">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/images/taisei.jpeg" />
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold">Taisei Yamaguchi</h1>
                <div className='text-xs'>
                    <li>Backend Engineer, Frontend Enginieer, Full Stack Engineer</li>
                    <li>University of Tsukuba (graduation 2023.3)</li>
                    <li>Hobbies:Track&Filed, Weight Training, Travel, Cats</li>
                </div>
                <button className="btn btn-accent"><NavLink to='/about'>About Me</NavLink></button>
            </div>
        </div>
    </div>
    );
}

export default SideBar;
