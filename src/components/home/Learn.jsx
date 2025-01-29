import React from "react";

function Learn() {
  return (
    <div className="flex justify-between items-center w-4/5 mx-auto my-20">
      <div className="flex flex-1">
        <img src="/Frame35.svg" alt="" />
      </div>
      <div className="flex flex-1">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold text-gray-700">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <div>
            <button className="bg-emerald-500 text-white px-10 py-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
