import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const ppEditorial = localFont({
  src: [
    { path: "./fonts/PPEditorialNew-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/PPEditorialNew-Italic.otf", weight: "400", style: "italic" },
  ],
  variable: "--font-editorial",
});

const articulatCF = localFont({
  src: [
    { path: "./fonts/ArticulatCF-Normal.ttf", weight: "400", style: "normal" },
    { path: "./fonts/ArticulatCF-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/ArticulatCF-DemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/ArticulatCF-Bold.ttf", weight: "700", style: "normal" },
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
      <body className={`${ppEditorial.variable} ${articulatCF.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
