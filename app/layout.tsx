import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head';

// config
import config from "@/config/general";
// components
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script>
          {'!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent ? p.sendEvent.apply(p, arguments) : p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','a2_g6hys02n7r4r');rdt('track', 'PageVisit');'}
        </script>
      </Head>
      <body className={inter.className + " bg-gray"}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}