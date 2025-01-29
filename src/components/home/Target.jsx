import React from "react";
import Card from "./target/Card";

function Target() {
  return (
    <div className="flex flex-col gap-20 w-4/5 mx-auto">
      <div className="flex flex-col mt-10 items-center gap-5 p-10 text-center w-1/2 mx-auto">
        <h1 className="text-4xl font-bold text-gray-700">
          Caring is the new marketing
        </h1>
        <p className="text-gray-500">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div>
          <Card
            content={"Creating Streamlined Safeguarding Processes with OneRen"}
          />
        </div>
        <div>
          <Card
            content={
              "What are your safeguarding responsibilities and how can you manage them?"
            }
          />
        </div>
        <div>
          <Card
            content={"Revamping the Membership Model with Triathlon Australia"}
          />
        </div>
      </div>
    </div>
  );
}

export default Target;
