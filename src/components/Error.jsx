import React from "react"
import { useRouteError } from "react-router-dom"

function Error() {
    const error = useRouteError()
    console.log(error)
    return (
        <h2>Error: {error.message}</h2>
        
    )
}

export default Error