import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { baseUrl, FetchData } from "../../utilities/FetchData";

export default function property({ data }) {
  console.log(data);

  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  } = data;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-md  overflow-hidden">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {photos.map((photo) => (
                <SwiperSlide key={photo.id}>
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={photo.url}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-col  mt-10">
            <div className="flex items-center w-full">
              <h2 className=" tracking-widest text-2xl title-font font-medium text-orange-400 mb-1 mr-2">
                AED {price}
                {rentFrequency && `/${rentFrequency}`}
              </h2>
              <div>{isVerified && <GoVerified size={25} color="green" />}</div>

              <div className="w-10 ml-auto">
                {agency?.logo && <img src={agency.logo.url} alt="logo" />}
              </div>
            </div>
            <div className="flex gap-5 text-2xl ">
              <span>{type}</span>
              <span className="text-lime-600">{purpose}</span>
            </div>
            <div className="flex items-center flex-wrap my-5">
              <span className="text-gray-400 mr-3 inline-flex items-center gap-2  text-lg pr-3 py-1 border-r-2 border-gray-200">
                {rooms} {<FaBed />}
              </span>
              <span className="text-gray-400 mr-3 inline-flex items-center gap-2  text-lg pr-3 py-1 border-r-2 border-gray-200">
                {baths} {<FaBath />}
              </span>
              <span className="text-gray-400 inline-flex items-center  text-lg">
                {area.toFixed(2)} Square Feet
              </span>
            </div>
            <h4 className="title-font text-2xl font-medium text-gray-900 mb-3">
              {title}
            </h4>
            <p className="leading-relaxed text-lg mb-4">{description}</p>

            {furnishingStatus && (
              <div>
                <span>Furnishing Status</span> <span>{furnishingStatus}</span>
              </div>
            )}

            <div>
              {amenities.length && (
                <span className="text-lg font-bold text-black">Facilites:</span>
              )}
              <div flexWrap="wrap">
                {amenities?.map((item) =>
                  item?.amenities?.map((amenity) => (
                    <span
                      className="font-semibold bg-blue-700 text-white py-1 px-2 mr-2 mb-2 rounded inline-flex items-center"
                      key={amenity.text}
                    >
                      {amenity.text}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps({ params }) {
  const details = await FetchData(
    `${baseUrl}/properties/detail?externalID=${params.id}`
  );

  return {
    props: { data: details }, // will be passed to the page component as props
  };
}
