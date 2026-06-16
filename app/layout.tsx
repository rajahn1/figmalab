import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import localFont from "next/font/local";
import PixelTracker from "./components/PixelTracker";

const ppEditorial = localFont({
  src: [
    { path: "./fonts/PPEditorialNew-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/PPEditorialNew-Ultralight.otf", weight: "300", style: "normal" },
    { path: "./fonts/PPEditorialNew-UltralightItalic.otf", weight: "300", style: "italic" },
  ],
  variable: "--font-editorial",
});

const articulatCF = localFont({
  src: [
    { path: "./fonts/ArticulatCF-Normal.ttf", weight: "400", style: "normal" },
    { path: "./fonts/ArticulatCF-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/ArticulatCF-DemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/ArticulatCF-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/ArticulatCF-BoldOblique.ttf", weight: "700", style: "italic" },
    { path: "./fonts/ArticulatCF-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-articulat",
});

export const metadata: Metadata = {
  title: "Figma Lab",
  description: "Landing page do curso FigmaLab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '2102261693894083');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={`${ppEditorial.variable} ${articulatCF.variable} antialiased`}>
        <PixelTracker />
        {children}
      </body>
    </html>
  );
}
