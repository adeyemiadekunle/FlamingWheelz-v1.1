import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {MainContainer} from './styles'
import Home from "../Home/Home"
import NFT from "../NFTs/NFT"
import About from "../AboutUs/AboutUs"
import RoadMaps from '../RoadMaps/RoadMaps'
import Marketplace from '../MarketPlace/Marketplace'
import Ecosystem from '../Ecosystem/Ecosystem'




function Main() {
  return (
    <>
    <MainContainer>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='nft' element={<NFT/>} />
        <Route path='about' element={<About />} />
        <Route path='roadmap' element={<RoadMaps />} />
        <Route path='marketplace' element={<Marketplace />} />
        <Route path='ecosystem' element={<Ecosystem/>} />
      </Routes>  
    </MainContainer>
    </>
    
  )
}

export default Main