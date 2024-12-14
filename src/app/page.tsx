'use client';

import Link from "next/link";
import Image from "next/image";
import { 
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';
import TestimonialCarousel from './components/TestimonialCarousel';

export default function Home() {
  
  const doctorAnimations = {
    imageVariants: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: 0.6,
          ease: "easeOut" 
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section with Video Background */}
      <div className="relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source src="/Prism-Dental.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Hero Content */}
        <main className="relative z-20 container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center min-h-screen">
          <div className="text-white space-y-8">
            <div className="bg-white/20 rounded-full px-4 py-2 inline-flex items-center space-x-2">
              <SparklesIcon className="h-6 w-6 text-yellow-300" />
              <span className="text-sm font-medium">Top-Rated Dental Practice</span>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight drop-shadow-lg">
              Transforming Smiles, 
              <br />
              Enhancing Lives
            </h1>
            
            <p className="text-xl max-w-xl text-white/90 drop-shadow-md">
              At Prism Dental, we combine advanced technology, compassionate care, 
              and personalized treatments to create beautiful, healthy smiles.
            </p>
            
            <div className="flex space-x-4">
              <Link 
                href="/book-appointment" 
                className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold 
                           hover:bg-gray-100 transition-colors 
                           flex items-center space-x-2 drop-shadow-md"
              >
                Book Your Consultation
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white text-white px-8 py-4 
                           rounded-full text-lg font-semibold 
                           hover:bg-white/20 transition-colors drop-shadow-md"
              >
                Our Services
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* Meet Our Doctor Section */}
      <section className="relative py-16 bg-gradient-to-br from-white via-primary/5 to-primary/10 dark:from-gray-900 dark:via-primary-900/10 dark:to-primary-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Meet Dr. Nila Parmar
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Compassionate Care, Advanced Dental Solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Doctor's Image */}
            <motion.div
              variants={doctorAnimations.imageVariants}
              initial="initial"
              animate="animate"
              className="relative group w-full"
            >
              <div className="
                absolute 
                -inset-2 
                bg-primary/10 
                rounded-3xl 
                blur-xl 
                group-hover:opacity-75 
                transition 
                duration-300 
                opacity-50
              "></div>
              <div className="
                relative 
                overflow-hidden 
                rounded-3xl 
                shadow-2xl 
                transform 
                transition-transform 
                duration-300 
                group-hover:scale-[1.03]
                w-full 
                max-w-md 
                aspect-[9/10]
                mx-auto
              ">
                <Image 
                  src="/Nila.PNG" 
                  alt="Dr. Nila Parmar" 
                  width={500} 
                  height={500} 
                  className="
                    w-full 
                    h-full 
                    object-cover 
                    object-center
                  "
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.4
              }}
              className="space-y-6 w-full"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h3 className="
                  text-2xl 
                  font-semibold 
                  text-gray-800 
                  dark:text-white 
                  mb-4 
                  flex 
                  items-center 
                  gap-3
                ">
                  Professional Credentials
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-primary" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976c.418-.491.672-1.102.723-1.745a3.066 3.066 0 012.812-2.812zm3.094 1.182a.75.75 0 01.523.217l1.068 1.068 1.677-1.678a.75.75 0 111.06 1.06L11.06 6.982l1.068 1.067a.75.75 0 010 1.061l-1.068 1.068 1.678 1.677a.75.75 0 11-1.06 1.06l-1.678-1.677-1.067 1.068a.75.75 0 01-1.061 0l-1.068-1.068-1.677 1.678a.75.75 0 11-1.06-1.06l1.677-1.678-1.068-1.067a.75.75 0 010-1.061l1.068-1.068-1.678-1.677a.75.75 0 111.06-1.06l1.678 1.677 1.067-1.068a.75.75 0 01.538-.217z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    Doctor of Dental Surgery (DDS)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    10+ Years of Clinical Experience
                  </li>
                  <li className="flex items-center gap-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    Advanced Cosmetic Dentistry Certification
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h3 className="
                  text-2xl 
                  font-bold 
                  mb-4
                ">
                  Patient Care Philosophy
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  &quot;My mission is to provide compassionate, personalized dental care that 
                  not only enhances your smile but also improves your overall health and confidence. 
                  I believe in building lasting relationships with my patients through trust, 
                  education, and cutting-edge dental technology.&quot;
                </p>
              </div>

              <Link 
                href="/about" 
                className="
                  inline-flex 
                  items-center 
                  gap-2 
                  px-6 
                  py-3 
                  bg-primary 
                  text-white 
                  rounded-full 
                  hover:bg-primary-600 
                  transition-colors 
                  shadow-lg 
                  hover:shadow-xl
                  group
                "
              >
                Learn More About Dr. Nila Parmar
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Our promises to you 
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Personalized, state-of-the-art dental care tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Preventive Dentistry",
                description: "Comprehensive check-ups, professional cleanings, and personalized oral health strategies.",
                services: [
                  "Dental Exams",
                  "Teeth Cleaning",
                  "X-Rays",
                  "Oral Cancer Screening"
                ],
                photo: "/preventive-dentistry.jpg"
              },
              {
                title: "Cosmetic Dentistry",
                description: "Transform your smile with advanced aesthetic treatments and smile design.",
                services: [
                  "Teeth Whitening",
                  "Veneers",
                  "Smile Makeovers",
                  "Invisalign"
                ],
                photo: "/cosmetic-dentistry.jpg"
              },
              {
                title: "Restorative Dentistry",
                description: "Advanced solutions to repair, rebuild, and restore your dental health.",
                services: [
                  "Dental Implants",
                  "Crowns & Bridges",
                  "Root Canal Therapy",
                  "Dentures"
                ],
                photo: "/restorative-dentistry.jpg"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.2 
                }}
                className="
                  bg-gray-50 
                  dark:bg-gray-800 
                  rounded-2xl 
                  shadow-lg 
                  overflow-hidden 
                  hover:shadow-xl 
                  transition-all 
                  group
                "
              >
                <div className="h-48 w-full overflow-hidden">
                  <Image 
                    src={service.photo} 
                    alt={`${service.title} service`}
                    width={500} 
                    height={500} 
                    className="
                      w-full 
                      h-full 
                      object-cover 
                      object-center 
                      transform 
                      transition-transform 
                      group-hover:scale-110
                    "
                  />
                </div>
                <div className="p-6">
                  <h3 className="
                    text-xl 
                    font-semibold 
                    text-gray-800 
                    dark:text-white 
                    mb-3
                  ">
                    {service.title}
                  </h3>
                  <p className="
                    text-gray-600 
                    dark:text-gray-300 
                    mb-4
                  ">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="
                      text-md 
                      font-medium 
                      text-gray-700 
                      dark:text-gray-200 
                      mb-2
                    ">
                      Key Services:
                    </h4>
                    <ul className="
                      space-y-2 
                      text-gray-600 
                      dark:text-gray-300
                    ">
                      {service.services.map((item) => (
                        <li 
                          key={item} 
                          className="
                            flex 
                            items-center 
                            gap-2
                          "
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-primary" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href="/services" 
                    className="
                      inline-block 
                      mt-4 
                      text-primary 
                      hover:underline 
                      transition-colors 
                      flex 
                      items-center 
                      gap-2
                    "
                  >
                    Explore Services
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    

      {/* Customer Reviews Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 bg-gray-50 py-16"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Patient Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from patients who&apos;ve experienced exceptional dental care.
            </p>
          </motion.div>
          
          <TestimonialCarousel />
        </div>
      </motion.section>
    </div>
  );
}
