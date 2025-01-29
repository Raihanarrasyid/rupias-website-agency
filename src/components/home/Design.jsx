import React from "react";

function Design() {
  return (
    <div className="flex container mx-auto gap-10 my-10">
      <div className="flex flex-1 justify-center items-center">
        <img className="h-full" src="/design.svg" alt="" />
      </div>
      <div className="flex flex-1 flex-col gap-5 justify-center items-start">
        <h1 className="text-gray-700 text-4xl font-bold">
          How to design your site footer like we did
        </h1>
        <p className="text-gray-500 text-md">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <div>
          <button className="bg-emerald-500 text-white px-10 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Design;
