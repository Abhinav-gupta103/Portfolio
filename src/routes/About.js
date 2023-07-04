import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="About" text="I am a Friendly Full Stack Developer" />

            <Footer />
        </div>
    )
}

export default About