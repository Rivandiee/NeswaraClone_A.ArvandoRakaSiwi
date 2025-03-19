import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import Footer from "./component/footer";
import HeroSection from "./component/herosection";
import newSarticle from "./component/newsarticle";
import NewsArticle from "./component/newsarticle";
import LiveNewsSection from "./component/livenewsection";
import LatestNewsSection from "./component/latestnewssection.jsx";
import Navbar from "./component/navbar.jsx";
import NewsSection from "./component/newssection.jsx";

  const NewsPortal = () => {
    return (
      <div className="bg-gray-100">
       
      <Navbar/> 
      
      <NewsSection/>


  {/* Trending Section */}
<div className="bg-gray-100 py-10 px-4 mt-6">
  <h2 className="text-xl font-bold text-center md:text-left">TRENDING THIS WEEK</h2>
</div>



      <div className="py-5">
      <HeroSection />
      </div>

      <NewsArticle />

      <LiveNewsSection />

      <LatestNewsSection />

      <Footer />
    </div>
  );
};

export default NewsPortal;
