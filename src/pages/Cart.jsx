import React, { useEffect, useState } from "react";
import { checkCart } from "../utils";

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
    <div className="h-screen bg-white">
      {cartdata &&
        cartdata.map((data, i) => {
          return <div key={i}>{data?.data?.title}</div>;
        })}
      {/* <div className="bg-amber-700">
        {checkCart(cartdata) &&
          checkCart(cartdata)?.map((data, i) => {
            return <div key={i}>{data?.data?.title}</div>;
          })}
      </div> */}
    </div>
  );
}

export default Cart;
