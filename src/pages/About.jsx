import React from "react"
import { Link } from "react-router-dom"
import bgImg from "../assets/about-bg.jpg"

function About() {
    return (
        <div className="aboutPage-container">
        <img src={bgImg} className="aboutHero-image" />
        <div className="aboutPage-content">
            <h1>Make your life more enriching</h1>
            <p>Our mission is to enliven your life and your home with the perfect roommate. Our cats are thoroughly vetted before being sent to a loving home to ensure you can enjoy your time together without a hitch. </p>
            <p>Our cats have different personality from energetic zoomer to cozy-loving couch potato. I'm sure you'll find the perfect cat that matches your personality.</p>
        </div>
        <div className="aboutPage-cta">
            <h2>The cats are waiting.<br />Are you ready?</h2>
            <Link className="linkButton" to="/cats">Meet the cats</Link>
        </div>
    </div>        
    )
}

export default About