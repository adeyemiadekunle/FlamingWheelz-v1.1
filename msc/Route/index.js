import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import LazyAbout from '../../src/Pages/AboutUs/AboutUs'


let Home = lazy(() => import('../../src/Pages/Home/Home.js'));
let Car = lazy(() => import('../../src/Pages/Cars/Cars.js'));
let About = lazy(() => import('../../src/Pages/AboutUs/AboutUs'));
let Marketplace = lazy(() => import('../../src/Pages/MarketPlace/Marketplace'));
let RoadMaps = lazy(() => import('../../src/Pages/RoadMaps/RoadMaps'));

const Router = () => {
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='car' element={<Car />} />
      <Route path='about' element={<LazyAbout />} />
      <Route path='roadmap' element={<RoadMaps />} />
      <Route path='marketplace' element={<Marketplace />} />
    </Routes>


}

export default Router