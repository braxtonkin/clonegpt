'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./ui/Sidebar";
import { ChatProvider } from '@/app/context/ChatContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChatProvider>
        <div className="flex">
          <div className="bg-slate-950 text-gray-200 max-w-[250px] h-screen overflow-y-auto sm:min-w-64">
            <Sidebar />
          </div>
          <div className="bg-slate-300 flex-1 h-screen overflow-hidden relative text-black">
            {children}
          </div>
        </div>
        </ChatProvider>
      </body>
    </html>
  );
}
