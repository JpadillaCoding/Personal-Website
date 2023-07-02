import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";


export const metadata = {
  title: "Jose Padilla Website",
  description:
    "Personal website of Jose Padilla for professional networking as a software engineer/ full stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
