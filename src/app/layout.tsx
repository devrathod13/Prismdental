import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import { 
  InformationCircleIcon, 
  PhoneIcon, 
  CalendarIcon,
  StarIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneArrowUpRightIcon
} from '@heroicons/react/24/solid';
import Image from 'next/image';

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prismdental.ca'),
  title: "Rhythm Dental & Prism Dental - Dr. Nila Parmar & Associates",
  description: "Comprehensive dental care in Oakville and Brampton, Ontario. Providing compassionate, high-quality dental services.",
  keywords: ["dentist", "dental care", "Oakville", "Brampton", "Dr. Nila Parmar"],
  openGraph: {
    title: "Rhythm Dental & Prism Dental",
    description: "Expert dental care by Dr. Nila Parmar and Associates",
    images: [{ url: '/dental-og-image.jpg' }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans bg-white text-gray-900 antialiased sticky">
        <header className=" top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg sticky ">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center py-4 space-y-4 sm:space-y-0">
              {/* Logo */}
              <Link 
                href="/" 
                className="flex items-center space-x-3 group w-full sm:w-auto justify-center sm:justify-start"
              >
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary text-center sm:text-left">
                  Prism Dental
                </h4>
              </Link>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden w-full flex justify-end">
                <MobileMenu />
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6 w-full md:w-auto justify-center">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6">
                  {/* Services Link */}
                  <Link 
                    href="/services" 
                    className="flex items-center space-x-2 text-neutral-700 hover:text-primary transition-colors group w-full md:w-auto text-center md:text-left"
                  >
                    <StarIcon className="h-4 w-4 md:h-5 md:w-5 text-neutral-400 group-hover:text-primary transition-colors mx-auto md:mx-0" />
                    <span className="text-sm md:text-base">Services</span>
                  </Link>

                  {/* About Link */}
                  <Link 
                    href="/about" 
                    className="flex items-center space-x-2 text-neutral-700 hover:text-primary transition-colors group w-full md:w-auto text-center md:text-left"
                  >
                    <InformationCircleIcon className="h-4 w-4 md:h-5 md:w-5 text-neutral-400 group-hover:text-primary transition-colors mx-auto md:mx-0" />
                    <span className="text-sm md:text-base">About</span>
                  </Link>

                  {/* Contact Link */}
                  <Link 
                    href="/contact" 
                    className="flex items-center space-x-2 text-neutral-700 hover:text-primary transition-colors group w-full md:w-auto text-center md:text-left"
                  >
                    <PhoneIcon className="h-4 w-4 md:h-5 md:w-5 text-neutral-400 group-hover:text-primary transition-colors mx-auto md:mx-0" />
                    <span className="text-sm md:text-base">Contact</span>
                  </Link>

                  {/* Book Appointment Button */}
                  <Link 
                    href="/book-appointment" 
                    className="btn btn-primary flex items-center space-x-2 justify-center w-full md:w-auto 
                      bg-primary text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full 
                      hover:bg-primary-600 transition-colors text-sm md:text-base"
                  >
                    <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Book Appointment</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <main className="pt-0">
          {children}
        </main>

        <footer className="bg-primary text-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {/* Rhythm Dental Column */}
              <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
                  <Image 
                    src="/rhythm-dental-logo.png" 
                    alt="Rhythm Dental Logo" 
                    width={80} 
                    height={80} 
                    className="rounded-full shadow-lg w-16 h-16 sm:w-20 sm:h-20 object-cover"
                  />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center md:text-left">Rhythm Dental</h3>
                </div>
                <p className="text-white/80 mb-6 text-sm sm:text-base text-center md:text-left max-w-xs mx-auto md:mx-0">
                  Providing compassionate and high-quality dental care in Oakville.
                </p>
                <ul className="space-y-3 mb-6 text-sm sm:text-base text-center md:text-left">
                  <li className="flex items-center justify-center md:justify-start space-x-3">
                    <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white/70" />
                    <span>123 Dental Street, Oakville</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start space-x-3">
                    <PhoneArrowUpRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white/70" />
                    <span>(905) 555-1234</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start space-x-3">
                    <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white/70" />
                    <span>info@rhythmdental.com</span>
                  </li>
                </ul>
              </div>

              {/* Prism Dental Column */}
              <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
                  <Image 
                    src="/prism-dental-logo.png" 
                    alt="Prism Dental Logo" 
                    width={80} 
                    height={80} 
                    className="rounded-full shadow-lg w-16 h-16 sm:w-20 sm:h-20 object-cover"
                  />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center md:text-left">Prism Dental</h3>
                </div>
                <p className="text-white/80 mb-6 text-sm sm:text-base text-center md:text-left max-w-xs mx-auto md:mx-0">
                  Expert dental services in Brampton with a focus on patient care.
                </p>
                <ul className="space-y-3 mb-6 text-sm sm:text-base text-center md:text-left">
                  <li className="flex items-center justify-center md:justify-start space-x-3">
                    <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white/70" />
                    <span>456 Dental Avenue, Brampton</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start space-x-3">
                    <PhoneArrowUpRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white/70" />
                    <span>(905) 555-5678</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start space-x-3">
                    <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white/70" />
                    <span>info@prismdental.com</span>
                  </li>
                </ul>
              </div>

              {/* Quick Links Column */}
              <div className="text-center md:text-left">
                <h4 className="text-lg sm:text-xl font-bold mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm sm:text-base">
                  <li><Link href="/services" className="hover:text-white/80 transition-colors">Services</Link></li>
                  <li><Link href="/about" className="hover:text-white/80 transition-colors">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-white/80 transition-colors">Contact</Link></li>
                  <li><Link href="/book-appointment" className="hover:text-white/80 transition-colors">Book Appointment</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
