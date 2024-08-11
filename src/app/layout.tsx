import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "StandUp",
  description: "Streamline and Optimize the daily standup process",
};
import { ClerkProvider } from '@clerk/nextjs'


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} dark:bg-black dark:text-white `}>
          {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
