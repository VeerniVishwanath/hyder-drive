import getCarsData from "@/lib/dataUtils";
import { NextResponse } from "next/server";

export async function GET() {
  const cars = await getCarsData();

  return NextResponse.json(cars);
}
