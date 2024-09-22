"use client";
import React, { useState } from "react";
import CarouselImage from "@/components/carouselImage/carouselImage";
import Autoplay from "embla-carousel-autoplay";

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
        imageWidth={750}
        setApi={setApi}
        loop={true}
        buttons="hidden"
        containerStyles="pb-5"
        imageStyles="rounded-lg"
        carouselPlugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      />
      <CarouselImage
        car={car}
        imageWidth={250}
        basis="basis-1/4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2"
        setApi={setThumbsApi}
        buttonMargin="2rem"
        buttons="hidden"
        onImageClick={onImageClick}
        imageStyles="rounded-lg cursor-pointer"
      />
    </div>
  );
}
