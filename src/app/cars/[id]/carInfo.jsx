import React from "react";
import InfoItem from "@/components/InfoItem/infoItem";

export default function CarInfo({ car }) {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="w-[95%] flex justify-between">
        <div className="text-lg lg:text-4xl md:text-2xl sm:text-xl font-medium">{`${car.make} ${car.model}`}</div>
        <div className="text-2xl md:text-xl sm:text-sm">{`⭐ ${car.rating}`}</div>
      </div>
      <InfoItem entryName="Transmission" entryValue={car.transmission} />
      <InfoItem entryName="Fuel" entryValue={car.fuel} />
      <InfoItem entryName="Seats" entryValue={car.seats} />
      <InfoItem entryName="Body Type" entryValue={car.carBody} />
      <InfoItem
        entryName="Location"
        entryValue={car.location}
        display="hidden"
      />
    </div>
  );
}
