import type { Metadata } from "next";
import { Poppins, Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '700', '900'],
  variable: '--font-poppins', 
});

const inter = Inter ({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "Gig Hunter",
  description: "Find events close to you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
