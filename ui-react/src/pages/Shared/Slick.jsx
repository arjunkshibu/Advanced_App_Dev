import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";

function Slick() {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500, // Breakpoint for screens larger than 1500px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024, // Breakpoint for screens larger than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Breakpoint for screens larger than 768px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480, // Breakpoint for screens larger than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };
  return (
    <div className='w-[65%] m-auto md:w-[65%] z-40'>
      <div className="text-white md:text-4xl pb-6">
        Latest on Course Hunt &#x21D2;
      </div>
<Slider {...settings}>

{data.map((d) => (
          <div key={d.name} className="bg-white md:h-[480px] h-[300px] border text-black ">
            <div className='md:h-56 h-[105px] bg-white flex justify-center text-center pt-4 md:items-center'>
              <img src={d.img} alt="" className="md:h-44 md:w-50 h-20 w-30"/>
            </div>

            <div className="flex flex-col items-center text-center justify-center md:h-[200px] h-[150px] p-11">
              <p className="md:text-[18px] text-[12px] font-semibold">{d.name}</p>
              <p className="text-center text-[11px] md:text-base ">{d.review}</p>
            </div>
            <div className="flex justify-center items-center">
              <button className='bg-indigo-500 text-white md:text-lg text-sm px-6 py-1 hover:bg-indigo-800'>View More</button>
              </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
}

const data = [
  {
    name: "Fundamentals of Quantum Theory",
    img: "/src/assets/img/physics-6936704_640.jpg",
    review:
      "An in-depth exploration into the intricate principles and phenomena underlying the quantum world.",
  },
  {
    name: "Game Development with Unity",
    img: '/src/assets/img/unity.jpg',
    review:
      " A comprehensive course designed to enhance the skills and knowledge needed to develop games using the Unity game engine.",
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
      "Delves into cutting-edge research and theories in astrophysics, to unravel the deepest mysteries and expand the boundaries of human understanding.",
  },
];

export default Slick;