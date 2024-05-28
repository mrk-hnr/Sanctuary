import {React, useState, useEffect } from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"


function DashCatDetails() {

    const myStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const params = useParams()
    const [currentCat, setCurrentCat] = useState(null)

    useEffect(() => {
        fetch(`/api/dash/cats/${params.id}`)
            .then(res => res.json())
            .then(data => setCurrentCat(data.cats))
    }, [])
    
    if (!currentCat) {
        return <h1>Loading...</h1>
    }

    return (
        <section className="dashCat-detailContainer">
            <Link
                to=".."
                relative="path"
                className="backButton"
            >&larr; <span>Back to your adopted list</span></Link>

            <div className="dashCat-detailLayout-container">
                <div className="dashCat-detail">
                <img src={currentCat.imageUrl} />
                    <div className="dashCat-detailInfo-text">
                        <i
                            className={`catBreed catBreed-${currentCat.gender}`}
                        >
                            {currentCat.gender.charAt(0).toUpperCase() + currentCat.gender.slice(1)}
                        </i>
                        <h3>{currentCat.breed}</h3>
                        <h4>{currentCat.age} years old</h4>
                    </div>
                </div>

                <nav className="dashCat-detailNav">
                    <NavLink to="."
                             end
                             style={({isActive}) => isActive ? myStyle : null}
                             >Details</NavLink>

                    <NavLink to="photos"
                             style={({isActive}) => isActive ? myStyle : null}
                             >Photos</NavLink>

                    <NavLink to="age"
                             style={({isActive}) => isActive ? myStyle : null}
                             >Age</NavLink>
                </nav>
                <Outlet context={{ currentCat }} />
            </div>
        </section>
    )
}

export default DashCatDetails