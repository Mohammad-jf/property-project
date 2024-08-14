import "../styles/globals.css";

export const metadata = {
  title: "Property Listing",
  keywords: "rental, property, realstate",
  description: "buy or sell properties",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
