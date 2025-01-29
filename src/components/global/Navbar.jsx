import React from "react";

function Navbar() {
  return (
    <div className="bg-transparent flex justify-between items-center p-4 h-20">
      <div className="flex items-center space-x-2 flex-1">
        <img src="/Icon.svg" alt="" />
        <p className="font-bold text-xl">Rupias</p>
      </div>
      <div className="flex flex-1">
        <ul className="flex space-x-20">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Service</a>
          </li>
          <li>
            <a href="/">Feature</a>
          </li>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/">Testimonial</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-1 justify-end">
        <button className="text-emerald-500 px-4 py-2 rounded-md">Login</button>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
