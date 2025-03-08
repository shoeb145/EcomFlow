import React from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

function Productcard({ product, data }) {
  const navigate = useNavigate();

  return (
    <div className="w-60 md:w-90 md:h-140 lg:w-60 flex lg:justify-center items-center flex-col mt-5 lg:place-content-center lg:h-130 mx-4 ">
      <div
        onClick={() => {
          navigate(`/ProductDetail/${product?.id}`, { state: data });
        }}
        className="flex flex-col rounded-md   p-10  justify-center border  border-gray-300 dark:opacity-50 dark:bg-gray-50"
      >
        <figure className="self-center">
          <img
            className="size-50 md:size-80 lg:size-50 object-contain"
            src={product?.image}
            alt=""
          />
        </figure>
      </div>
      <div className="card-body self-start">
        <h2 className=" font-semibold lg:text-lg text-xl">{product?.title}</h2>
        <p className="font-medium text-lg ">
          $<span>{product?.price}</span>
        </p>
      </div>
    </div>
  );
}

export default Productcard;
