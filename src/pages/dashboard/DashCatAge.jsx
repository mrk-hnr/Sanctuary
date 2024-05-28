import React from "react"
import { useOutletContext } from "react-router-dom"

function DashCatAge() {

    const { currentCat } = useOutletContext()


    return (
        <h3 className="dashCat-age">{currentCat.age} <span>years old</span></h3>
        
    )
}

export default DashCatAge