import React, { useEffect, useState } from "react";
import { Popover } from "../ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, differenceInHours, format } from "date-fns";
import { Input } from "../ui/input";

export default function DateAndTime({ totalTime }) {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 5),
  });
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("12:00");

  useEffect(() => {
    if (date?.from && date?.to) {
      const fromDate = new Date(
        `${format(date.from, "yyyy-MM-dd")}T${startTime}`
      );
      const toDate = new Date(`${format(date.to, "yyyy-MM-dd")}T${endTime}`);
      totalTime(differenceInHours(toDate, fromDate));
    } else {
      totalTime(0);
    }
  }, [date, startTime, endTime, totalTime]);

  return (
    <div>
      <div>
        <Popover>
          <PopoverTrigger>
            <Button
              type="button"
              className="flex gap-2 border-[1px] bg-blue-600  text-white hover:bg-blue-700 h-20 sm:h-auto "
            >
              {date?.from ? (
                date.to ? (
                  <div className="flex flex-col sm:flex-row">
                    <span>
                      {format(date.from, "PPP")}
                    </span>
                      {" - "}
                    <span>{format(date.to, "PPP")}</span>
                  </div>
                ) : (
                  <div>{format(date.from, "PPP")}</div>
                )
              ) : (
                <span>Pick a Date</span>
              )}
              <CalendarIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
              className="bg-slate-600 rounded-t-md"
              mode="range"
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              required
            />
            <div className="flex">
              <Input
                type="time"
                className="bg-slate-600 text-center rounded-none rounded-bl-md"
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value);
                }}
              />
              <Input
                type="time"
                className="bg-slate-600 text-center rounded-none rounded-br-md"
                value={endTime}
                onChange={(e) => {
                  setEndTime(e.target.value);
                }}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
