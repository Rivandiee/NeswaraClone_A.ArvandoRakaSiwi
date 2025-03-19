import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import NewsImage1 from "../assets/berita-pasar.jpg";
import NewsImage2 from "../assets/berita-pasar.jpg";
import NewsImage3 from "../assets/berita-pasar.jpg";
import NewsImage4 from "../assets/berita-pasar.jpg";
import NewsImage5 from "../assets/berita-pasar.jpg";

const newsImages = [NewsImage1, NewsImage2, NewsImage3, NewsImage4, NewsImage5];

const NewsSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 max-w-7xl">
      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={8}
        navigation
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 5 },
        }}
        className="py-2"
      >
        {["SMK", "SMA", "Real Madrid", "Pasar", "Modern", "Peristiwa", "Daerah"].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-2 text-center bg-white rounded-lg shadow dark:bg-gray-800 dark:text-white">
              <span className="text-sm sm:text-lg font-bold uppercase">{item}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Layout Mobile */}
      <div className="block md:hidden">
        {/* Foto Tengah Besar (Banner Utama) */}
        <div className="relative">
          <img
            src={newsImages[3]}
            alt="Main News"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-2">
            <p className="text-white text-lg font-bold">Berita Hari Ini</p>
          </div>
        </div>
        {/* Baris Foto Kecil di bawah banner */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            ...newsImages.slice(0, 3),
            ...newsImages.slice(1, 4)
          ].map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`News ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-1">
                <p className="text-white text-xs">Berita Hari Ini</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layout Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-6 mt-6">
        {/* Kolom Kiri */}
        <div className="flex flex-col space-y-4">
          {newsImages.slice(0, 3).map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`News ${index + 1}`}
                className="w-full h-40 md:h-32 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-1">
                <p className="text-white text-sm text-left">Berita Hari Ini</p>
              </div>
            </div>
          ))}
        </div>

        {/* Kolom Tengah */}
        <div className="col-span-1 flex flex-col items-center">
          <div className="relative w-full">
            <img
              src={newsImages[3]}
              alt="Main News"
              className="w-full h-60 lg:h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-2">
              <p className="text-white text-lg font-bold text-left">Berita Hari Ini</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="flex flex-col space-y-4">
          {newsImages.slice(1, 4).map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`News ${index + 1}`}
                className="w-full h-40 md:h-32 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-1">
                <p className="text-white text-sm text-left">Berita Hari Ini</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Iklan Persegi Panjang */}
      <div className="mt-4 flex justify-center">
        <div className="w-full max-w-7xl bg-gray-200 p-4 md:p-8 rounded-lg shadow-lg text-center">
          <p className="font-bold text-gray-600 text-sm md:text-base">
            Ingin mengiklankan produk Anda? Hubungi kami untuk menampilkan di sini!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;