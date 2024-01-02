import React from "react";
import image02 from "../../assets/image/image-02.png";
const CheifReco = () => {
  return (
    <div className="mt-32 mx-16 ">
      <div>
        <h1 className="text-black text-4xl font-bold">Chef Recommend</h1>
      </div>

      <div className="flex justify-between ">
        <div className="pt-10">
          <div>
            <h3 className="text-black text-xl pt-10">
              Lamb Salad with Fregola{" "}
              <span className="text-gray-500">- $32$</span>
            </h3>
            <p className="text-gray-500 text-md pt-5 pb-10">Lamb / Fregola</p>
          </div>
          <div>
            <h3 className="text-black text-xl">
              Pappardelle with Sea Urchin & Cauliflower{" "}
              <span className="text-gray-500">- $32$</span>
            </h3>
            <p className="text-gray-500 text-md pt-5 pb-10">Lamb / Fregola</p>
          </div>
          <div>
            <h3 className="text-black text-xl">
              Scallop Sashimi with Meyer Lemon Confit
              <span className="text-gray-500">- $32$</span>
            </h3>
            <p className="text-gray-500 text-md pt-5 pb-10">Lamb / Fregola</p>
          </div>
          <div>
            <h3 className="text-black text-xl">
            Braised Leeks with Mozzarella & Fried Egg
              <span className="text-gray-500">- $32$</span>
            </h3>
            <p className="text-gray-500 text-md pt-5 pb-10">Lamb / Fregola</p>
          </div>
        </div>
        <div className="pr-6">
          <img src={image02} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CheifReco;
