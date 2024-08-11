import React from "react";
import Card from "./card";

export default function Cards({ cars }) {
  return (
    <div className="flex flex-wrap p-10 justify-around gap-10">
      {cars.map((car) => (
        <Card car={car} key={car.id} />
      ))}
    </div>
  );
}
