import React from "react";
import Hero from "../components/home/Hero";
import Client from "../components/home/Client";
import Scope from "../components/home/Scope";
import Learn from "../components/home/Learn";
import Data from "../components/home/Data";
import Design from "../components/home/Design";
import Customer from "../components/home/Customer";
import Target from "../components/home/Target";
import Demo from "../components/home/Demo";

function Home() {
  return (
    <div>
      <Hero />
      <Client />
      <Scope />
      <Learn />
      <Data />
      <Design />
      <Customer />
      <Target />
      <Demo />
    </div>
  );
}

export default Home;
