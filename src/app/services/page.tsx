import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Dental Cleaning",
    description: "Professional cleaning to remove plaque and tartar, preventing cavities and gum disease.",
    image: "/cleaning.jpg",
    details: [
      "Thorough plaque and tartar removal",
      "Polishing and stain removal",
      "Fluoride treatment",
      "Oral hygiene consultation"
    ]
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening treatments to brighten your smile and boost confidence.",
    image: "/whitening.jpg",
    details: [
      "In-office laser whitening",
      "Take-home whitening kits",
      "Custom treatment plans",
      "Safe and effective procedures"
    ]
  },
  {
    title: "Dental Braces",
    description: "Orthodontic solutions to align teeth and improve dental structure.",
    image: "/braces.jpg",
    details: [
      "Traditional metal braces",
      "Ceramic clear braces",
      "Invisalign clear aligners",
      "Comprehensive treatment planning"
    ]
  },
  {
    title: "Root Canal",
    description: "Advanced treatment to save and restore damaged or infected teeth.",
    image: "/root-canal.jpg",
    details: [
      "Pain-free procedure",
      "Advanced imaging techniques",
      "Preservation of natural tooth",
      "Comprehensive aftercare"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 text-blue-700">Our Dental Services</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Image 
                src={service.image} 
                alt={service.title} 
                width={600} 
                height={400} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <Link 
                  href="/book-appointment" 
                  className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
