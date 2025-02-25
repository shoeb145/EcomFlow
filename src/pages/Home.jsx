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

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  const handleCart = async (id) => {
    if (id == "") return;
    let prevcart;
    if (JSON.parse(localStorage.getItem("cartdata"))) {
      prevcart = JSON.parse(localStorage.getItem("cartdata"));
    } else {
      prevcart = [];
    }
    console.log(prevcart, "don");

    try {
      const URl = `https://fakestoreapi.com/products/${id}`;
      const res = await axios.get(URl);
      const find = res.data;

      const exsesting = prevcart.find((item) => item.id === find.id);
      const nonexexsesting = prevcart.filter((item) => item.id != find.id);
      console.log(exsesting, " don2");
      if (exsesting) {
        prevcart.map((item) => {
          return item.id === find.id
            ? (prevcart = {
                ...nonexexsesting,
                ...item,
                quantity: item.quantity + 1,
              })
            : item;
        });
        if ((prevcart.length = 1)) {
          setCartdata([prevcart]);
        } else {
          setCartdata([...prevcart]);
        }
      } else {
        setCartdata([...prevcart, { ...find, quantity: 1 }]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (cartdata.length == 0) {
      return;
    }

    localStorage.setItem("cartdata", JSON.stringify(cartdata));
  }, [cartdata, setCartdata]);
  console.log(cartdata);

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
