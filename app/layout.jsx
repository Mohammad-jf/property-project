import Navbar from "@/components/layout/Navbar";
import "../styles/globals.css";
import Footer from "@/components/layout/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "Property Listing",
  keywords: "rental, property, realstate",
  description: "buy or sell properties",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </NextAuthProvider>
  );
}
