import React from "react";

export default function InfoItem({ entryName, entryValue, display = "" }) {
  return (
    <>
      <div className={"flex justify-between mt-2 mb-2   w-[95%] "}>
        <div className="">{entryName}</div>
        <div>{entryValue}</div>
      </div>
      <hr className={`border-[0.5px] border-[#EFEFEF] w-[95%] dark:border-gray-700 ${display}`} />
    </>
  );
}
