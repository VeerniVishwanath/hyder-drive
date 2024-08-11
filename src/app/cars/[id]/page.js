"use client";
import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import CarouselThumbs from "@/app/cars/[id]/carouselThumbs";
import CarInfo from "./carInfo";
import Bill from "./bill";
import Link from "next/link";

export default function Page({ params }) {
  const { id } = params;
  const [car, setCar] = useState(null);

  const LocationTile = useMemo(
    () =>
      dynamic(() => import("@/app/cars/[id]/locationTile"), {
        loading: () => <p>A Map is loading</p>,
        ssr: false,
      }),
    []
  );

  //on Client side, all data fetching is done on client [fetch api]
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("/api/cars");
        if (!response.ok) {
          throw "Network says Not Ok";
        }

        const cars = await response.json();
        const car = cars.find((car) => {
          return car.id === Number.parseInt(id);
        });
        setCar(car);
      };
      fetchData();
    } catch (error) {
      console.error("FetchError: ", error);
    }
  }, [id]);

  if (car == null) {
    return (
      <div className="w-full h-[50vh] font-semibold flex justify-center items-center text-gray-800">
        {car === undefined ? "Car Not Found" : "Loading..."}
      </div>
    );
  }

  return (
    <div
      className="p-5 flex flex-col lg:flex-row 
                 pl-[10%] pr-[10%] xl:pl-[10%] xl:pr-[10%]
                 gap-10 xl:gap-10"
    >
      {/* left container */}
      <div className="flex flex-col w-full lg:w-1/2 gap-3">
        <div className="flex justify-between text-xl font-medium p-[0.5rem]">
          <div className="flex gap-4">
            <Link href={"/"}>
              <div className="text-2xl rotate-180">➙</div>
            </Link>
            <span>Booking Car</span>
          </div>
          <div>
            ₹{car.price}
            <span className="text-sm"> /hour</span>
          </div>
        </div>

        <div className="bg-white border-[2px] border-[#EFEFEF]  rounded-3xl p-[0.5rem] 1h-[calc(100dvh-10.75rem)] ">
          <CarouselThumbs car={car} />
          <CarInfo car={car} />
        </div>
      </div>
      {/* right container */}
      <div className="flex flex-col items-center w-full lg:w-1/2 lg:gap-3 gap-10">
        <div className="w-full z-0 rounded-3xl h-[calc(50vh-4rem)]  overflow-hidden">
          <LocationTile locationName={car.location} />
        </div>
        <div className="w-full bg-[#080D1B] text-white rounded-3xl p-[0.5rem] h-[calc(50vh-4rem)] ">
          <Bill price={car.price} />
        </div>
      </div>
    </div>
  );
}
