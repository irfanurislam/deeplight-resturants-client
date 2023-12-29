import React from "react";
import imageOne from "../../assets/image/image-01.png";
const Flavours = () => {
  return (
    <div className="flex justify-center items-center mt-20">
  <div>
    <div className="">
      <img className="m-auto w-3/5" src={imageOne} alt="" />
    </div>

    <div className="mt-10 text-center">
      <h3 className="text-black text-2xl font-bold">honest, flavorful food</h3>
      <h1 className="text-4xl font-extrabold text-black py-16">A Few Words About Our Restaurant</h1>
    </div>

    <div className=" text-center w-4/5 mx-auto">
      <p className="text-gray-500 font-sans text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
      </p>
      <div className="mt-10">
      <button className="btn btn-outline hover:bg-[#eb5058] text-[#eb5058] font-bold uppercase hover:border-pink-600">
      Read More
    </button>
      </div>
    </div>
    
  </div>
</div>

  );
};

export default Flavours;
