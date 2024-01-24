import { Inter } from "next/font/google";
import "./globals.css";
import PrimaryNavbar from "@/templates/PrimaryNavbar/PrimaryNavbar";
import SecondaryNavbar from "@/templates/SecondaryNavbar/SecondaryNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimaryNavbar />
        <SecondaryNavbar />
        {children}
      </body>
    </html>
  );
}
