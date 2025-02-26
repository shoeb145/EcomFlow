import React, { useEffect, useState } from "react";

function Wishlist(props) {
  const [Wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Wishlist"));
    setWishlist([...data]);
  }, []);
  function deleteItem(id) {
    setWishlist((prevWish) => {
      const upgarded = Array.isArray(prevWish) ? [...prevWish] : [prevWish];

      const index = upgarded.findIndex((item) => item.id === id);
      console.log(index, "guys its here");
      if (!(index === -1)) {
        upgarded.splice(index, 1);
        localStorage.setItem("Wishlist", JSON.stringify(upgarded));
        return upgarded;
      }
    });
  }
  console.log(Wishlist, "its here");
  return (
    <div className="h-screen">
      <div className="flex ">
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
        <h4 className="self-center text-lg w-full  ">Wishlist </h4>
      </div>
      {Wishlist &&
        Wishlist.map((product) => {
          return (
            <div key={product.id} className="flex justify-center mb-4 ">
              <div className=" flex flex-col justify-center rounded-md  ml-4 h-34 min-w-30    shadow-2xl items-center ">
                <figure className=" ">
                  <img
                    className="size-25 object-contain self-center my-auto "
                    src={product.image}
                    alt=""
                  />
                </figure>
              </div>
              <div className="pl-2 flex flex-col justify-center">
                <div className="flex ">
                  <h4 className=" font-bold text-base ">
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </h4>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    onClick={() => deleteItem(product.id)}
                    className="size-5 ml-0.5 mr-2 text-gray-500 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>

                <div className="flex justify-end mr-2 mt-5">
                  <h3 className="font-bold">$23.99</h3>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Wishlist;
