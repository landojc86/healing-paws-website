import { Mail, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const teamMembers = [
  {
    name: 'Dr. Sarah Martinez',
    title: 'Founder & Lead Rehabilitation Veterinarian',
    credentials: 'DVM, CCRP, CVA',
    bio: 'Dr. Martinez founded Healing Paws Center with over 15 years of experience in veterinary rehabilitation. She is certified in canine rehabilitation and veterinary acupuncture, with specialized training in post-surgical recovery and sports medicine.',
    email: 'sarah@healingpawscenter.com',
  },
  {
    name: 'Jennifer Thompson',
    title: 'Certified Canine Rehabilitation Practitioner',
    credentials: 'CCRP, CVT',
    bio: 'Jennifer brings 10 years of veterinary experience and specialized expertise in hydrotherapy and therapeutic exercise. She works closely with each pet to develop customized rehabilitation programs that achieve optimal results.',
    email: 'jennifer@healingpawscenter.com',
  },
  {
    name: 'Michael Chen',
    title: 'Physical Rehabilitation Therapist',
    credentials: 'CCRP, CCFT',
    bio: 'Michael specializes in manual therapy techniques and therapeutic modalities. His gentle approach and expertise in pain management help pets feel comfortable while achieving their rehabilitation goals.',
    email: 'michael@healingpawscenter.com',
  },
  {
    name: 'Amanda Rodriguez',
    title: 'Senior Rehabilitation Technician',
    credentials: 'CVT, CCRP',
    bio: 'Amanda has dedicated her career to helping senior pets maintain mobility and quality of life. She specializes in arthritis management and senior wellness programs, with a focus on non-invasive treatment approaches.',
    email: 'amanda@healingpawscenter.com',
  },
  {
    name: 'David Park',
    title: 'Hydrotherapy Specialist',
    credentials: 'CCRP, Hydrotherapy Certified',
    bio: 'David manages our state-of-the-art underwater treadmill and aquatic therapy programs. His expertise in hydrotherapy techniques has helped countless pets recover from orthopedic surgeries and neurological conditions.',
    email: 'david@healingpawscenter.com',
  },
  {
    name: 'Lisa Johnson',
    title: 'Client Care Coordinator',
    credentials: 'Practice Manager',
    bio: 'Lisa ensures every visit to Healing Paws Center is smooth and stress-free. She coordinates care plans, schedules appointments, and serves as the primary point of contact for client communication and support.',
    email: 'lisa@healingpawscenter.com',
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-gray-900 mb-6">Meet Our Team</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of certified rehabilitation professionals is committed to providing the highest quality care for your pet. Each member brings specialized expertise and a genuine passion for animal wellness.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Photo Placeholder */}
              <div className="bg-[#b7e1da] h-64 flex items-center justify-center">
                <ImageWithFallback 
                  src={`https://images.unsplash.com/photo-${1580489944761 + index}-${index}?w=400&h=300&fit=crop`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#b48cbf] mb-2">{member.title}</p>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Award className="w-4 h-4 mr-2" />
                  <span className="text-lg">{member.credentials}</span>
                </div>
                
                <p className="text-gray-600 text-lg mb-4">{member.bio}</p>
                
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 bg-[#b48cbf] rounded-lg p-8 text-center text-white">
          <h2 className="text-white mb-4">Join Our Team</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We're always looking for passionate, dedicated professionals to join our team. If you're committed to excellence in animal rehabilitation, we'd love to hear from you.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-white text-[#b48cbf] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Career Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}
