import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import Footer from "./component/footer";
import HeroSection from "./component/herosection";
import newSarticle from "./component/newsarticle";
import NewsArticle from "./component/newsarticle";
import LiveNewsSection from "./component/livenewsection";
import LatestNewsSection from "./component/latestnewssection.jsx";

const articles = [
  {
    date: "2025-01-06 10:24:24",
    title: "OPTIMISME EKONOMI INDONESIA DI TENGAH TANTANGAN GLOBAL",
    image: "https://tse2.mm.bing.net/th?id=OIP.q8cEWo-bKQuV8LPRDrfjcgHaHa&pid=Api&P=0&h=180",
  },
  {
    date: "2025-01-04 07:55:44",
    title: "CHATGPT BILANG: CHATGPT SEMANGAT BARU DALAM...",
    image: "https://tse1.mm.bing.net/th?id=OIP.eEbo2W3M_gUi_B8QDB9g7QHaE8&pid=Api&P=0&h=180",
  },
  {
    date: "2025-01-05 23:02:04",
    title: "PEMULIHAN EKONOMI INDONESIA: PELUANG DAN TANTANGAN DI...",
    image: "https://tse2.mm.bing.net/th?id=OIP.urh_WMd1bcTP-KSf-4S7WwHaEY&pid=Api&P=0&h=180",
  },
];

const categories = ["SMK", "SMA", "REAL MADRID", "PASAR", "MODERN"];

const NewsPortal = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-9 bg-white shadow-md">
        <h1 className="text-xl font-bold text-yellow-500">NESWARA</h1>
        <nav className="space-x-8">
          <a href="#" className="text-black font-bold">
            LIFESTYLE
          </a>
          <a href="#" className="text-black font-bold">
            EDUCATION
          </a>
          <a href="#" className="text-black font-bold">
            REGION
          </a>
          <a href="#" className="text-black font-bold">
            SPORT
          </a>
          <a href="#" className="text-black font-bold">
            TOUR & TRAVEL
          </a>
          <a href="#" className="text-black font-bold">
            NATIONAL
          </a>
          <a href="#" className="text-black font-bold">
            BUSINESS
          </a>
        </nav>
        <div className="flex space-x-4">
          <FaUser className="text-gray-700 cursor-pointer" />
          <FaSearch className="text-gray-700 cursor-pointer" />
        </div>
      </header>

      {/* Categories */}
      <div className="flex space-x-2 mt-4 overflow-x-auto justify-center gap-10 bg-grey p-2 rounded shadow">
        {categories.map((cat, index) => (
          <button key={index} className="px-20 py-2 bg-white rounded hover:bg-gray-300 font-bold">
            {cat}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-3 gap-4 mt-6 px-28 ">
        {/* Left Section */}
        <div className="col-span-1">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-4 rounded shadow mb-4">
              <img src={article.image} alt="news" className="w-full rounded h-[50px] object-cover" />
              <p className="text-xs text-gray-500 mt-2">{article.date}</p>
              <h2 className="text-sm font-semibold mt-1">{article.title}</h2>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="col-span-1 flex justify-center items-center">
          <div className="bg-white p-35 rounded shadow w-full text-center">
            <h2 className="text-lg font-semibold">Latest News</h2>
            <p className="text-gray-600">Stay updated with the latest information.</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-gray-800 text-white p-12 rounded shadow mb-4 text-center">
              <h2 className="text-sm">TIDAK ADA BERITA</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 mx-27">
      <div className="bg-gray-300 text-center p-15 rounded-lg shadow-md ">
        Ingin mengiklankan produk Anda? Hubungi kami untuk menampilkan iklan Anda di sini!
      </div>
    </div>
    <div className="bg-gray-100 py-10 px-4 mt-6 mx-23">
        <h2 className="text-xl font-bold">TRENDING THIS WEEK</h2>
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
