import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Wishlist from "./Wishlist";
import { useEffect } from "react";

function ProductDetail({}) {
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation();
  const product = location.state;
  const addWishlist = (product) => {
    setWishlist((prevWish) => {
      const upgarded = Array.isArray(prevWish) ? [...prevWish] : [prevWish];

      const index = upgarded.findIndex((item) => item.id === product.id);
      console.log(index, "guys its here");
      if (!(index === -1)) {
        upgarded.splice(index, 1);
        localStorage.setItem("Wishlist", JSON.stringify(upgarded));
        return upgarded;
      }

      upgarded.push({ ...product });
      localStorage.setItem("Wishlist", JSON.stringify(upgarded));
      return upgarded;
    });
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Wishlist")) || [];
    setWishlist(data);
  }, []);
  console.log(wishlist);
  return (
    <div className="h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 m-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>

      <div className="flex flex-col rounded-md   p-10 mt-2 mb-6 mx-12 justify-center   shadow-2xl flex-grow">
        <figure className=" max-w-xs">
          <img
            className="size-60  object-contain self-center"
            src={product.image}
            alt=""
          />
        </figure>
      </div>
      <div className="mx-6">
        <h4 className=" font-extrabold text-2xl">{product.title}</h4>
        <p className=" pt-5 font-medium">Description</p>
        <p className="py-3 font-light text-sm ">{product.description}</p>
      </div>

      <div className="flex  justify-between pr-4 pl-6 pb-6  ">
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-400">Price</p>{" "}
          <h3 className="font-bold">$ {product.price}</h3>
        </div>
        <div className="flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={() => addWishlist(product)}
            className="size-12 self-center shadow-2xl p-2 rounded-full fill-white border-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <button className="px-5 bg-black m-1 text-amber-50 rounded-2xl h-8 self-center">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
