import React from "react";
import cars from "@/../data/cars";
import Card from "./card";

export default function Cards() {
  return (
    <div className="flex flex-wrap p-10 justify-around gap-10 bg-[#F3F5F6]">
      {cars.map((car) => (
        <Card car={car} key={car.id} />
      ))}
    </div>
  );
}
