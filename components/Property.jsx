import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import defaultPhoto from "../assets/images/house.jpg";

export default function Property({ property }) {
  const {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  } = property;

  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={coverPhoto ? coverPhoto.url : defaultPhoto}
          alt="house"
        />
        <div className="p-6">
          <div className="flex items-center ">
            <h2 className=" tracking-widest text-lg title-font font-medium text-orange-400 mb-1 mr-2">
              AED {price}
              {rentFrequency && `/${rentFrequency}`}
            </h2>
            <div>{isVerified && <GoVerified />}</div>

            <div className="w-10 ml-auto">
              {agency?.logo && <img src={agency.logo.url} alt="logo" />}
            </div>
          </div>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>

          <div className="flex items-center flex-wrap ">
            <span className="text-gray-400 mr-3 inline-flex items-center gap-2  text-sm pr-3 py-1 border-r-2 border-gray-200">
              {rooms} {<FaBed />}
            </span>
            <span className="text-gray-400 mr-3 inline-flex items-center gap-2  text-sm pr-3 py-1 border-r-2 border-gray-200">
              1 {<FaBath />}
            </span>
            <span className="text-gray-400 inline-flex items-center  text-sm">
              {area.toFixed(2)} Square Feet
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
