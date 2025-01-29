import React from "react";

function Client() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="flex flex-col justify-center items-center space-y-5">
        <h1 className="text-gray-700 text-3xl font-bold">Our Clients</h1>
        <p className="text-gray-500">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex justify-between items-center space-x-32 mt-10 p-5">
        <img src="/Logo1.svg" alt="" />
        <img src="/Logo2.svg" alt="" />
        <img src="/Logo3.svg" alt="" />
        <img src="/Logo4.svg" alt="" />
        <img src="/Logo5.svg" alt="" />
        <img src="/Logo6.svg" alt="" />
        <img src="/Logo7.svg" alt="" />
      </div>
    </div>
  );
}

export default Client;
