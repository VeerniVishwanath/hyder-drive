"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between pl-5 pr-5 pt-2 pb-2 h-16">
      <Link href={"/"} className="">
        <Image src="/logo.png" height={100} width={200} quality={100} />
      </Link>
      <img
        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Prescription02&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BlondeGolden&clotheType=BlazerSweater&eyeType=Squint&eyebrowType=SadConcerned&mouthType=Default&skinColor=Light"
        width={50}
        height={50}
        alt="Logo"
      />
    </div>
  );
}
