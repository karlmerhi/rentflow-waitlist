// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rentflow - Waitlist',
  description: 'Manage your short-term rentals with ease. Waitlist is open!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <Script
          id="reddit-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(w,d){
                if(!w.rdt){
                  var p=w.rdt=function(){
                    p.sendEvent ? p.sendEvent.apply(p, arguments) : p.callQueue.push(arguments)
                  };
                  p.callQueue=[];
                  var t=d.createElement("script");
                  t.src="https://www.redditstatic.com/ads/pixel.js";
                  t.async=true;
                  var s=d.getElementsByTagName("script")[0];
                  s.parentNode.insertBefore(t,s)
                }
              }(window,document);
              rdt('init','a2_g6hys02n7r4r');
              rdt('track','PageVisit');
            `,
          }}
        />
      </body>
    </html>
  )
}
