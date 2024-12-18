import "./globals.css";
import { ThemeProvider } from "./context/ThemeProvider";

export const metadata = {
  title: "M2 HQ",
  description: "PC repair and build",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
