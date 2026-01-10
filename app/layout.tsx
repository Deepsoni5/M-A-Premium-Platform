import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Atlas M&A Advisory | Premium Business Acquisitions & Exits",
  description: "Atlas M&A Advisory orchestrates high-stakes acquisitions and exits for businesses with ₹100Cr+ valuations. Precision, privacy, and premium advisory for the global elite.",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/2942/2942503.png",
    shortcut: "https://cdn-icons-png.flaticon.com/512/2942/2942503.png",
    apple: "https://cdn-icons-png.flaticon.com/512/2942/2942503.png",
  },
  openGraph: {
    title: "Atlas M&A Advisory | The Gold Standard in M&A",
    description: "Strategic M&A advisory for high-growth enterprises. We bridge the gap between vision and value.",
    url: "https://atlasmna.com",
    siteName: "Atlas M&A Advisory",
    images: [
      {
        url: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2",
        width: 1200,
        height: 630,
        alt: "Atlas M&A Advisory Corporate Headquarters",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas M&A Advisory | Premium Business Acquisitions",
    description: "Strategic M&A advisory for high-growth enterprises with ₹100Cr+ valuations.",
    images: ["https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2"],
  },
};

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
        {children}
      </body>
    </html>
  );
}
