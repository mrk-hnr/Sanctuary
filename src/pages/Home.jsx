import React from "react"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="homeContainer">
         <h1>Safety in the midst of journey to find home</h1>
            <p>The Sanctuary serves as a temporary haven for our little feline friends.</p>

            <p>Help our little friend find where they belong by adopting.</p>

            <Link to="/">Adopt</Link>
    </div>
    )
}

export default Home