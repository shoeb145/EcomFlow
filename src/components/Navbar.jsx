import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import { debounce } from "lodash";
import { throttle } from "lodash";
import { useCallback } from "react";
import banner from "../assets/banner1.jpg";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

function Navbar({ data }) {
  const [showMyModel, setShowMyModel] = useState(false);
  const [btnfillter, setBtnfillter] = useState({
    "men's clothing": false,
    "women's clothing": false,
    electronics: false,
    jewelery: false,
  });
  const [searchvalue, setSearchValue] = useState("");
  const [filterdata, setFilterdata] = useState([]);
  const [fildata, setFildata] = useState([]);
  const navigate = useNavigate();
  function showModel() {
    setShowMyModel(!showMyModel);
  }

  const handleDebounce = useCallback(
    debounce((value) => {
      handlesearch(value);
    }, 500),
    [data]
  );

  const handlethrotte = useCallback(
    throttle((value) => {
      filterBtn(value);
    }, 500),
    [data, fildata, btnfillter]
  );

  function handleInput(e) {
    let value = e.target.value;
    setSearchValue(value);
    handleDebounce(value);
  }
  const handlesearch = (value) => {
    const searchinput = value.toLowerCase();
    if (searchinput.length <= 1) {
      return setFildata([]);
    }

    const of = data.filter((item) => {
      return (
        item.category.toLowerCase().includes(searchinput) ||
        item.title.toLowerCase().includes(searchinput)
      );
    });

    setFildata(of);
  };

  function filterBtn(value) {
    if (btnfillter[value] == true) {
      return setBtnfillter((prev) => ({ ...prev, [value]: false }));
    }

    if (btnfillter[value] == false) {
      let filter;
      if (fildata.length > 0) {
        filter = fildata.filter((item) => {
          return item.category.toLowerCase() === value;
        });

        const type = {
          "men's clothing": false,
          "women's clothing": false,
          electronics: false,
          jewelery: false,
        };

        setBtnfillter({ ...type, [value]: true });

        return setFilterdata(filter);
      }

      filter = data.filter((item) => {
        return item.category.toLowerCase() === value;
      });

      const type = {
        "men's clothing": false,
        "women's clothing": false,
        electronics: false,
        jewelery: false,
      };

      setBtnfillter({ ...type, [value]: true });

      return setFilterdata(filter);
    }
  }

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
        <div className="fixed top-0 left-0 h-dvh bg-white dark:bg-base-100 overflow-x-scroll w-full flex flex-col items-center z-10 lg:m-3">
          <div className=" mt-4 flex flex-col items-center w-full ">
            <div className="flex self-center">
              <div className="absolute flex items-center  mr-8 top-5 left-4 md:left-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => showModel()}
                  className="size-6 self-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </div>
              <div className="flex border rounded-2xl w-60 md:w-100">
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
                  className="border-none focus:outline-none w-full self-center h-8 pr-1 "
                />
              </div>
            </div>
            <div className="flex mt-2">
              <div
                className={`  ${
                  btnfillter["men's clothing"]
                    ? "bg-amber-700 border-2"
                    : "bg-gray-400 dark:bg-gray-600 "
                } mr-2 rounded-2xl w-15 h-6 p-1 flex justify-center `}
                onClick={() => handlethrotte("men's clothing")}
              >
                <button type="button" className="self-center text-xs">
                  men
                </button>
              </div>

              <div
                className={`  ${
                  btnfillter["women's clothing"]
                    ? "bg-amber-700 border-2"
                    : "bg-gray-400 dark:bg-gray-600 "
                } mr-2 rounded-2xl w-15 h-6 p-1 flex justify-center `}
                onClick={() => handlethrotte("women's clothing")}
              >
                <button type="button" className="self-center text-xs">
                  women
                </button>
              </div>

              <div
                className={`  ${
                  btnfillter["jewelery"]
                    ? "bg-amber-700 border-2"
                    : "bg-gray-400 dark:bg-gray-600 "
                } mr-2 rounded-2xl w-15 h-6 p-1 flex justify-center `}
                onClick={() => handlethrotte("jewelery")}
              >
                <button type="button" className="self-center text-xs">
                  jewelery
                </button>
              </div>
              <div
                className={`  ${
                  btnfillter["electronics"]
                    ? "bg-amber-700 border-2"
                    : "bg-gray-400 dark:bg-gray-600 "
                } mr-2 rounded-2xl w-17 h-6 p-1 flex justify-center `}
                onClick={() => handlethrotte("electronics")}
              >
                <button type="button" className="self-center text-xs">
                  electronics
                </button>
              </div>
            </div>
          </div>
          <div className="py-3 pb-0 mb-0  mx-5  flex flex-col lg:grid-cols-3 lg:grid items-center lg:place-items-center md:grid md:grid-cols-2 md:place-items-center mt-2">
            {btnfillter["men's clothing"] ||
            btnfillter["women's clothing"] ||
            btnfillter["jewelery"] ||
            btnfillter["electronics"] ? (
              filterdata && filterdata.length > 0 ? (
                filterdata &&
                filterdata.map((product) => {
                  return <Productcard key={product?.id} product={product} />;
                })
              ) : (
                <div className="my-60 md:col-span-2 lg:col-span-3">
                  <img
                    src="https://img.icons8.com/?size=100&id=12695&format=png&color=000000"
                    alt=""
                  />{" "}
                </div>
              )
            ) : fildata && fildata.length > 0 ? (
              fildata &&
              fildata.map((product) => {
                return <Productcard key={product?.id} product={product} />;
              })
            ) : (
              <div className="my-60 md:col-span-2 lg:col-span-3">
                <img
                  src="https://img.icons8.com/?size=100&id=12695&format=png&color=000000"
                  alt=""
                />{" "}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex justify-between light:bg-banner dark:bg-gray-600   h-18">
        <p className="font-roboto text-3xl pl-3  self-center">
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
