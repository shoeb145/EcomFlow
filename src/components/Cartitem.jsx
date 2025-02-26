import React from "react";

function Cartitem({ data, deleteCartItem, decreaseCart, increaseCart }) {
  return (
    <div className="flex justify-center mb-4 ">
      <div className=" flex flex-col justify-center rounded-md  ml-4 h-34 min-w-30    shadow-2xl items-center ">
        <figure className=" ">
          <img
            className="size-25 object-contain self-center my-auto "
            src={data?.image}
            alt=""
          />
        </figure>
      </div>
      <div className="pl-2 flex flex-col justify-center">
        <div className="flex ">
          <h4 className=" font-bold text-base ">{data.title}</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 ml-0.5 mr-2 text-gray-500 shrink-0"
            onClick={() => deleteCartItem(data.id)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <p className="text-gray-400 text-sm">Quanitity: {data.quantity}</p>
        <div className="flex justify-between mt-5">
          <h3 className="font-bold">${data.price}</h3>
          <div className="flex mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => decreaseCart(data.id)}
              className="size-6 p-1 rounded-full bg-gray-200"
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
