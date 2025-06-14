import React, { useEffect } from "react";
import BrowseByCategory from "../components/home/BrowseByCategory";
import HotCollections from "../components/home/HotCollections";
import Landing from "../components/home/Landing";
import LandingIntro from "../components/home/LandingIntro";
import NewItems from "../components/home/NewItems";
import TopSellers from "../components/home/TopSellers";
import AOS from 'aos';
import 'aos/dist/aos.css'; // this brings in the styles for the animations

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);





  return (
    <div id="wrapper">
      
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <Landing />
        <LandingIntro />
        <HotCollections />
        <NewItems />
        <TopSellers />
        <BrowseByCategory />
      </div>
    </div>
  );
};

export default Home;
