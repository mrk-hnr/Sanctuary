import {React, useState, useEffect} from 'react'
import { useParams, Link, useLocation } from "react-router-dom"

function CatDetails() {

  const params = useParams()
  const location = useLocation()
  const [cat, setCat] = useState(null)

  useEffect(() => {
      fetch(`/api/cats/${params.id}`)
          .then(response => response.json())
          .then(data => setCat(data.cats))
  }, [params.id])

  const search = location.state?.search || "" // Optional Chaining, new thing. It means if location.state is true, look further otherwise blank. Console.log location to see the relation of location.state.search

  const genderSearch = location.state?.gender || "cat list"

    
  return (
  <div className="catDetail-container">
    <section className="dashCat-detailContainer">
      <Link
        to={`..${search}`} // Basically it maintains the filtered URL (custom or not) and retains it on the URL bar.
        relative="path"
        className="backButton" >&larr; <span>Back to {genderSearch} list</span></Link>
    </section>
    {cat ? (
        <div className="catDetail">
            <img src={cat.imageUrl} />
            <i className={`catType ${cat.gender} selected`}>{cat.gender.charAt(0).toUpperCase() + cat.gender.slice(1)}</i>
            <h2>{cat.breed}</h2>
            <p className="catAge"><span>{cat.age}</span> years old</p>
            <p>{cat.description}</p>
            <button className="linkButton">Adopt this cat</button>
        </div>
    ) : <h2>Loading...</h2>}
    </div>

  )
}

export default CatDetails