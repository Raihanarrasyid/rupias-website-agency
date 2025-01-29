import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center bg-gray-800 text-white p-20">
      <div className="flex w-4/5 items-center justify-between mx-auto">
        <div className="flex flex-col items-center justify-center">
          <ul className="flex flex-col space-y-10">
            <li>
              <div className="flex items-center space-x-2">
                <img src="/Icon.svg" alt="" />
                <p className="font-bold text-xl">Rupias</p>
              </div>
            </li>
            <li className="flex flex-col space-y-2">
              <p>Copyright © 2025 Rupias ltd.</p>
              <p>All rights reserved</p>
            </li>
          </ul>
        </div>
        <div className="flex gap-20 justify-center items-start">
          <div className="flex flex-col items-start justify-center gap-5">
            <h1 className="text-2xl">Company</h1>
            <ul className="flex flex-col space-y-2">
              <li>
                <p>About Us</p>
              </li>
              <li>
                <p>Blog</p>
              </li>
              <li>
                <p>Contact Us</p>
              </li>
              <li>
                <p>Pricing</p>
              </li>
              <li>Testimonial</li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h1 className="text-2xl">Support</h1>
            <ul className="flex flex-col space-y-2">
              <li>
                <p>FAQ</p>
              </li>
              <li>
                <p>Privacy Policy</p>
              </li>
              <li>
                <p>Terms of Service</p>
              </li>
              <li>
                <p>Legal</p>
              </li>
              <li>
                <p>Status</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h1 className="text-2xl">Stay Connected</h1>
            <input type="text" className="rounded-lg bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
