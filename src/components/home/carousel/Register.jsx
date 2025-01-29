import React from "react";

function Register() {
  return (
    <div className="container justify-between items-center flex mx-auto">
      <div className="flex flex-col flex-1">
        <div className="my-4">
          <h1 className="text-6xl font-bold">Lesson and insights</h1>
          <h1 className="text-emerald-500 font-bold text-6xl">from 8 years</h1>
        </div>
        <div>
          <p className="text-gray-500">
            Where to grow your business as a photographer: site or social media
          </p>
        </div>
      </div>
      <div className="flexjustify-center items-center">
        <img src="/Illustration.svg" alt="assets picture" />
      </div>
    </div>
  );
}

export default Register;
