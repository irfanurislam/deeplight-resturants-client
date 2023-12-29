import React from "react";
import bgImage from "../../assets/image/bg.jpg";
import { Parallax } from "react-parallax";
const BannerParalox = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Parallax Background 
      font-size: 3.125rem;
    font-family: 'Open Sans Condensed',sans-serif;
      */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover bg-no-repeat bg-center bg-cover"
          src={bgImage}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center">
        <h3 className="text-4xl lowercase ">Delightful Experiences</h3>
        <p className="text-5xl font-bold pt-10 pb-16">
          Welcome to "Deeplight Restaurant"
        </p>
        {/* <button className="btn-outline hover:common_colour text-white font-bold py-2 px-4 mt-4 rounded-full">
          Reservation
        </button> */}
        <button className=" btn btn-outline hover:bg-[#eb5058] text-white font-bold uppercase hover:border-white">
          Reservation
        </button>
      </div>
    </div>
  );
};

export default BannerParalox;
