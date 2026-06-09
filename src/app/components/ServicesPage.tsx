import { useState } from 'react';
import { Check, Heart, Stethoscope, Activity, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import physicalTherapyImg from '../../imports/HP-1.jpg?url';
import integrativeHolisticImg from '../../imports/HP-2.jpg?url';
import cancerTreatmentImg from '../../imports/HP-3.jpg?url';

const serviceCategories = [
  {
    id: 'therapeutic',
    title: 'Therapeutic Modalities',
    description: 'Advanced technology-based treatments for pain relief and healing',
    icon: Sparkles,
    image: physicalTherapyImg,
    services: [
      {
        name: 'Laser Therapy (Class IV)',
        details: 'Non-invasive treatment that uses light to stimulate cell regeneration and increase blood circulation, reducing pain and inflammation.',
        link: '/services/laser-therapy',
      },
      {
        name: 'Shockwave Therapy',
        details: 'Advanced acoustic wave therapy that promotes healing, reduces pain, and stimulates tissue regeneration.',
        link: '/services/shockwave-therapy',
      },
      {
        name: 'Acupuncture',
        details: 'Traditional Chinese medicine technique using fine needles to stimulate healing, reduce pain, and restore balance.',
        link: '/services/acupuncture',
      },
      {
        name: 'Therapeutic Ultrasound',
        details: 'Deep tissue treatment that uses sound waves to promote healing, reduce inflammation, and improve tissue elasticity.',
        link: null,
      },
      {
        name: 'Electrical Stimulation (NMES & TENS)',
        details: 'Targeted muscle stimulation to reduce pain, prevent muscle atrophy, and promote muscle re-education.',
        link: null,
      },
      {
        name: 'Pulsed Electromagnetic Field Therapy (PEMF)',
        details: 'Advanced therapy that enhances cellular function, reduces pain, and accelerates healing at the cellular level.',
        link: null,
      },
      {
        name: 'Cryotherapy & Heat Therapy',
        details: 'Controlled temperature treatments to reduce swelling, relieve pain, and improve circulation.',
        link: null,
      },
    ],
  },
  {
    id: 'manual',
    title: 'Manual Therapy',
    description: 'Hands-on techniques to improve mobility and reduce discomfort',
    icon: Heart,
    image: physicalTherapyImg,
    services: [
      {
        name: 'Joint Mobilization',
        details: 'Gentle movements to restore normal joint motion, reduce stiffness, and improve overall mobility.',
        link: null,
      },
      {
        name: 'Soft Tissue Mobilization',
        details: 'Manual techniques to release adhesions, improve flexibility, and reduce pain in soft tissues.',
        link: null,
      },
      {
        name: 'Myofascial Release',
        details: 'Hands-on therapy targeting the fascial system to relieve restrictions and restore movement.',
        link: null,
      },
      {
        name: 'Stretching & Range of Motion',
        details: 'Customized stretching programs to maintain and improve flexibility and joint function.',
        link: null,
      },
    ],
  },
  {
    id: 'exercise',
    title: 'Exercise & Rehabilitation',
    description: 'Customized exercise programs for strength and mobility',
    icon: Activity,
    image: physicalTherapyImg,
    services: [
      {
        name: 'Hydrotherapy & Underwater Treadmill',
        details: 'Low-impact aquatic exercise that builds strength, improves cardiovascular health, and reduces joint stress.',
        link: '/services/underwater-treadmill',
      },
      {
        name: 'Therapeutic Exercise Programs',
        details: 'Individualized exercise plans designed to address specific conditions and recovery goals.',
        link: '/services/therapeutic-exercise',
      },
      {
        name: 'Balance & Proprioception Training',
        details: 'Specialized exercises to improve coordination, stability, and body awareness.',
        link: null,
      },
      {
        name: 'Strength & Conditioning',
        details: 'Progressive resistance training to build muscle mass and improve overall functional ability.',
        link: null,
      },
      {
        name: 'Gait Training & Analysis',
        details: 'Assessment and correction of walking patterns to improve mobility and prevent injury.',
        link: null,
      },
    ],
  },
  {
    id: 'wellness',
    title: 'Pain Management & Wellness',
    description: 'Comprehensive care for chronic conditions and overall health',
    icon: Stethoscope,
    image: integrativeHolisticImg,
    services: [
      {
        name: 'Arthritis Management',
        details: 'Multimodal approach to reduce pain, maintain mobility, and improve quality of life for arthritic pets.',
        link: null,
      },
      {
        name: 'Senior Dog Wellness Programs',
        details: 'Comprehensive care plans designed to keep aging pets active, comfortable, and healthy.',
        link: null,
      },
      {
        name: 'Weight Management',
        details: 'Customized programs combining exercise and nutritional guidance to achieve and maintain optimal weight.',
        link: null,
      },
      {
        name: 'Post-Surgical Rehabilitation',
        details: 'Evidence-based protocols to optimize recovery after orthopedic or soft tissue surgery.',
        link: null,
      },
      {
        name: 'Neurological Rehabilitation',
        details: 'Specialized therapy for pets with neurological conditions, focusing on function and independence.',
        link: null,
      },
    ],
  },
];

const benefits = [
  {
    title: 'Faster Recovery',
    description: 'Evidence-based treatments accelerate healing and reduce recovery time.',
  },
  {
    title: 'Pain Relief',
    description: 'Multi-modal pain management strategies to improve comfort and quality of life.',
  },
  {
    title: 'Improved Mobility',
    description: 'Restore function and increase range of motion for better quality of life.',
  },
  {
    title: 'Prevent Re-injury',
    description: 'Build strength and stability to reduce the risk of future injuries.',
  },
];

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div id="services-page" className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Premier, Holistic Care for Your Pet
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Comprehensive rehabilitation and holistic services combining advanced therapeutic modalities, manual therapy, exercise programs, and integrative medicine for optimal pet wellness.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-base sm:text-base w-full sm:w-auto"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#b48cbf] text-white rounded-full mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-gray-900 mb-2 text-base sm:text-lg">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="text-center">
            <h2 className="text-gray-900 mb-4">Our Service Categories</h2>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <div
                  key={category.id}
                  className="border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  {/* Category Header */}
                  <button
                    onClick={() => setActiveCategory(isActive ? null : category.id)}
                    className="w-full h-full"
                  >
                    <div className="flex flex-col items-center justify-center gap-4 p-6 sm:p-8 bg-white hover:bg-gray-50 transition-colors min-h-[300px]">
                      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-[#b7e1da] rounded-lg flex items-center justify-center mb-3">
                          <Icon className="w-6 h-6 text-gray-900" />
                        </div>
                        <h3 className="text-gray-900 text-2xl mb-2">{category.title}</h3>
                        <p className="text-gray-600 text-lg mb-4">{category.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <div
                          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                            isActive
                              ? 'border-[#b48cbf] bg-[#b48cbf] rotate-180'
                              : 'border-gray-300'
                          }`}
                        >
                          <svg
                            className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Panel for Expanded Services */}
        {activeCategory && (
          <div className="fixed top-0 right-0 h-full w-full md:w-1/3 bg-white shadow-2xl z-50 overflow-y-auto transform transition-transform duration-300">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-gray-900 text-2xl">
                  {serviceCategories.find(cat => cat.id === activeCategory)?.title}
                </h3>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close panel"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {serviceCategories.find(cat => cat.id === activeCategory)?.services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#b48cbf] rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 font-semibold mb-2">
                          {service.name}
                        </h4>
                        <p className="text-gray-600 text-lg mb-3">{service.details}</p>
                        {service.link && (
                          <Link
                            to={service.link}
                            className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors"
                          >
                            Learn More →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Overlay */}
        {activeCategory && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setActiveCategory(null)}
          />
        )}
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4 sm:mb-6">Ready to Start Your Pet's Recovery Journey?</h2>
          <p className="text-white/95 text-base sm:text-lg mb-6 sm:mb-8">
            Schedule a consultation today and let our expert team create a personalized rehabilitation plan for your furry friend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-base sm:text-base"
            >
              Book Appointment
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-base sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}