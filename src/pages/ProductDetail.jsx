import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Wishlist from "./Wishlist";
import { useEffect } from "react";

function ProductDetail({}) {
  const [wishlist, setWishlist] = useState([]);
  const [cartdata, setCartdata] = useState([]);
  const [Buttonactive, setButtonactive] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  const addWishlist = (product) => {
    setWishlist((prevWish) => {
      const upgarded = Array.isArray(prevWish) ? [...prevWish] : [prevWish];

      const index = upgarded.findIndex((item) => item.id === product.id);
      console.log(index, "guys its here");
      if (!(index === -1)) {
        upgarded.splice(index, 1);
        localStorage.setItem("Wishlist", JSON.stringify(upgarded));
        setButtonactive(false);
        return upgarded;
      }
      setButtonactive(true);

      upgarded.push({ ...product });
      localStorage.setItem("Wishlist", JSON.stringify(upgarded));
      return upgarded;
    });
  };

  const handleCart = (id) => {
    if (id == "") return;
    setCartdata((prevCart) => {
      let updatedCart = Array.isArray(prevCart) ? [...prevCart] : [];

      // Find the existing item in the cart
      const itemIndex = updatedCart.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        // If item exists, increase the quantity
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + 1,
        };
      } else {
        // Find the product from `data` instead of making an API call
        const newProduct = product;
        if (!newProduct) return updatedCart; // Exit if product not found

        // Add the product with quantity 1
        updatedCart.push({ ...newProduct, quantity: 1 });
      }

      // Save to localStorage
      localStorage.setItem("cartdata", JSON.stringify(updatedCart));

      return updatedCart; // Update state
    });
  };

  useEffect(() => {
    const prev = JSON.parse(localStorage.getItem("cartdata")) || [];
    setCartdata(prev);
    const data = JSON.parse(localStorage.getItem("Wishlist")) || [];
    setWishlist(data);
    let updatedCart = Array.isArray(data) ? [...data] : [];
    const itemIndex = updatedCart.findIndex((item) => item.id === product?.id);
    if (itemIndex !== -1) {
      setButtonactive(true);
    } else {
      setButtonactive(false);
    }
  }, []);

  return (
    <div className="h-[calc(100vh-15px)]  ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={() => navigate("/")}
        className="size-6 m-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
      <div className="lg:grid lg:grid-cols-2 lg:m-6 h-full lg:place-items-center lg:mt-8 flex flex-col justify-center">
        <div className="flex flex-col rounded-md   p-10 mt-2 mb-6 md:mx-15 mx-12 justify-center  dark:opacity-50  dark:bg-gray-50  shadow-2xl flex-grow ">
          <figure className=" max-w-xs self-center lg:flex lg:justify-center lg:h-100">
            <img
              className="size-60 md:size-80 object-contain self-center"
              src={product.image}
              alt=""
            />
          </figure>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:self-center  gap-30">
          <div className="mx-6 md:mx-10 ">
            <h4 className=" font-extrabold text-2xl lg:text-5xl">
              {product.title}
            </h4>
            <p className=" pt-5 font-semibold lg:text-xl">Description</p>
            <p className="py-3 font-medium text-lg ">{product.description}</p>
          </div>

          <div className="flex  justify-between pr-4 md:mx-4 pl-6 pb-6  ">
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
                className={`${
                  Buttonactive ? "fill-red-400" : "fill-white"
                } size-12 self-center shadow-2xl p-2 rounded-full border-0`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <button
                className="px-5 bg-black m-1 text-amber-50 rounded-2xl h-8 self-center"
                onClick={() => handleCart(product?.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default ProductDetail;
