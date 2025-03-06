import React, { useEffect, useState } from "react";

import Cartitem from "../components/Cartitem";
import {
  calcSubtotal,
  format2Decimals,
  shippingPrice,
  taxAmount,
  total,
} from "../utils";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  const navigate = useNavigate();
  const [cartdata, setCartdata] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartdata"));
    if (data) {
      setCartdata(data);
    }
  }, []);

  const deleteCartItem = (id) => {
    const index = cartdata.findIndex((item) => item.id === id);
    const selectedItem = cartdata.find((item) => item.id === id);
    const slected = selectedItem.quantity;

    if (slected) {
      setCartdata((prevCart) => {
        let updatedCart = Array.isArray(prevCart) ? [...prevCart] : [];

        updatedCart.splice(index, 1);

        localStorage.setItem("cartdata", JSON.stringify(updatedCart));

        return updatedCart;
      });
    }
  };

  const decreaseCart = (id) => {
    const index = cartdata.findIndex((item) => item.id === id);
    const selectedItem = cartdata.find((item) => item.id === id);
    const slected = selectedItem.quantity;

    setCartdata((prevCart) => {
      let updatedCart = Array.isArray(prevCart) ? [...prevCart] : [];
      if (slected == 1) {
        updatedCart.splice(index, 1);
      } else {
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity - 1,
        };
      }
      localStorage.setItem("cartdata", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };
  const increaseCart = (id) => {
    const index = cartdata.findIndex((item) => item.id === id);
    setCartdata((prevCart) => {
      let updatedCart = Array.isArray(prevCart) ? [...prevCart] : [];

      if (index >= 0) {
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity + 1,
        };
      }
      localStorage.setItem("cartdata", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  return (
    <div className="h-screen ">
      <div className="flex  ">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => navigate("/")}
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
      {cartdata && cartdata.length > 0 ? (
        cartdata &&
        cartdata.map((data) => {
          return (
            <div key={data.id} className="lg:mx-20 mt-2">
              <Cartitem
                deleteCartItem={deleteCartItem}
                decreaseCart={decreaseCart}
                increaseCart={increaseCart}
                data={data}
              />
              <hr className="mx-2 text-gray-400 " />
            </div>
          );
        })
      ) : (
        <div className="my-30 flex justify-center ">
          <img
            src="https://img.icons8.com/?size=100&id=12695&format=png&color=000000"
            alt=""
          />
        </div>
      )}

      <div className="mt-10 mx-2 lg:mx-20">
        <div className="flex justify-between pb-2 ">
          <p className="text-gray-400">Sub total</p>{" "}
          <h4>${format2Decimals(calcSubtotal(cartdata))} </h4>
        </div>

        <div className="flex justify-between pb-2 ">
          <p className="text-gray-400">Shipping</p>{" "}
          <h4>${shippingPrice(calcSubtotal(cartdata))}</h4>
        </div>
        <div className="flex justify-between pb-2">
          <p className="text-gray-400">Tax(10%)</p>{" "}
          <h4>${format2Decimals(taxAmount(calcSubtotal(cartdata)))}</h4>
        </div>
        <div className="flex justify-between pt-2 pr-2 ">
          <p className="font-medium">Total</p>{" "}
          <h4 className="text-xl font-bold">
            {" "}
            ${format2Decimals(total(cartdata))}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Cart;
