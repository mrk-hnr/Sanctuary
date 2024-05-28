import React from "react"
import { useOutletContext } from "react-router-dom"

function DashCatPhotos() {

    const { currentCat } = useOutletContext()

    return (
        <img src={currentCat.imageUrl} className="dashCat-detailImage" />
    )
}

export default DashCatPhotos