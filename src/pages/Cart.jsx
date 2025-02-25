import React, { useEffect, useState } from "react";
// import { checkCart } from "../utils";
import Cartitem from "../components/Cartitem";

function Cart(props) {
  const [cartdata, setCartdata] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartdata"));
    if (data) {
      setCartdata(data);
    }
  }, []);
  console.log(cartdata, "in");
  return (
    <div className="h-screen ">
      <div className="flex  ">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 m-4 my-4 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 m-4 my-4 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <h4 className="self-center text-lg w-full  ">Cart</h4>
      </div>
      <Cartitem />
      <hr className="mx-2 text-gray-400 " />
      <Cartitem />
      <hr className="mx-2 text-gray-400 " />
      <Cartitem />
      <hr className="mx-2 text-gray-400 " />
      <div className="mt-10 mx-2">
        <div className="flex justify-between pb-2 ">
          <p className="text-gray-400">Sub total</p> <h4>$233.45</h4>
        </div>

        <div className="flex justify-between pb-2 ">
          <p className="text-gray-400">Shipping</p> <h4>$20</h4>
        </div>
        <div className="flex justify-between pb-2">
          <p className="text-gray-400">Tax(18%)</p> <h4>$20</h4>
        </div>
        <div className="flex justify-between pt-2 pr-2 ">
          <p className="font-medium">Total</p>{" "}
          <h4 className="text-xl font-bold">$20</h4>
        </div>
      </div>

      {/* {cartdata &&
        cartdata.map((data, i) => {
          return <div key={i}>{data?.data?.title}</div>;
        })}
      <div className="bg-amber-700">
        {checkCart(cartdata) &&
          checkCart(cartdata)?.map((data, i) => {
            return <div key={i}>{data?.data?.title}</div>;
          })}
      </div> */}
    </div>
  );
}

export default Cart;
