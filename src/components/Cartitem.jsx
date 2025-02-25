import React from "react";

function Cartitem(props) {
  return (
    <div className="flex justify-center mb-4 ">
      <div className=" flex flex-col justify-center rounded-md  ml-4 h-34 min-w-30    shadow-2xl items-center ">
        <figure className=" ">
          <img
            className="size-25 object-contain self-center my-auto "
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
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
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 ml-0.5 mr-2 text-gray-500 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <p className="text-gray-400 text-sm">Quanitity: 1</p>
        <div className="flex justify-between mt-5">
          <h3 className="font-bold">$23.99</h3>
          <div className="flex mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 p-1 rounded-full bg-gray-200"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
            <p className="text-sm self-center px-2">1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 p-1 rounded-full bg-gray-200  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
