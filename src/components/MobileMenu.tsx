"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  StarIcon, 
  InformationCircleIcon, 
  PhoneIcon, 
  CalendarIcon 
} from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <motion.button 
        onClick={toggleMenu}
        className="md:hidden text-primary focus:outline-none z-50"
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle mobile menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 transition-transform duration-200" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center p-4"
            onClick={closeMenu}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
              className="w-full max-w-md bg-white rounded-lg shadow-lg 
                          absolute top-1/2 left-1/1 transform -translate-x-1/1 -translate-y-1/2
                          p-6 space-y-3 max-h-[80vh] overflow-y-auto"
            >
              {/* Menu Title */}
              <h2 className="text-xl font-bold text-center text-primary mb-4">Menu</h2>

              {/* Mobile Navigation Links */}
              <motion.nav 
                initial="hidden"
                animate="visible"
                className="space-y-3"
              >
                {[ 'services', 'about', 'contact', 'book-appointment'].map((link, index) => (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300
                      } 
                    }}
                  >
                    <Link 
                      href={`/${link}`}
                      className={`block w-full text-center py-3 px-4 
                        ${link === 'book-appointment' 
                          ? 'bg-primary text-white rounded-lg hover:bg-primary-dark' 
                          : 'text-neutral-700 hover:bg-primary/10 hover:text-primary rounded-lg'}
                        transition-colors duration-200`}
                      onClick={closeMenu}
                    >
                      {link === 'services' && <StarIcon className="h-5 w-5 inline-block mr-2 text-neutral-400" />}
                      {link === 'about' && <InformationCircleIcon className="h-5 w-5 inline-block mr-2 text-neutral-400" />}
                      {link === 'contact' && <PhoneIcon className="h-5 w-5 inline-block mr-2 text-neutral-400" />}
                      {link === 'book-appointment' && <CalendarIcon className="h-5 w-5 inline-block mr-2" />}
                      {link.replace('-', ' ').split(' ').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}