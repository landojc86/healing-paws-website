import { Header } from '../Header';
import { Footer } from '../Footer';
import { Link } from 'react-router-dom';
import { Heart, AlertCircle } from 'lucide-react';
import { PawIcon } from '../icons/PawIcon';

export function SeniorPatientsPage() {
  const integrationPlanItems = [
    'Comprehensive evaluation of mobility, pain, neurologic function, and underlying conditions',
    'Acupuncture to reduce pain, improve circulation, and support nerve function',
    'Laser therapy to decrease inflammation and promote healing',
    'Physical rehabilitation and therapeutic exercises to maintain strength and mobility',
    'Shockwave therapy for chronic arthritis and joint pain',
    'Targeted supplements (joint support, omega-3s, anti-inflammatories)',
    'Herbal and botanical medicine to support joints, organs, and immune health',
    'Nutrition guidance tailored to aging pets and specific health conditions',
    'Weight management to reduce stress on joints',
    'Lifestyle and home modifications to improve comfort and safety'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Senior Pets
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Specialized care for aging pets experiencing mobility challenges, stiffness, or slowing down, combining gentle therapies to maintain independence and comfort in their golden years.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Senior Pet Health Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Paragraphs */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At Healing Paws Center, we are <strong>uniquely positioned to help senior dogs and cats thrive</strong> because our care is fully integrative, personalized, and focused on long-term quality of life.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>We don't just manage symptoms—we help senior pets stay active, comfortable, and happy for as long as possible.</strong>
              </p>
            </div>

            {/* Right Column - Callout Box */}
            <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 border-l-4 border-[#b48cbf] rounded-lg p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#b48cbf] flex-shrink-0 sm:mt-1" />
                <div>
                  <h3 className="text-gray-900 mb-3">Medications Alone Are Not Enough</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Relying on medications alone for senior pets often only masks symptoms without addressing the underlying cause of pain, inflammation, or mobility issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Pets Unique Needs Section */}
      <section className="relative py-16 bg-gray-300">
        {/* TODO: Replace with background image */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed">
              Senior pets have unique needs that go beyond routine care, requiring a <strong>proactive, whole-body approach</strong> to keep them comfortable and thriving.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Plan Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm mb-8">
            <h3 className="text-gray-900 mb-6">Your Senior Pet's Integrative Plan MAY Include:</h3>
            <div className="space-y-4">
              {integrationPlanItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <PawIcon className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#b7e1da]/10 to-[#b48cbf]/10 rounded-lg p-6 sm:p-8">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              <strong>Every plan is customized to your pet's needs</strong>, with the goal of reducing pain, slowing disease progression, and helping your senior pet stay active and comfortable for as long as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of Integrative Care */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Benefits of Our Senior Pet Care Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Addresses root causes, not just symptoms',
              'Reduced reliance on medications',
              'Improved mobility and comfort',
              'Enhanced quality of life',
              'Slowed disease progression',
              'Personalized, whole-body approach',
              'Better pain management',
              'Maintained independence and dignity'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <PawIcon className="w-6 h-6 text-[#b7e1da] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">Age is Not a Diagnosis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8hORkgY_nng"
                title="Age is Not a Diagnosis"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/tuyIU-eVkSk"
                title="Senior Dog Success Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Senior Pet Heath Appintements BOOK NOW</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Our compassionate team understands the special needs of older pets and creates supportive, personalized care plans where they can thrive. We focus on maintaining what your pet can do while gradually improving strength, flexibility, and confidence.
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
              to="/common-ailments"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
