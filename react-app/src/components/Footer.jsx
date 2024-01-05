import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content">
        <nav>
            <header className="footer-title">Services</header> 
            <a target="_blank" href='https://emma.emmapet.net/' className="link link-hover">EMMA Pet</a>
            <a target="_blank" href='http://43.207.83.193/Laravel_Snack1.2/Snack1.0/public/mypage/login' className="link link-hover">Snack App</a>
            <a target="_blank" href='http://13.231.31.52/laravel_chat2/Chat2/public/mypage/login' className="link link-hover">Chat App</a>
        </nav> 
        <nav>
            <header className="footer-title"></header> 
            <NavLink to='/profile' className="link link-hover">Profile</NavLink>
            <NavLink to='/about' className="link link-hover">About</NavLink>
            <NavLink to='/deliverables' className="link link-hover">Deliverables</NavLink>
            <NavLink to='/contact' className="link link-hover">Contact</NavLink>
        </nav> 
        <nav>
            <header className="footer-title">Social</header> 
            <div className="grid grid-flow-col gap-4">
                <a target="_blank" href='https://www.instagram.com/taisei.it'><img src='/images/Instagram_logo.png' width="24" height="24" viewBox="0 0 24 24" className="fill-current"></img></a>
                <a target="_blank" href='https://www.facebook.com/profile.php?id=100088238918707'><img src='/images/facebook_logo.png' width="24" height="24" viewBox="0 0 24 24" className="fill-current"></img></a>
                <a target="_blank" href='https://twitter.com/TaiseiYama15728'><img src='/images/x_logo.png' width="24" height="24" viewBox="0 0 24 24" className="fill-current"></img></a>
                <a target="_blank" href='https://www.linkedin.com/in/taisei-yamaguchi-8b2289272/'><img src='/images/linked_in_logo.png' width="24" height="24" viewBox="0 0 24 24" className="fill-current"></img></a>
                <a target="_blank" href='https://github.com/Taisei-Yamaguchi'><img src='/images/github-icon.svg' width="24" height="24" viewBox="0 0 24 24" className="fill-current"></img></a>
                <a target="_blank" href='https://medium.com/@aries0326taisei'><img src='/images/medium-icon.svg' width="24" height="24" viewBox="0 0 24 24" className="fill-current"></img></a>
                
            </div>
        </nav>
        </footer>
    );
}

export default Footer;
