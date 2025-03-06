import React from "react";

function Cartitem({ data, deleteCartItem, decreaseCart, increaseCart }) {
  return (
    <div className="flex justify-center mb-4 lg:mx-20">
      <div className="dark:opacity-70  dark:bg-gray-50 flex flex-col justify-center rounded-md  ml-4 h-34 min-w-30  md:w-40   shadow-2xl items-center mr-2  ">
        <figure className=" ">
          <img
            className="size-25 object-contain self-center my-auto "
            src={data?.image}
            alt=""
          />
        </figure>
      </div>
      <div className="pl-2 flex flex-col justify-center md:w-110 w-80 mr-2">
        <div className="flex justify-between ">
          <h4 className=" font-bold text-base ">{data.title}</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 ml-0.5  text-gray-500 justify-end shrink-0 self-center"
            onClick={() => deleteCartItem(data.id)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <p className="text-gray-400 text-sm flex self-end">
          Quanitity: {data.quantity}
        </p>
        <div className="flex justify-between mt-5">
          <h3 className="font-bold">${data.price}</h3>
          <div className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => decreaseCart(data.id)}
              className="size-6 p-1 rounded-full dark:bg-base-100 bg-gray-200"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
            <p className="text-sm self-center px-2"> {data.quantity}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => increaseCart(data.id)}
              className="size-6 p-1 rounded-full dark:bg-base-100 bg-gray-200  "
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
