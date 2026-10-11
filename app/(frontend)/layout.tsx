import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";

import MetaPixel from "../components/MetaPixel";
import "../globals.css";

const ppEditorial = localFont({
  src: [
    { path: "../fonts/PPEditorialNew-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/PPEditorialNew-Ultralight.otf", weight: "300", style: "normal" },
    { path: "../fonts/PPEditorialNew-UltralightItalic.otf", weight: "300", style: "italic" },
  ],
  variable: "--font-editorial",
  display: "swap",
  preload: false,
});

const articulatCF = localFont({
  src: [
    { path: "../fonts/ArticulatCF-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/ArticulatCF-Normal.ttf", weight: "400", style: "normal" },
    { path: "../fonts/ArticulatCF-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/ArticulatCF-DemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/ArticulatCF-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/ArticulatCF-BoldOblique.ttf", weight: "700", style: "italic" },
    { path: "../fonts/ArticulatCF-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-articulat",
  display: "swap",
  preload: false,
});

const windy = localFont({
  src: [{ path: "../fonts/Windy_Village.otf", weight: "400", style: "normal" }],
  variable: "--font-windy",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Studio Emi",
  description: "Design, cursos e produtos criativos do Studio Emi",
};

export default function FrontendLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KVKK2BFD');
            `,
          }}
        />
      </head>
      <body
        className={`${ppEditorial.variable} ${articulatCF.variable} ${windy.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVKK2BFD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
