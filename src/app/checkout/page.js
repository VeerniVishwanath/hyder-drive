import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[60dvh] w-full text-center">
      <h1 className="font-bold text-6xl pb-5">
        Thank you for <br /> your order
      </h1>
      <p className="text-gray-600">The operator will call you in a few minutes</p>
      <Link href={"/"}>
        <button type="button" className="w-56 h-16 mt-10 bg-blue-400 rounded-md text-xl">
          Home
        </button>
      </Link>
    </div>
  );
}
