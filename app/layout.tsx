import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-9fd74f8b.vercel.app"),
  title: {
    default: "Divinoft Developers | Full Stack Web Development & Digital Acceleration",
    template: "%s | Divinoft Developers",
  },
  description:
    "Divinoft Developers delivers end-to-end website and product engineering across Python, Django, MERN, UI/UX, hosting, redesign, redevelopment, and SEO for ambitious brands across India.",
  keywords: [
    "Divinoft Developers",
    "web development company Salem",
    "Python Django development",
    "MERN stack agency India",
    "website design and hosting",
    "SEO services Salem Tamil Nadu",
    "full stack developers India",
  ],
  authors: [{ name: "Divinoft Developers" }],
  openGraph: {
    title:
      "Divinoft Developers | Full Stack Web Development & Digital Acceleration",
    description:
      "Strategic website and product builds covering Python, Django, MERN, UI/UX design to code, hosting, redesign, redevelopment, and SEO for brands across India.",
    url: "https://agentic-9fd74f8b.vercel.app",
    siteName: "Divinoft Developers",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Divinoft Developers - Digital Innovation Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Divinoft Developers | Future-ready Websites & Products for Indian Brands",
    description:
      "End-to-end website engineering: Python, Django, MERN, UI/UX, hosting, redesign, redevelopment, SEO.",
    creator: "@divinoft",
    images: ["https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80"],
  },
  alternates: {
    canonical: "https://agentic-9fd74f8b.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
