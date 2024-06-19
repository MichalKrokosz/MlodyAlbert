import { Inter } from "next/font/google";
import "./globals.css";
import "./components/moreCss/main.css";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Młody Albert",
    template: "%s | Młody Albert",
  },
  description: "Korepetycje Młody Albert to centrum edukacyjne, w którym oferujemy zajęcia indywidualne i grupowe, pomoc w nauce, przygotowanie do egzaminów kończących szkołę.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className} >
        <Header/>
        {children}
        </body>
    </html>
  );
}
