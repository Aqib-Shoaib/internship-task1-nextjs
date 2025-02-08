import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/layout/sidebar";
import Appbar from "./components/layout/Appbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Internship Task one",
  description: "Practicing nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.className}>
      <body className='grid grid-cols-[15rem,1fr]'>
        <Sidebar />
        <div>
          <Appbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
