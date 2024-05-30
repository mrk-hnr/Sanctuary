import { React, useState, useEffect } from "react"
import {
    Link,
    useSearchParams,
    useLoaderData } from "react-router-dom"
import {getCats} from "../../../api"

export function loader() {
    return getCats()
}

function Cats() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [cats, setCats] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const data = useLoaderData()
    

    const typeFilter = searchParams.get("gender")

    useEffect(() => {
        async function loadCats() {
            setLoading(true)
            try {
                const data = await getCats()
                setCats(data)
                
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }  
        }
        loadCats()
    }, [])

    // useEffect no longer needed as we can "fetch" the needed data using loader and useLoaderData.

    // function handleFilterChange(key, value) {
    //     setSearchParams(prevParams => {
    //         if (value === null) {
    //             prevParams.delete(key)
    //         } else {
    //             prevParams.set(key, value)
    //         }
    //         return prevParams
    //     })
    // }
    

    // if (loading) {
    //     return <h1 aria-live="polite">Loading...</h1>
    // }

    // loading no longer needed as the loader/useLoaderData already covers this function.

    if (error) {
        return <h1 aria-live="assertive">There's an error: {error.message}</h1>
    }


    // useEffect(() => {
    //     fetch("/api/cats")
    //     .then(response => response.json())
    //     .then(data => setCats(data.cats))
    // }, [])

    const displayedCats = typeFilter ? cats.filter(cat => cat.gender === typeFilter) : cats

    const catElements = displayedCats.map(cat => (
        <div key={cat.id} className="catTile">
            <Link
                to={cat.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    gender: typeFilter
            }} // Grabs the entire filtered URL, including non-gender (or manually added) filter.
                aria-label={`View details for ${cat.breed}, 
                aged at {cat.age} years old.`}>
                <img src={cat.imageUrl} alt={`image of ${cat.breed} cat`} />
                <div className="catInfo">
                    <h3>{cat.breed}</h3>
                    <p><span>{cat.age}</span> years old</p>
                </div>
                <i className={`catType ${cat.gender} selected`}>{cat.gender.charAt(0).toUpperCase() + cat.gender.slice(1)}</i>
            </Link>
        </div>
    ))

    return (
        <div className="catList-container">
            <h1>Meet our cats</h1>
            <div className="catList-filterButtons">

                <button 
                    onClick={() => setSearchParams({gender: "male"})}
                    className={`catType male ${typeFilter === "male" ? "selected" : ""}`}>Male</button>
                <button
                    onClick={() => setSearchParams({gender: "female"})}
                    className={`catType female ${typeFilter === "female" ? "selected" : ""}`}>Female</button>
                <button
                    onClick={() => setSearchParams({gender: "yes"})}
                    className={`catType yes ${typeFilter === "yes" ? "selected" : ""}`}>Others</button>

                    { typeFilter ? (
                        <button
                        onClick={() => setSearchParams({})}
                        className="catType">Clear</button>
                    ) : null }
                

            </div>
            <div className="catList">
                {catElements}
            </div>
        </div>
    )
}

export default Cats