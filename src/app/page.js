"use server";
import Cards from "@/components/cards/cards";
import getCarsData from "@/lib/dataUtils";

export default async function Home() {
  const cars = await getCarsData();

  if (!cars || cars.length === 0) {
    return (
      <div className="w-full h-[50vh] font-semibold flex justify-center items-center text-gray-800">
        {car === undefined ? "Car Not Found" : "Loading..."}
      </div>
    );
  }
  return (
    <main className="bg-[#E8EAEF]">
      <Cards cars={cars} />
    </main>
  );
}
