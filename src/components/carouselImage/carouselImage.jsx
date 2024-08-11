import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function CarouselImage({
  car,
  imageWidth,
  imageStyles,
  basis = "",
  setApi = "",
  loop = false,
  buttons = "",
  buttonMargin = "",
  containerStyles = "",
  onImageClick = () => {},
  routeOnClick = () => {},
  carouselPlugins = [],
}) {
  return (
    <Carousel
      className={`${containerStyles} group`}
      opts={{ loop: loop }}
      setApi={setApi}
      plugins={carouselPlugins}
    >
      <CarouselContent onClick={routeOnClick}>
        {car.images.map((image, idx) => (
          <CarouselItem
            className={`flex justify-center ${basis}`}
            key={`${car.id}-${idx}`}
          >
            <Image
              src={image}
              width={imageWidth}
              height={1}
              alt={`${car.make} ${car.model}`}
              className={`${imageStyles}`}
              onClick={() => {
                onImageClick(idx);
              }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={`${buttons} bg-transparent hover:bg-gray-200 text-white backdrop-brightness-75 border-[1px] border-gray-400 hover:border-gray-300 invisible group-hover:visible`}
        style={{ marginLeft: `${buttonMargin}` }}
      />
      <CarouselNext
        className={`${buttons} bg-transparent hover:bg-gray-200 text-white backdrop-brightness-75 border-[1px] border-gray-400 hover:border-gray-300 invisible group-hover:visible`}
        style={{ marginRight: `${buttonMargin}` }}
      />
    </Carousel>
  );
}
