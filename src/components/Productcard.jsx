import React from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

function Productcard({ product, handleCart }) {
  const navigate = useNavigate();
  return (
    <div className="w-60 flex items-center flex-col mt-5  ">
      <div
        onClick={() => {
          navigate("/ProductDetail", { state: product });
        }}
        className="flex flex-col rounded-md   p-10  justify-center border  border-gray-300"
      >
        <figure className="self-center">
          <img
            className="size-50  object-contain"
            src={product?.image}
            alt=""
          />
        </figure>
      </div>
      <div className="card-body">
        <h2 className=" font-semibold">{product?.title}</h2>
        <p>
          $<span>{product?.price}</span>
        </p>
        <button onClick={() => handleCart(product?.id)}>click</button>
      </div>
    </div>
  );
}

export default Productcard;
