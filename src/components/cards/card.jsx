import Image from "next/image";
import React from "react";
import { Card as ShadcnCard, CardContent, CardFooter } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Card({ car }) {
  return (
    <ShadcnCard className="p-[2.5px]">
      <CardContent className="p-0">
        <Carousel opts={{ loop: true }} className="w-[400px]">
          <CarouselContent>
            {car.images.map((image, idx) => (
              <CarouselItem key={`${car.id}-${idx + 1}`}>
                <Image
                  src={image}
                  width={400}
                  height={200}
                  alt={`${car.make} ${car.model}`}
                  className="rounded-tl-lg rounded-tr-lg "
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-[3.25rem] bg-transparent text-gray-200 border-0 backdrop-brightness-75" />
          <CarouselNext className="mr-[3.25rem] bg-transparent text-gray-200 border-0 backdrop-brightness-75" />
        </Carousel>
      </CardContent>
      <CardFooter className="flex justify-between p-3">
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
