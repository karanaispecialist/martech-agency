import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MarTech Agency | Web Development, App Development & Digital Marketing",
  description: "Leading Tech & Marketing Agency offering Web Development, Mobile App Development, UI/UX Design, Digital Marketing, SEO, Google Ads, Meta Ads, Data Analytics & CRM Solutions.",
  keywords: ["web development", "app development", "digital marketing", "SEO", "Google Ads", "Meta Ads", "UI/UX design", "CRM", "data analytics"],
  authors: [{ name: "MarTech Agency" }],
  openGraph: {
    title: "MarTech Agency | Technology & Digital Marketing Solutions",
    description: "Transform your business with our cutting-edge technology and marketing solutions.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
