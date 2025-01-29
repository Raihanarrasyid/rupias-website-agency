import React from "react";

function Card({ content }) {
  return (
    <div className="bg-slate-100 p-7 rounded-lg shadow-lg border-2 border-gray-100 text-center flex flex-col gap-5">
      <p className="text-gray-500 font-bold">{content}</p>
      <div className="flex justify-center items-center">
        <div className="flex gap-5 hover:cursor-pointer">
          <h1 className="text-lg text-emerald-500">Read more</h1>
          <img src="/right.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
