import React from "react";
import SectionTitle from "../../hooks/UseQoutes";

const GoodFood = () => {
  return (
    <div>
      {/* <SectionTitle
            heading={"eat good food"}
            subHeading={"Have A Quick Look At Our Menus"}
          /> */}

      <div className=" text-center w-4/5 mx-auto">
        <div className="mt-52">
          <h3 className="text-black text-2xl font-bold">eat good food</h3>
          <h1 className="text-4xl font-extrabold text-black py-16">
            Have A Quick Look At Our Menus
          </h1>
        </div>
        <p className="text-gray-500 font-sans text-xl">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae.
        </p>
        {/* <div className="mt-10">
            <button className="btn btn-outline hover:bg-[#eb5058] text-[#eb5058] font-bold uppercase hover:border-pink-600">
              Read More
            </button>
          </div> */}
      </div>
    </div>
  );
};

export default GoodFood;
