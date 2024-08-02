"use server";
import Cards from "@/components/cards/cards";
import getCarsData from "@/lib/dataUtils";

export default async function Home() {
  const cars = await getCarsData();
  return (
    <main>
      <Cards cars={cars} />
    </main>
  );
}
