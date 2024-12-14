import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
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
      <body className="font-sans bg-white text-gray-900 antialiased">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Logo Section */}
              <Link 
                href="/" 
                className="flex items-center space-x-3 group"
              >
                <span className="text-2xl font-bold text-primary">
                  Prism Dental
                </span>
              </Link>
              <nav className="flex items-center space-x-6">
                <Link 
                  href="/services" 
                  className="flex items-center space-x-2 text-neutral-700 hover:text-primary transition-colors group"
                >
                  <StarIcon className="h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors" />
                  <span>Services</span>
                </Link>
                <Link 
                  href="/about" 
                  className="flex items-center space-x-2 text-neutral-700 hover:text-primary transition-colors group"
                >
                  <InformationCircleIcon className="h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors" />
                  <span>About</span>
                </Link>
                <Link 
                  href="/contact" 
                  className="flex items-center space-x-2 text-neutral-700 hover:text-primary transition-colors group"
                >
                  <PhoneIcon className="h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors" />
                  <span>Contact</span>
                </Link>
                <Link 
                  href="/book-appointment" 
                  className="btn btn-primary flex items-center space-x-2 ml-4 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors"
                >
                  <CalendarIcon className="h-5 w-5" />
                  <span>Book Appointment</span>
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="pt-20">
          {children}
        </main>

        <footer className="bg-primary text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Rhythm Dental Section */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <Image 
                    src="/rhythm-dental-logo.png" 
                    alt="Rhythm Dental Logo" 
                    width={64} 
                    height={64} 
                    className="rounded-full shadow-lg"
                  />
                  <h3 className="text-2xl font-bold">Rhythm Dental</h3>
                </div>
                <p className="text-white/80 mb-6">
                  Dr. Nila Parmar & Associates providing compassionate dental care 
                  in Oakville, Ontario.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <MapPinIcon className="h-6 w-6 text-white/70" />
                    <span>104-1927 Ironoak Way, Oakville, ON, L6H 3V7</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <PhoneArrowUpRightIcon className="h-6 w-6 text-white/70" />
                    <span>T: 905-845-8478, F: 289-856-8500</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <EnvelopeIcon className="h-6 w-6 text-white/70" />
                    <span>smile@rhythmdental.com</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <StarIcon className="h-6 w-6 text-white/70" />
                    <span>drnilaparmardentistry.com</span>
                  </li>
                </ul>
              </div>

              {/* Prism Dental Section */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <Image 
                    src="/prism-dental-logo.png" 
                    alt="Prism Dental Logo" 
                    width={64} 
                    height={64} 
                    className="rounded-full shadow-lg"
                  />
                  <h3 className="text-2xl font-bold">Prism Dental</h3>
                </div>
                <p className="text-white/80 mb-6">
                  Comprehensive dental services in Brampton, Ontario, 
                  delivering exceptional patient care.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <MapPinIcon className="h-6 w-6 text-white/70" />
                    <span>Unit - 41, 80 Maritime Ontario Blvd. Brampton, ON, L6S 0E7</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <PhoneArrowUpRightIcon className="h-6 w-6 text-white/70" />
                    <span>T: 647-336-8478 (647-DENTIST), F: 905-458-7476</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <EnvelopeIcon className="h-6 w-6 text-white/70" />
                    <span>info@prismdental.ca</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <StarIcon className="h-6 w-6 text-white/70" />
                    <span>prismdental.ca</span>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold mb-6 border-b border-white/20 pb-3">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/services" 
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                    >
                      <StarIcon className="h-5 w-5 text-white/50" />
                      <span>Our Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/about" 
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                    >
                      <InformationCircleIcon className="h-5 w-5 text-white/50" />
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/book-appointment" 
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                    >
                      <CalendarIcon className="h-5 w-5 text-white/50" />
                      <span>Book Appointment</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-6 border-t border-white/20 text-center">
              <p className="text-white/70">
                {new Date().getFullYear()} Rhythm Dental & Prism Dental. All Rights Reserved.
                <br />
                <span className="text-sm">Crafted with care for your perfect smile</span>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
