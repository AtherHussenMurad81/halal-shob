import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";
import Theme from "@/components/Theme";
import Header from "@/components/Header";

const geistSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Halal-Food-Delivery",
  description: "Its a Restaurants which selling halal food items",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-11/12 mx-auto">
        <nav>
          <div className="flex justify-between items-center ">
            <Logo />
            <Header />
            <Theme />
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
