import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Productcard from "../components/Productcard";
import axios from "axios";
import { Outlet } from "react-router-dom";

function Home(props) {
  const [data, setData] = useState(null);
  const [oldCart, setOldCart] = useState([]);
  const [cartdata, setCartdata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  const handleCart = async (id) => {
    if (id == "") return;
    const prevcart = JSON.parse(localStorage.getItem("cartdata"));

    try {
      const URl = `https://fakestoreapi.com/products/${id}`;
      const res = await axios.get(URl);
      const find = res.data;

      // const exsesting = prevcart.find((item) => item.id === find.id);
      // if (exsesting) {
      //   return prevcart.map((i) => {
      //     i.id === find.id?
      //   });
      // }

      setCartdata([...cartdata, find]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (cartdata.length == 0) {
      return;
    }

    const prevcart = JSON.parse(localStorage.getItem("cartdata"));
    if (prevcart === null) {
      localStorage.setItem("cartdata", JSON.stringify(cartdata));
      return;
    }

    const newdata = prevcart.concat(cartdata);
    localStorage.setItem("cartdata", JSON.stringify(newdata));
  }, [cartdata, setCartdata]);
  console.log(cartdata);
  console.log(oldCart, "me");
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
