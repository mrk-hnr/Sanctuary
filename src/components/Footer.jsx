import React from "react"

function Footer() {
        const currentYear = new Date().getFullYear()
        return (
            <div className="footerContainer">
                <footer>&copy; {currentYear} Sanctuary</footer>
            </div>
    )
}

export default Footer