import { Check, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function MassageBodyworkPage() {
  const benefits = [
    {
      title: 'Muscle Relaxation',
      description: 'Release tension and reduce muscle spasms naturally.',
    },
    {
      title: 'Improved Circulation',
      description: 'Enhance blood flow to promote healing and recovery.',
    },
    {
      title: 'Pain Reduction',
      description: 'Alleviate discomfort from chronic conditions or injuries.',
    },
    {
      title: 'Stress Relief',
      description: 'Calm anxious pets and promote overall well-being.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Banner Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Healing Touch for Your Pet's Comfort
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Therapeutic massage and bodywork using specialized techniques to release tension, improve circulation, reduce pain, and enhance your pet's overall well-being.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Schedule Massage Session
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-gray-900 mb-6 text-center">The Power of Therapeutic Touch</h2>
            <p className="text-gray-600 text-lg mb-4">
              Veterinary massage therapy is much more than simple petting. Our trained therapists use specific techniques to address muscular issues, improve circulation, reduce pain, and enhance your pet's overall quality of life. Massage can be used alone or as part of a comprehensive rehabilitation program.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Most pets find massage extremely relaxing and enjoyable. Many become so comfortable during sessions that they fall asleep! Regular massage can also strengthen the bond between you and your pet and help you recognize changes in their physical condition.
            </p>
          </div>
        </div>
      </section>

      {/* Massage Techniques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Massage Techniques</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Swedish Massage',
                description: 'Gentle, relaxing strokes that improve circulation and promote overall relaxation.',
              },
              {
                name: 'Myofascial Release',
                description: 'Targeted pressure to release restrictions in the fascia and restore proper movement.',
              },
              {
                name: 'Trigger Point Therapy',
                description: 'Focused work on specific areas of muscle tension to relieve pain and restore function.',
              },
              {
                name: 'Sports Massage',
                description: 'Designed for athletic dogs to enhance performance, prevent injury, and speed recovery.',
              },
              {
                name: 'Lymphatic Drainage',
                description: 'Gentle techniques to promote lymph flow and reduce swelling.',
              },
              {
                name: 'Passive Range of Motion',
                description: 'Gentle movement of joints through their full range to maintain flexibility.',
              },
            ].map((technique, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-gray-900 mb-3">{technique.name}</h3>
                <p className="text-gray-600 text-lg">{technique.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Helped */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Conditions Helped by Massage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Arthritis',
              'Hip Dysplasia',
              'Muscle Strains & Sprains',
              'Post-Surgical Recovery',
              'Chronic Pain',
              'Anxiety & Stress',
              'Reduced Mobility',
              'Senior Pet Stiffness',
              'Athletic Performance',
            ].map((condition, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full flex-shrink-0" />
                <span className="text-gray-700">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Give Your Pet the Gift of Healing Touch</h2>
          <p className="text-white/95 text-lg mb-8">
            Book a massage session and help your pet feel more comfortable, relaxed, and mobile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Appointment
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
