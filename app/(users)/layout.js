import Navigation from "../../components/Navigation";
import "./layout.js";

import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
