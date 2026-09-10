import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import localFont from "next/font/local";
import MetaPixel from "./components/MetaPixel";

const ppEditorial = localFont({
  src: [
    { path: "./fonts/PPEditorialNew-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/PPEditorialNew-Ultralight.otf", weight: "300", style: "normal" },
    { path: "./fonts/PPEditorialNew-UltralightItalic.otf", weight: "300", style: "italic" },
  ],
  variable: "--font-editorial",
  display: "swap",
  preload: false,
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
  display: "swap",
  preload: false,
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
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager - Script do Head */}
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
      <body className={`${ppEditorial.variable} ${articulatCF.variable} antialiased`}>
        {/* Google Tag Manager (noscript) - Script do Body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVKK2BFD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
