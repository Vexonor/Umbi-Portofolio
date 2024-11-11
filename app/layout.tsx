import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Umbi Dev",
  description: "This Is Umbi Dev Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/img/Logo-thumbnail.svg" />
      <body
        className={`${montserrat.className} bg-victoria antialiased`}
      >
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
