import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Garage Groenendijk – Occasions, APK & Onderhoud in Appingedam",
    template: "%s | Groenendijk Garage & Occasions",
  },
  description:
    "Groenendijk Garage & Occasions in Appingedam: al 70 jaar jouw vertrouwde adres voor occasions, elektrische auto's, APK, onderhoud en reparatie. Persoonlijk advies, eerlijke prijs.",
  keywords: [
    "occasion Appingedam",
    "APK Appingedam",
    "elektrische occasion Groningen",
    "garage Appingedam",
    "occasions Groningen",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${montserrat.variable} ${openSans.variable} antialiased bg-white text-[#333333]`}>
        {children}
      </body>
    </html>
  );
}
