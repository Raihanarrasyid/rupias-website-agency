import React from "react";

function Data() {
  return (
    <div className="bg-slate-100 p-10 my-10">
      <div className="flex justify-evenly items-center gap-20 p-20  mx-auto">
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-4xl font-bold text-gray-700">
            Helping a local <br />
            <span className="text-emerald-500">business reinvent itself</span>
          </h1>
          <p className="">We reached here with our hard work and dedication</p>
        </div>

        <div className="flex flex-1 justify-start">
          <div className="flex flex-col gap-10 flex-1">
            <div className="flex justify-between items-center gap-5">
              <div className="flex gap-5 flex-1">
                <img className="w-12 h-12" src="/data1.png" alt="" />
                <div className="flex flex-col">
                  <h1 className="text-3xl font-bold text-gray-700">
                    2,245,341
                  </h1>
                  <p className="text-gray-500">Members</p>
                </div>
              </div>
              <div className="flex gap-5 flex-1">
                <img className="w-12 h-12" src="/data2.png" alt="" />
                <div className="flex flex-col">
                  <h1 className="text-3xl font-bold text-gray-700">46,328</h1>
                  <p className="text-gray-500">Clubs</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-5">
              <div className="flex gap-5 flex-1">
                <img className="w-12 h-12" src="/data3.png" alt="" />
                <div className="flex flex-col">
                  <h1 className="text-3xl font-bold text-gray-700">828,867</h1>
                  <p className="text-gray-500">Event Booking</p>
                </div>
              </div>
              <div className="flex gap-5 flex-1">
                <img className="w-12 h-12" src="/data4.png" alt="" />
                <div className="flex flex-col">
                  <h1 className="text-3xl font-bold text-gray-700">
                    1,926,436
                  </h1>
                  <p className="text-gray-500">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
