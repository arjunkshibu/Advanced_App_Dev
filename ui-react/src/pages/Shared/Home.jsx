import React from "react";
import TopBar from "../../components/User/TopBar";
import Footer from "../../components/User/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from "./Slick";
import { Link } from "react-router-dom";
import Register from '../Auth/Register';

const data = [
  {
    name: "Fundamentals of Quantum Theory",
    img: "/src/assets/img/physics-6936704_640.jpg",
    review:
      "An in-depth exploration into the intricate principles and phenomena underlying the quantum world.",
  },
  {
    name: "Game Development with Unity",
    img: "/src/assets/img/unity.jpg",
    review:
      " A comprehensive course designed to equip students with the skills and knowledge needed to develop captivating games using the Unity game engine.",
  },
  {
    name: "Strategic Marketing Analytics",
    img: "/src/assets/img/pngtree-d-rendering-of-seo-optimization-stock-trading-data-analysis-and-web-image_3646327.jpg",
    review:
      "A strategic approach to harnessing data analytics in marketing to stay ahead  in today's competitive business landscape.",
  },
  {
    name: "Advanced Astrophysics",
    img: "/src/assets/img/astrophysics.jpg",
    review:
      "Delves into cutting-edge research and theories in astrophysics, offering an unparalleled opportunity to unravel the deepest mysteries and expand the boundaries of human understanding.",
  },
];

const Home = () => {
  return (
    <>
      <div className=" bg-blurBack bg-fixed font-Montserrat overflow-x-hidden">
        <TopBar />
        <section className="flex flex-col items-center justify-center h-screen overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full md:gap-11 gap-4">
            <h1 className="md:text-7xl text-white text-center font-Montserrat text-3xl md:text-wrap text-balance md:pt-16 pt-24">
              Explore Your Education Options!
            </h1>
            <p className="md:text-xl text-balance text-center font-Montserrat text-white">
              Discover courses tailored to your present and future needs. Sign
              up and Start your educational journey with us.
            </p>
            <Link to="/Register">
            <button className="md:py-2 md:px-3 py-1 px-2 text-sm md:text-lg border text-black bg-white hover:bg-slate-300 ">
              EXPLORE
            </button>
            </Link>
          </div>
          <Slick/>
    
        <Footer/>
   

        </section>

      </div>
    </>
  );
};

export default Home;
