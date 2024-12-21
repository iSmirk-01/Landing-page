import "./globals.css";
import { ThemeProvider } from "./context/ThemeProvider";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Notice from "./components/Notice";

export const metadata = {
  title: "M2 HQ",
  description: "PC repair and build",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <ThemeProvider>
          <Notice />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
