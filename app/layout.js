import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Notice from "./components/Notice";
import { UserProvider } from "./context/UserProvider";

export const metadata = {
  title: "M2 HQ",
  description: "PC repair and build",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <UserProvider>
            <NavBar />
              <Notice />
              {children}
            <Footer />
          </UserProvider>
      </body>
    </html>
  );
}
