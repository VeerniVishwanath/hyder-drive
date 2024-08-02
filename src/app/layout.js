import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "HyderDrive",
  description: "A premium car rental service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-[#F3F5F6]`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
