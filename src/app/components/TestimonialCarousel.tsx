'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const REVIEWS = [
  {
    id: 1,
    name: "Emily Rodriguez",
    text: "\"Dr. Parmar transformed my smile with incredible skill and compassion. I feel more confident than ever!\"",
    profession: "Marketing Manager",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen", 
    text: "\"Professional, caring, and thorough. Prism Dental has made dental visits something I actually look forward to.\"",
    profession: "Software Engineer",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Thompson",
    text: "\"The most welcoming dental practice I've ever visited. Dr. Parmar and her team are simply outstanding.\"",
    profession: "Teacher", 
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    text: "\"After years of dental anxiety, I finally found a practice that makes me feel comfortable and cared for.\"",
    profession: "Graphic Designer",
    rating: 5
  },
  {
    id: 5,
    name: "Jessica Martinez",
    text: "\"The cosmetic procedure exceeded my expectations. I can't stop smiling!\"",
    profession: "Entrepreneur",
    rating: 5
  },
  {
    id: 6,
    name: "Robert Williams",
    text: "\"Exceptional preventive care. Dr. Parmar's attention to detail is remarkable.\"",
    profession: "Retired Educator",
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setLastInteraction] = useState<'auto' | 'manual'>('auto');
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % Math.ceil(REVIEWS.length / 3));
      setLastInteraction('auto');
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleManualNavigation = (index: number) => {
    setActiveIndex(index);
    setLastInteraction('manual');
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    if (Math.abs(diffX) > 40) {
      handleManualNavigation(
        (activeIndex + (diffX > 0 ? 1 : -1) + Math.ceil(REVIEWS.length / 3)) % Math.ceil(REVIEWS.length / 3)
      );
    }
  };

  const renderStars = (rating: number) => (
    <div className="flex justify-center mb-6">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i}
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-10 w-10 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const currentReviews = REVIEWS.slice(
    activeIndex * 3, 
    (activeIndex * 3) + 3
  );

  const displayReviews = currentReviews.length === 3 ? currentReviews : [...currentReviews, ...REVIEWS.slice(0, 3 - currentReviews.length)];

  return (
    <div 
      ref={carouselRef}
      className="relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="grid md:grid-cols-3 gap-8 relative">
        <AnimatePresence mode="popLayout">
          {displayReviews.map((review) => (
            <motion.div 
              key={review.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              {renderStars(review.rating)}
              <h3 className="text-xl font-bold text-gray-800 mb-1">{review.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{review.profession}</p>
              <p className="text-sm text-gray-700 italic">{review.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 space-x-3">
        {[...Array(Math.ceil(REVIEWS.length / 3))].map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualNavigation(index)}
            className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}
