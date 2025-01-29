import React from "react";

let icons = [
  {
    id: 1,
    image: "Logo-1.svg",
  },
  {
    id: 2,
    image: "Logo-2.svg",
  },
  {
    id: 3,
    image: "Logo-3.svg",
  },
  {
    id: 4,
    image: "Logo-4.svg",
  },
  {
    id: 5,
    image: "Logo-5.svg",
  },
];

function Customer() {
  return (
    <div className="bg-slate-100 p-10 mt-20">
      <div className="flex w-4/5 mx-auto">
        <div className="flex flex-1">
          <img
            src="https://unsplash.com/photos/blue-and-white-x-logo-Cys3W7_MXDU"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 flex-[2]">
          <p className="text-gray-500 flex-1">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="flex flex-col gap-3">
            <h1 className="text-emerald-500 text-xl">Tim Raihan</h1>
            <h5 className="text-gray-500">
              British Dragon Boat Racing Association
            </h5>
            <div className="flex w-full gap-10 justify-center items-center">
              <div className="flex gap-14"></div>
              {icons.map((icon) => (
                <img src={icon.image} alt="" key={icon.id} />
              ))}
              <div className="flex gap-5 hover:cursor-pointer">
                <h1 className="text-lg text-emerald-500">Meet all customers</h1>
                <img src="/right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
