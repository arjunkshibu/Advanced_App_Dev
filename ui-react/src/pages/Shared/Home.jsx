import React from "react";
import TopBar from "../../components/User/TopBar";
import Footer from "../../components/User/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from "./Slick";
import { Link } from "react-router-dom";
import google from "../../assets/img/google.png";
import samsung from "../../assets/img/samsung.png";
import microsoft from "../../assets/img/microsoft.png";
import audi from "../../assets/img/audi.png";
import sony from "../../assets/img/sony.png";
import siemens from "../../assets/img/siemens.png";
import oracle from "../../assets/img/oracle.png";
import asus from "../../assets/img/asus.png";
import jeep from "../../assets/img/jeep.png";
import activision from "../../assets/img/activision.png";
import girl from "../../assets/img/outdoors2.jpg";
import { Bookmark, BookmarkCheck } from 'lucide-react';

const Home = () => {
  return (
    <>
      <div className="bg-bg-girl-w bg-center bg-cover  z-40 bg-fixed font-Montserrat overflow-hidden">
        <TopBar />

        <section className="relative flex flex-col items-center justify-center h-screen z-10">
          <div className="flex flex-col items-center justify-center h-full  gap-4">
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
          <Slick />
        </section>

        <section className="bg-white  h-screen w-screen">
          <div className="w-full h-1/3 flex flex-col bg-slate-300 bg-opacity-45">
            <div className="flex w-full justify-center pt-11">
              <h1 className="text-3xl">OUR MAJOR RECRUITERS</h1>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className=" flex flex-row items-center gap-6 ">
                <img
                  src={google}
                  alt="google"
                  style={{ height: "140px", width: "140px" }}
                />
                <img
                  src={samsung}
                  alt="samsung"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={microsoft}
                  alt="microsoft"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={audi}
                  alt="audi"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={sony}
                  alt="sony"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={siemens}
                  alt="siemens"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={oracle}
                  alt="oracle"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={asus}
                  alt="asus"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={jeep}
                  alt="jeep"
                  style={{ height: "140px", width: "140px" }}
                />
                <img
                  src={activision}
                  alt="activision"
                  style={{ height: "150px", width: "150px" }}
                />
              </div>
            </div>
            <div className="flex w-full justify-center pb-9">
              <h1 className="text-2xl">and many more..</h1>
            </div>
          </div>
          <div className="h-2/3 w-full flex border-b justify-center items-center">
            <div className="w-1/3 h-full flex flex-col border-l  gap-7 p-8">
              <h4 className="text-4xl text-blue-700">Engage</h4>
              <p className="text-xl w-[600px]">
                Immerse yourself in a dynamic learning environment where
                knowledge comes alive through captivating video lectures,
                interactive simulations, and immersive multimedia experiences.
              </p>
              <h4 className="text-4xl text-orange-700">Practice</h4>
              <p className="text-xl w-[600px]">
                Master your skills through hands-on practice sessions, quizzes,
                and real-world simulations. Reinforce your understanding and
                demonstrate your expertise through a variety of assessment
                methods designed to enhance your learning journey.
              </p>
              <h4 className="text-4xl text-green-800">Apply</h4>
              <p className="text-xl w-[600px]">
                Unlock your full potential and translate your knowledge directly
                into real-world. Our practical approach ensures that you can
                immediately apply what you learn to foster growth and success
              </p>
            </div>
            <div className=" w-1/3 h-full ">
              <img src={girl}/>
            </div>
          </div>
        </section>
        <section className="h-screen w-screen flex flex-col justify-center bg-slate-500 bg-opacity-40">
          <div className="h-1/2 w-full flex flex-row bg-gradient-to-r from-blue-900 to-blue-700 ">
              <div className="w-full p-6 ">

                <h1 className="text-7xl font-Scania text-yellow-400">Over 500+ Courses</h1>
                <h1 className="text-7xl font-Scania text-white">50000+ Students</h1>
                <BookmarkCheck size={46} strokeWidth={3} />
 
              </div>
          </div>
          <div className="h-1/2 bg-white">

          </div>

        </section>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
