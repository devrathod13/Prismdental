import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Emily Rodriguez",
    role: "Lead Dentist",
    bio: "With over 15 years of experience, Dr. Rodriguez specializes in cosmetic and restorative dentistry.",
    image: "/dr-emily.jpg"
  },
  {
    name: "Dr. Michael Chen",
    role: "Orthodontic Specialist",
    bio: "Expert in advanced orthodontic treatments, focusing on personalized patient care.",
    image: "/dr-michael.jpg"
  },
  {
    name: "Sarah Thompson",
    role: "Dental Hygienist",
    bio: "Passionate about preventive dental care and patient education.",
    image: "/sarah.jpg"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">About Nila Dental Care</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Founded in 2005, Nila Dental Care has been a cornerstone of community dental health. 
                Our mission is to provide compassionate, high-quality dental care that transforms lives 
                through healthy, beautiful smiles.
              </p>
              <p className="text-gray-700">
                We believe in a patient-first approach, combining advanced technology with personalized 
                care to ensure the best possible dental experience for every individual who walks through our doors.
              </p>
            </div>
            <Image 
              src="/clinic-interior.jpg" 
              alt="Nila Dental Care Clinic" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl"
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-blue-700 mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white shadow-lg rounded-lg overflow-hidden text-center transition-transform transform hover:scale-105"
              >
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={400} 
                  height={400} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-800">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "American Dental Association Certified",
              "Advanced Dental Technology Accreditation",
              "Patient Care Excellence Award 2023"
            ].map((cert, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-md text-center"
              >
                <p className="text-gray-800 font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
