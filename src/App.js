import React, { lazy, Suspense } from 'react';
import Header from './Component/Header/Header';
import GlobalStyles from './Styles/GlobalStyles';
import Footer from './Component/Footer/Footer';
import Loader from './Component/Loader/Loader';
import { Route, Routes } from 'react-router-dom';



function App() {
  const Home = lazy(() => import('./Pages/Home/Home'));
  const Event = lazy(() => import('./Pages/Events/Events'));
  const About = lazy(() => import('./Pages/AboutUs/AboutUs'));
  const RoadMaps = lazy(() => import('./Pages/RoadMaps/RoadMaps'));

  return (
    <React.Fragment>
      <Suspense fallback={<Loader/>}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="event" element={<Event/>} />
        <Route path="about" element={<About/>} />
        <Route path="roadmap" element={<RoadMaps/>} />
      </Routes>
      <Footer />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
