import { useState } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements } from "react-router-dom"
import Error from './components/Error'

import Home from "./pages/Home"
import Login from "./pages/Login"
import About from "./pages/About"
import Cats, { loader as catsLoader } from "./pages/cats/Cats"
import CatDetails from './pages/cats/CatDetails'

import Layout from './components/Layout'
import DashLayout from './components/DashLayout'

import Dash from './pages/dashboard/Dash'
import Pricing from './pages/dashboard/Pricing'
import Reviews from './pages/dashboard/Reviews'

import DashCats from './pages/dashboard/DashCats'
import DashCatDetails from './pages/dashboard/DashCatDetails'

import DashCatInfo from './pages/dashboard/DashCatInfo'
import DashCatPhotos from './pages/dashboard/DashCatPhotos'
import DashCatAge from './pages/dashboard/DashCatAge'

import NotFound from './pages/NotFound'


import './App.css'
import "../server"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/"
         element={<Layout />}>
          
    <Route index element={<Home />} />
    <Route path="cats"
          element={<Cats />}
          loader={catsLoader}
          errorElement={<Error />} />
    <Route path="cats/:id" element={<CatDetails />} />
    <Route path="about" element={<About />} />

    <Route path="login" element={<Login />}/>

    <Route path="dashboard" element={<DashLayout />} > {/* Parent */}

      
      <Route index element={<Dash />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="cats" element={<DashCats />} />
      
      <Route path="cats/:id" element={<DashCatDetails />} >
        <Route index element={<DashCatInfo />}/>
        <Route path="photos" element={<DashCatPhotos />}/>
        <Route path="age" element={<DashCatAge />}/>
      </Route>

    </Route>

    <Route path="*" element={<NotFound />}/>

</Route>
))


function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}/>
  )
}

export default App
