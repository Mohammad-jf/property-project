import Navbar from "@/components/layout/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "Property Listing",
  keywords: "rental, property, realstate",
  description: "buy or sell properties",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
