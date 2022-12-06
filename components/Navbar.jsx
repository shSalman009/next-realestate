import Link from "next/link";
import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-slate-900 text-white border-gray-200 px-2 sm:px-4 py-2.5 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <img src="favicon.ico" className="mr-3 h-6 sm:h-9" />
          <Link href="/">
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              Company
            </span>
          </Link>
        </div>

        <button
          onClick={() => {
            setOpen(!open);
          }}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <span className="sr-only">Open main menu</span>
          <FaAlignRight />
        </button>

        {open && (
          <div className=" w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col  p-4 mt-4 bg-slate-900 rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li
                className="block py-2 pr-4 pl-3 text-white  rounded  md:p-0 "
                aria-current="page"
              >
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li className="block py-2 pr-4 pl-3 text-white rounded md:p-0 ">
                <Link href="/Search" passHref>
                  Search
                </Link>
              </li>
              <li className="block py-2 pr-4 pl-3 text-white rounded md:p-0 ">
                <Link href="/Search?purpose=for-sale" passHref>
                  Buy Property
                </Link>
              </li>
              <li className="block py-2 pr-4 pl-3 text-white rounded md:p-0 ">
                <Link href="/Search?purpose=for-rent" passHref>
                  Rent Peoperty
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white rounded md:p-0 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
