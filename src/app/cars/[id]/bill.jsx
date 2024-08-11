import InfoItem from "@/components/InfoItem/infoItem";
import DateAndTime from "@/components/dateAndTime/dateAndTime";
import Link from "next/link";
import React, { useState } from "react";

export default function Bill({ price }) {
  const [totalTime, setTotalTime] = useState();
  const handleTotalTime = (time) => {
    setTotalTime(time);
  };

  // Gst = 18% and Insurance = 6.8%
  const GST = 0.18;
  const INSURANCE = 0.068;

  const totalPrice = price * totalTime * (1 + GST + INSURANCE);
  return (
    <div className="flex flex-col h-full justify-center items-center dark ">
      <DateAndTime totalTime={handleTotalTime} />
      <InfoItem entryName="Total Time" entryValue={`${totalTime} hrs`} />
      <InfoItem
        entryName="Price"
        entryValue={`₹${(price * totalTime).toLocaleString("en-IN")}`}
      />
      <InfoItem entryName="Taxes" entryValue="18%" />
      <InfoItem entryName="Insurance" entryValue="6.8%" />
      <div className="flex justify-between w-[90%] mt-10 ">
        <div className="flex gap-3 text-xl font-medium">
          <span>Total</span>
          {`₹${totalPrice.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
          })}`}
        </div>
        <Link href={"/checkout"}>
          <button
            className="bg-blue-600 font-medium p-5 pt-1 pb-1 rounded-md hover:bg-blue-700"
            type="button"
          >
            Rent
          </button>
        </Link>
      </div>
    </div>
  );
}
