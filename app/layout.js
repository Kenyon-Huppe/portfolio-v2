import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Kenyon Huppe's Web Portfolio",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/images/pfp.jpg' type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
