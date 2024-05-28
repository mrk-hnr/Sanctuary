import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom"

function DashCat() {
  const [cats, setCats] = useState([])

  useEffect(() => {
      fetch("/api/dash/cats")
          .then(res => res.json())
          .then(data => setCats(data.cats))
  }, [])

  const dashCatElement = cats.map(cat => (
      <Link
          to={cat.id}
          key={cat.id}
          className="dashCat-linkWrapper"
      >
          <div className="dashCat-single" key={cat.id}>
              <img src={cat.imageUrl} alt={`Photo of a ${cat.breed} cat`} />
              <div className="dashCat-info">
                  <h3>{cat.breed}</h3>
                  <p>${cat.age} years old</p>
              </div>
          </div>
      </Link>
  ))

  return (
      <section>
          <h1 className="dashCat-title">Your adopted cats</h1>
          <div className="dashCat-list">
              {
                  cats.length > 0 ? (
                      <section>
                          {dashCatElement}
                      </section>

                  ) : (
                          <h2>Loading...</h2>
                      )
              }
          </div>
      </section>
  )
}

export default DashCat