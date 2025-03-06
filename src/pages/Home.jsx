import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import banner from "../assets/bg2.png";
import Productcard from "../components/Productcard";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Home(props) {
  const [data, setData] = useState(null);

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

  return (
    <div className=" pt-5 lg:p-6 lg:pb-0">
      <div className="pt-6 pb-0 mx-5">
        <div className="h-135  bg-amber-600 dark:bg-gray-600 rounded-xl">
          <Navbar data={data} />
          <div className="flex justify-items-start h-122   ">
            <div className="flex justify-between w-500">
              <div className="w-50 self-center">
                <h3 className=" self-center font-Sigmar text-4xl p-4 pt-20">
                  Where Fashion Meets Convenience.
                </h3>
              </div>
              <div className="md:flex content-end  pt-32 hidden ">
                <img
                  src={banner}
                  alt=""
                  className="size-80 object-cover self-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-3 pb-0 mb-0 mx-5  flex flex-col lg:grid-cols-3 lg:grid items-center lg:place-items-center md:grid md:grid-cols-2 md:place-items-center mt-2">
        {data && data ? (
          data.map((product) => {
            return <Productcard key={product?.id} product={product} />;
          })
        ) : (
          <div className="h-screen flex mt-4 mx-auto w-100 text-2xl">
            <h1 className="">loading....</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
