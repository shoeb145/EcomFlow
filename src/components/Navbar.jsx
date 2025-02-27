import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import { debounce } from "lodash";
import { useRef } from "react";
import banner from "../assets/banner1.jpg";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

function Navbar({ data }) {
  const [showMyModel, setShowMyModel] = useState(false);
  const [product, setProduct] = useState([]);
  const [searchvalue, setSearchValue] = useState("");
  const [fildata, setFildata] = useState([]);
  const navigate = useNavigate();
  function showModel() {
    setShowMyModel(true);
  }

  const handleDebounce = useRef(
    debounce((value) => {
      handlesearch(value);
    }, 500)
  ).current;

  useEffect(() => {
    return () => {
      handleDebounce.cancel();
    };
  }, [handleDebounce]);

  function handleInput(e) {
    let value = e.target.value;
    setSearchValue(value);
    handleDebounce(value);
  }
  const handlesearch = (value) => {
    const searchinput = value.toLowerCase();
    if (searchinput.length <= 1) {
      return;
    }
    console.log(data, "dfsdf");

    const of = data.filter((item) => {
      return (
        item.category.toLowerCase().includes(searchinput) ||
        item.title.toLowerCase().includes(searchinput)
      );
    });
    console.log(of);
    setFildata(of);
  };

  useEffect(() => {
    if (showMyModel) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMyModel]);

  return (
    <div className="">
      {showMyModel && (
        <div className="fixed top-0 left-0 h-screen bg-white overflow-x-scroll w-full flex flex-col items-center ">
          <div className=" mt-5 flex flex-col items-center w-full ">
            <div className="flex border rounded-2xl">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={() => showModel()}
                className="size-6 self-center mx-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="search"
                placeholder="Type here"
                value={searchvalue}
                onChange={(e) => handleInput(e)}
                className="border-none focus:outline-none w-full self-center h-8"
              />
            </div>
          </div>
          <div>
            {fildata &&
              fildata.map((product) => {
                return <Productcard key={product?.id} product={product} />;
              })}
          </div>
        </div>
      )}
      <div className="flex justify-between bg-banner h-18">
        <p className="font-roboto text-3xl pl-3 self-center">
          {" "}
          <Link to="/">EcomFlow </Link>
        </p>

        <div className="flex w-50 justify-evenly">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => showModel()}
            className="size-8 self-center "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => {
              navigate("/Wishlist");
            }}
            className="size-8 self-center "
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
            onClick={() => {
              navigate("/Cart");
            }}
            className="size-8 self-center "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
