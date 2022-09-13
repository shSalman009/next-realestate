import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
import Property from "../components/Property";
import SearchFilter from "../components/SearchFilter";
import { baseUrl, FetchData } from "../utilities/FetchData";

export default function Search({ propertiesForSale }) {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setFilterOpen(!filterOpen);
        }}
        className="bg-slate-200  text-2xl font-semibold  py-5 flex items-center justify-center gap-2 cursor-pointer select-none"
      >
        <span> Search Property by Filter</span>
        <BiFilter />
      </div>

      {filterOpen && <SearchFilter />}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {propertiesForSale.map((property) => (
              <Property key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await FetchData(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: { propertiesForSale: data?.hits },
  };
}
