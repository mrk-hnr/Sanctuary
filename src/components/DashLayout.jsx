import React from "react"
import { NavLink, Outlet } from "react-router-dom"

function DashLayout() {

    const myStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",

    }
    return (
        <>
            <nav className="dashNav">
                <NavLink
                    to="."
                    end
                    style={({isActive}) => isActive ? myStyle : null}
                    >Dashboard</NavLink>

                <NavLink
                    to="pricing"
                    style={({isActive}) => isActive ? myStyle : null}
                    >Pricing</NavLink>

                <NavLink
                    to="cats"
                    style={({isActive}) => isActive ? myStyle : null}
                    >Cats</NavLink>

                <NavLink
                    to="reviews"
                    style={({isActive}) => isActive ? myStyle : null}
                    >Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default DashLayout