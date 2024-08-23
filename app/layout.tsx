import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import RecoilContextProvider from "./recoilContextProvider";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import SmoothScrolling from "./components/Smoothscroll"; 
import ThemeProvider from "@/utils/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll`}>
        <RecoilContextProvider>
          <ThemeProvider
      //@ts-ignore
               attribute="class"
               defaultTheme="system"
               enableSystem
          > <ThemeSwitcher/>
          <SmoothScrolling> 
        <div id="NAV bar">
   <Navbar/>
    </div>
        {children} 
        <Footer/>
          </SmoothScrolling>
          </ThemeProvider>
        </RecoilContextProvider>
        </body>
    </html>
  );
}
