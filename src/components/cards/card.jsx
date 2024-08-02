"use client";
import React from "react";
import { Card as ShadcnCard, CardContent, CardFooter } from "../ui/card";
import CarouselImage from "../carouselImage/carouselImage";
import { useRouter } from "next/navigation";

export default function Card({ car }) {
  const router = useRouter();
  const routeOnClick = () => {
    router.push(`/cars/${car.id}`);
  };

  return (
    <ShadcnCard className="p-[2.5px] group">
      <CardContent className="p-0">
        <CarouselImage
          car={car}
          loop={true}
          containerStyles="w-[400px]"
          imageWidth={400}
          imageStyles="rounded-tl-lg rounded-tr-lg"
          buttonMargin="3.5rem"
          routeOnClick={routeOnClick}
        />
      </CardContent>
      <CardFooter className="flex justify-between p-3" onClick={routeOnClick}>
        <div className="flex-col">
          <p className="font-medium text-xl text-gray-700">
            {car.make} {car.model}
          </p>
          <p className="font-normal text-xs text-gray-500">
            {car.transmission} | {car.fuel} | {car.seats} Seats
          </p>
        </div>
        <div className="font-medium text-xl text-gray-700">
          ₹{car.price}/<span className="text-base">hr</span>
        </div>
      </CardFooter>
    </ShadcnCard>
  );
}
