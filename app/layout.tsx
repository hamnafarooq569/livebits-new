import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import SiteFooter from "./components/SiteFooter";
import { inter } from "./fonts";
import ContactCtaSection from "./components/CtaSection";
import TopAnnouncementBar from "./components/TopAnnouncementBar";

export const metadata: Metadata = {
  title: "Livebits.pk - Your Digital Partner",
  description: "Empowering your business with cutting-edge digital solutions.",
    icons: {
    icon: "/fav-icon.svg",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        {/* Navbar */}
        <TopAnnouncementBar/>
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>

        <ContactCtaSection/>
        <SiteFooter />
      </body>
    </html>
  );
}
