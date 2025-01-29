import React from "react";

function Scope() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center my-10">
      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="text-gray-700 text-5xl">Manage your entire community</h1>
        <h1 className="text-gray-700 text-5xl">in a single system</h1>
        <p className="text-gray-500">Who is the Rupias suitable for?</p>
      </div>
      <div>
        <div className="flex justify-between items-center gap-52">
          <div className="flex flex-col gap-2 justify-center items-center w-72 border-2 border-gray-100 p-5 rounded-lg shadow-lg">
            <img src="Icon2.svg" alt="" />
            <h1 className="text-center font-bold text-3xl text-gray-700">
              Membership
            </h1>
            <h1 className="text-center font-bold text-3xl text-gray-700">
              Organizations
            </h1>
            <p className="text-center text-gray-500">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-72 border-2 border-gray-100 p-5 rounded-lg shadow-lg">
            <img src="Icon3.svg" alt="" />
            <h1 className="text-center font-bold text-3xl text-gray-700">
              National
            </h1>
            <h1 className="text-center font-bold text-3xl text-gray-700">
              Associations
            </h1>
            <p className="text-center text-gray-500">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-72 border-2 border-gray-100 p-5 rounded-lg shadow-lg">
            <img src="Icon4.svg" alt="" />
            <h1 className="text-center  font-bold text-3xl text-gray-700">
              Club And
            </h1>
            <h1 className="text-center  font-bold text-3xl text-gray-700">
              Groups
            </h1>
            <p className="text-center text-gray-500">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scope;
