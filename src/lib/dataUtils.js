import { promises as fs } from "node:fs";

export default async function getCarsData() {
  const fileContent = await fs.readFile(
    `${process.cwd()}/data/cars.json`,
    "utf-8"
  );

  return JSON.parse(fileContent);
}
