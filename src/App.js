import React, { lazy, Suspense } from 'react';
import Header from './Component/Header/Header';
import GlobalStyles from './Styles/GlobalStyles';
import Footer from './Component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';



function App() {
  const Home = lazy(() => import('./Pages/Home/Home'));
  const NFT = lazy(() => import('./Pages/NFTs/NFT'));
  const About = lazy(() => import('./Pages/AboutUs/AboutUs'));
  const RoadMaps = lazy(() => import('./Pages/RoadMaps/RoadMaps'));
  const Ecosystem = lazy(() => import('./Pages/Ecosystem/Ecosystem'));

  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading....</div>}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="nft" element={<NFT/>} />
        <Route path="about" element={<About/>} />
        <Route path="roadmap" element={<RoadMaps/>} />
        <Route path="ecosystem" element={<Ecosystem/>} />
      </Routes>
      <Footer />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
