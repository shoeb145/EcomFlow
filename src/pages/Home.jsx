import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Productcard from "../components/Productcard";
import axios from "axios";
import { Outlet } from "react-router-dom";

function Home(props) {
  const [data, setData] = useState(null);

  const [cartdata, setCartdata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
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
        const newProduct = data.find((product) => product.id === id);
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
  }, []);

  return (
    <div className="bg-banner1  pt-5 ">
      <div className="pt-6 pb-0 mx-5">
        <div className="h-135 bg-banner">
          <Navbar cartdata={cartdata} />
          <div className="flex justify-items-start h-122 ">
            <div className="w-50 self-center">
              <h3 className=" self-center font-Sigmar text-4xl p-4 pt-20">
                Where Fashion Meets Convenience.
              </h3>
            </div>
            <div className=" absolute  size-60 ">
              {/* <img src={banner} alt="" className="object-cover " /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white  py-3 mx-5 pb-5 mb-5 flex flex-col items-center">
        {data &&
          data.map((product) => {
            return (
              <Productcard
                key={product?.id}
                handleCart={handleCart}
                product={product}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
