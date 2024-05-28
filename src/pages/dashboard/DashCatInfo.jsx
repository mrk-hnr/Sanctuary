import React from "react"
import { useOutletContext } from "react-router-dom"

function DashCatInfo() {

    const { currentCat } = useOutletContext()


    return (
        <section className="dashCat-detailInfo">
            <h4>Breed: <span>{currentCat.breed}</span></h4>
            <h4>Gender: <span>{currentCat.gender}</span></h4>
            <h4>Description: <span>{currentCat.description}</span></h4>
            <h4>Adopted: <span>Not Yet</span></h4>
        </section>
    )
}

export default DashCatInfo