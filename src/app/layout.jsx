import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";
import Theme from "@/components/Theme";
import Header from "@/components/Header";
import Login from "./login/page";
import Href from "@/Href";

const geistSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Halal Food",
    templete: "%s || Halal Food",
  },
  description: "Its a Restaurants which selling halal food items",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col border border-red-500">
        <nav className="border-pink-50 border  ">
          <div className=" justify-between items-center max-w flex">
            <Logo />
            <Header />
            <div className="flex items-center gap-1 md:gap-5 font-semibold text-2xl">
              <Theme />
              <Href />
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
