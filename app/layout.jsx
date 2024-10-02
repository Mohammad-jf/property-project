import Navbar from "@/components/layout/Navbar";
import "../styles/globals.css";
import Footer from "@/components/layout/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "@/context/GlobalContext";

export const metadata = {
  title: "Property Listing",
  keywords: "rental, property, realstate",
  description: "buy or sell properties",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <GlobalProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </NextAuthProvider>
  );
}
