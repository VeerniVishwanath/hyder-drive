import React from "react";
import Card from "./card";

export default function Cards({ cars }) {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:p-10 justify-around gap-10 p-4 pl-2 pr-2">
      {cars.map((car) => (
        <Card car={car} key={car.id} />
      ))}
    </div>
  );
}
