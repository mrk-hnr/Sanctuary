import React from "react"
import { Link } from "react-router-dom"

function NotFound() {
    return (
    <div className="notFound-container">
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to="/" className="linkButton">Return to Home</Link>
    </div>
    )
}

export default NotFound