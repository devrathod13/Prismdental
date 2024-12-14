'use client';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon 
} from '@heroicons/react/24/solid';

// Contact Form Schema
const ContactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\d{10}$/, { message: "Phone number must be 10 digits" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormInputs = z.infer<typeof ContactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactSchema)
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsLoading(true);
    setServerError(null);

    try {
      const response = await fetch('/contact/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        reset(); // Clear form
      } else {
        // Handle server-side validation errors
        if (result.errors) {
          result.errors.forEach((error: { path: string, message: string }) => {
            // You might want to set these errors in the form
            console.error(`Validation Error: ${error.path} - ${error.message}`);
          });
        }
        setServerError(result.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Submission error', error);
      setServerError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Submission Confirmation Component
  const SubmissionConfirmation = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md mx-auto p-10 rounded-2xl shadow-2xl text-center transform transition-all duration-300 hover:scale-105">
        <div className="bg-[#198e88]/10 w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 text-[#198e88] animate-bounce" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-[#198e88] mb-4 animate-pulse">
          Message Sent Successfully!
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for reaching out to Nila Dental Care. 
          Our team will review your message and respond shortly.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)} 
          className="bg-[#198e88] text-white px-8 py-3 rounded-full 
                     hover:bg-opacity-90 transition-all duration-300 
                     transform hover:scale-110 shadow-md"
        >
          Send Another Message
        </button>
      </div>
    </div>
  );

  // Render submission confirmation if submitted
  if (isSubmitted) return <SubmissionConfirmation />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="bg-white p-10 rounded-2xl shadow-2xl border-t-4 border-[#198e88] transform transition-all duration-300 hover:scale-105">
            <h2 className="text-4xl font-extrabold text-[#198e88] mb-8 border-b-2 border-gray-100 pb-4">
              Contact Details
            </h2>
            
            {/* Contact Methods */}
            <div className="space-y-8">
              {[
                {
                  icon: <PhoneIcon className="w-8 h-8 text-[#198e88]" />,
                  title: "Phone",
                  value: "(555) 123-4567",
                  link: "tel:+15551234567"
                },
                {
                  icon: <EnvelopeIcon className="w-8 h-8 text-[#198e88]" />,
                  title: "Email",
                  value: "info@niladental.com",
                  link: "mailto:info@niladental.com"
                },
                {
                  icon: <MapPinIcon className="w-8 h-8 text-[#198e88]" />,
                  title: "Address",
                  value: "123 Dental Street, Wellness City",
                  link: undefined
                }
              ].map((contact, index) => (
                <div key={index} className="flex items-center group">
                  <div className="bg-[#198e88]/10 p-4 rounded-full mr-6 group-hover:bg-[#198e88]/20 transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{contact.title}</h3>
                    {contact.link ? (
                      <a 
                        href={contact.link} 
                        className="text-gray-600 text-xl hover:text-[#198e88] transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-xl">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-12 bg-[#198e88]/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#198e88] mb-4 border-b border-[#198e88]/20 pb-2">
                Business Hours
              </h3>
              <div className="text-gray-700 space-y-2">
                {[
                  { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                  { days: "Saturday", hours: "9:00 AM - 2:00 PM" },
                  { days: "Sunday", hours: "Closed", className: "text-red-600" }
                ].map((schedule, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between ${schedule.className || ''}`}
                  >
                    <span>{schedule.days}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-2xl border-t-4 border-[#198e88] transform transition-all duration-300 hover:scale-105">
            <h2 className="text-4xl font-extrabold text-[#198e88] mb-8 border-b-2 border-gray-100 pb-4">
              Send Us a Message
            </h2>

            {/* Server Error Display */}
            {serverError && (
              <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6 animate-pulse">
                <p>{serverError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Full Name
                </label>
                <input 
                  {...register('name')}
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-[#198e88] 
                             focus:border-transparent transition duration-300"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 animate-pulse">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email and Phone Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input 
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-[#198e88] 
                               focus:border-transparent transition duration-300"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 animate-pulse">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                    Phone Number
                  </label>
                  <input 
                    {...register('phone')}
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-[#198e88] 
                               focus:border-transparent transition duration-300"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 animate-pulse">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                  Subject
                </label>
                <input 
                  {...register('subject')}
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-[#198e88] 
                             focus:border-transparent transition duration-300"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1 animate-pulse">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Your Message
                </label>
                <textarea 
                  {...register('message')}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-[#198e88] 
                             focus:border-transparent transition duration-300"
                  rows={5}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 animate-pulse">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`
                    w-full bg-[#198e88] text-white py-3.5 rounded-full 
                    transition duration-300 ease-in-out shadow-lg
                    ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'}
                  `}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
