import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-slate-900 text-center  shadow md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-white sm:text-center ">
        &copy; 2022{" "}
        <a
          href="https://salmanahmed009.netlify.app"
          className="hover:underline"
        >
          {" "}
          Salman Ahmed
        </a>
        All Rights Reserved.
      </span>
      <ul className="flex justify-center flex-wrap items-center mt-3 text-sm text-white  sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
