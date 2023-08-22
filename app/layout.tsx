import "./globals.css";
import Navigation from "./components/navigation/Navigation";


export const metadata = {
  title: "Jose Padilla Portfolio",
  description:
    "Personal website of Jose Padilla for professional networking as a Software Engineer/ Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page-wrapper">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
