"use client";
import React, { useState } from "react";
import CarouselImage from "../carouselImage/carouselImage";

export default function CarouselThumbs({ car }) {
  const [api, setApi] = useState();
  const [thumbsApi, setThumbsApi] = useState();

  const onImageClick = (idx) => {
    api.scrollTo(idx);
  };

  return (
    <div className="flex flex-col items-center ">
      <CarouselImage
        car={car}
        imageWidth={500}
        setApi={setApi}
        loop={true}
        buttons="hidden"
        containerStyles="pb-5"
        imageStyles="rounded-lg"
      />
      <CarouselImage
        car={car}
        imageWidth={150}
        basis="basis-1/3"
        setApi={setThumbsApi}
        buttonMargin="2rem"
        onImageClick={onImageClick}
        imageStyles="rounded-lg"
      />
    </div>
  );
}
