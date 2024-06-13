import { Inter } from "next/font/google";
import "./globals.css";
import "./components/moreCss/main.css";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/header/header";
<link rel="icon" href="/images/favicon.ico" sizes="any" />

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Młody Albert",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Header/>
        {children}
        </body>
    </html>
  );
}
