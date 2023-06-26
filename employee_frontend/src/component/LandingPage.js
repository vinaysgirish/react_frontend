import React from 'react'
import {Link} from 'react-router-dom';
import img1 from '../Assets/nature1.jpg';
import img2 from '../Assets/nature2.jpg'; import img3 from '../Assets/nature3.jpg';
import '../App.css';
export const LandingPage = () => {
    return (
        <div>
            <div>
                <h1>ANUDIP FOUNDATION</h1>
                <Link to={"/AddEmployee"} className='tab-bar'>ADD EMPLOYEE</Link> 
                <Link to={"/ViewEmployee"} className='tab-bar'>VIEW EMPLOYEE</Link>
            </div>
        <div className='des'>
