'use client';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';

// Appointment Form Schema
const AppointmentSchema = z.object({
  clinic: z.enum([
    'Prism Dental', 
    'Rhythm Dental'
  ], { 
    errorMap: () => ({ message: "Please select a clinic" }) 
  }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\d{10}$/, { message: "Phone number must be 10 digits" }),
  service: z.enum([
    'Dental Cleaning', 
    'Teeth Whitening', 
    'Dental Braces', 
    'Root Canal', 
    'Other'
  ], { 
    errorMap: () => ({ message: "Please select a service" }) 
  }),
  date: z.string().refine(val => {
    const selectedDate = new Date(val);
    const today = new Date();
    return selectedDate > today;
  }, { message: "Date must be in the future" }),
  time: z.string().min(1, { message: "Please select a time" }),
  message: z.string().optional()
});

type AppointmentFormInputs = z.infer<typeof AppointmentSchema>;

export default function BookAppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<AppointmentFormInputs>({
    resolver: zodResolver(AppointmentSchema),
    mode: 'onSubmit', // Validate on form submission
    reValidateMode: 'onSubmit'
  });

  const onSubmit: SubmitHandler<AppointmentFormInputs> = async (data) => {
    setIsLoading(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Submitted Data:', data);
      setIsSubmitted(true);
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error('Submission error', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Submission Confirmation Component
  const SubmissionConfirmation = () => (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4"
      >
        <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-2xl text-center border-t-4 border-[#198e88] transform transition-all hover:scale-105">
          <motion.div 
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            className="mb-6"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              className="w-20 h-20 mx-auto text-[#198e88]"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </motion.div>
          <h2 className="text-3xl font-bold text-[#198e88] mb-4">
            Appointment Booked!
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Thank you for scheduling with Nila Dental Care. 
            We will confirm your appointment via email shortly.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSubmitted(false)} 
            className="bg-[#198e88] text-white px-6 py-3 rounded-full hover:bg-[#145f6d] transition-all duration-300 ease-in-out shadow-lg"
          >
            Book Another Appointment
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  // Full Form Component
  const AppointmentForm = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border-t-4 border-[#198e88]"
      >
        <div className="p-8 bg-white">
          <h2 className="text-4xl font-extrabold text-center text-[#198e88] mb-8 tracking-tight">
            Book Your Dental Appointment
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="clinic" className="block text-gray-700 font-semibold mb-2">
                Select Dental Clinic
              </label>
              <select 
                {...register('clinic')}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198e88] focus:border-transparent transition duration-300 ease-in-out"
              >
                <option value="">Choose a Clinic</option>
                <option value="Prism Dental">Prism Dental</option>
                <option value="Rhythm Dental">Rhythm Dental</option>
              </select>
              {errors.clinic && (
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.clinic.message}
                </motion.p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input 
                  {...register('name')}
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198e88] focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input 
                  {...register('email')}
                  type="email" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198e88] focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input 
                  {...register('phone')}
                  type="tel" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198e88] focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="1234567890"
                />
                {errors.phone && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.phone.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                  Service
                </label>
                <select 
                  {...register('service')}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198e88] focus:border-transparent transition duration-300 ease-in-out"
                >
                  <option value="">Select a Service</option>
                  <option value="Dental Cleaning">Dental Cleaning</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                  <option value="Dental Braces">Dental Braces</option>
                  <option value="Root Canal">Root Canal</option>
                  <option value="Other">Other</option>
                </select>
                {errors.service && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.service.message}
                  </motion.p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                  Preferred Date
                </label>
                <input 
                  {...register('date')}
                  type="date" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198e88] focus:border-transparent transition duration-300 ease-in-out"
                />
                {errors.date && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.date.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
                  Preferred Time
                </label>
                <select 
                  {...register('time')}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198e88] focus:border-transparent transition duration-300 ease-in-out"
                >
                  <option value="">Select a Time</option>
                  <option value="morning">Morning (8 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                </select>
                {errors.time && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.time.message}
                  </motion.p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Additional Notes (Optional)
              </label>
              <textarea 
                {...register('message')}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198e88] focus:border-transparent transition duration-300 ease-in-out"
                placeholder="Any additional information or special requests"
                rows={4}
              />
            </div>

            <div className="text-center mt-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
                type="submit" 
                className={`
                  bg-[#198e88] text-white px-10 py-3.5 rounded-full text-lg 
                  transition duration-300 ease-in-out shadow-lg
                  ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'}
                `}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg 
                      className="animate-spin h-5 w-5 mr-3" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      ></circle>
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Booking...
                  </div>
                ) : (
                  'Book Appointment'
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );

  // Render either the form or the confirmation
  return isSubmitted ? <SubmissionConfirmation /> : <AppointmentForm />;
}