import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg"
import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content" >
            <p>Hi, I'M a freelancer.</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
)

export default HeroImg