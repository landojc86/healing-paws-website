import { ChevronDown, X, Check, Heart, Stethoscope, Activity, Sparkles, HeartPulse } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import physicalTherapyImg from '../../imports/HP-1.jpg?url';
import integrativeHolisticImg from '../../imports/HP-2.jpg?url';
import cancerTreatmentImg from '../../imports/HP-3.jpg?url';

// Updated with 3-column layout and right-side panel - June 2026

const serviceCategories = [
  {
    id: 'physical-therapy',
    title: 'Physical Therapy, Pain & Mobility Support',
    description: 'Comprehensive exercise programs and hands-on therapy for recovery',
    icon: Activity,
    image: physicalTherapyImg,
    services: [
      {
        name: 'Acupuncture',
        details: 'Dog Acupuncture in Fort Lauderdale and Veterinary Acupuncture for Small Animals',
      },
      {
        name: 'Underwater Treadmill',
        details: 'Low-impact aquatic exercise that builds strength, improves cardiovascular health, and reduces joint stress.',
      },
      {
        name: 'Therapeutic Exercise',
        details: 'Individualized exercise plans designed to address specific conditions and recovery goals.',
      },
      {
        name: 'Laser Therapy',
        details: 'Non-invasive treatment that uses light to stimulate cell regeneration and increase blood circulation, reducing pain and inflammation.',
      },
      {
        name: 'Shockwave Therapy',
        details: 'Advanced therapy using acoustic waves to promote healing, reduce pain, and accelerate tissue repair.',
      },
      {
        name: 'Wheelchairs, Orthotics, & Prosthetics',
        details: 'Custom mobility devices and supportive equipment to enhance independence and quality of life.',
      },
    ],
  },
  {
    id: 'integrative-holistic',
    title: 'Integrative & Holistic Medicine',
    description: 'Natural and complementary therapies for whole-body wellness',
    icon: Sparkles,
    image: integrativeHolisticImg,
    services: [
      {
        name: 'Acupuncture',
        details: 'Dog Acupuncture in Fort Lauderdale and Veterinary Acupuncture for Small Animals',
      },
      {
        name: 'Herbal Therapy',
        details: 'Natural plant-based remedies to support healing, boost immunity, and maintain optimal health.',
      },
      {
        name: 'Homeopathy',
        details: 'Gentle, individualized treatments using highly diluted natural substances to stimulate the body\'s healing response.',
      },
      {
        name: 'Ozone Therapy',
        details: 'Innovative treatment using medical-grade ozone to reduce inflammation, enhance healing, and improve overall wellness.',
      },
      {
        name: 'Skin Allergies',
        details: 'Comprehensive treatment approaches for managing and treating skin allergies in pets.',
      },
      {
        name: 'Fecal Microbiome Restoration Therapy (FMBRT)',
        details: 'Advanced therapy to restore healthy gut bacteria and improve digestive health.',
      },
    ],
  },
  {
    id: 'cancer-treatment',
    title: 'Cancer Treatment',
    description: 'Specialized care for pets undergoing cancer treatment and recovery',
    icon: HeartPulse,
    image: cancerTreatmentImg,
    services: [
      {
        name: 'Acupuncture',
        details: 'Dog Acupuncture in Fort Lauderdale and Veterinary Acupuncture for Small Animals',
      },
      {
        name: 'Ozone Therapy & Mistletoe Therapies',
        details: 'Combined innovative treatments to support immune function and complement conventional cancer care.',
      },
      {
        name: 'Fecal Microbiome Restoration Therapy (FMBRT)',
        details: 'Advanced therapy to support gut health and overall well-being during cancer care.',
      },
      {
        name: 'Targeted Botanical and Herbal Therapies',
        details: 'Specialized plant-based remedies designed to support healing and complement cancer treatments.',
      },
    ],
  },
];

export function StandaloneServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Banner Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Premier, Holistic Care for Your Pet
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Holistic vet care for pet lovers seeking experts in pet acupuncture, rehabilitation/physical therapy, nutrition, herbal medicine, and holistic therapies.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12 sm:py-20 bg-gray-50">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-gray-900 mb-4">Our Service Categories</h2>
          </div>
        </div>

        {/* Mobile Version - Dropdown Below Each Card */}
        <div className="sm:hidden px-4">
          {serviceCategories.map((category) => (
            <div key={category.id} className="mb-4">
              <button
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                className={`relative w-full h-56 rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 ${
                  activeCategory === category.id ? 'ring-4 ring-[#b48cbf]' : ''
                }`}
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

                {/* Content */}
                <div className="absolute inset-0 px-4 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white mb-1 text-2xl font-semibold">{category.title}</h3>
                    <p className="text-white/90 text-base mb-3">{category.description}</p>
                    <ChevronDown className={`w-5 h-5 text-white mx-auto transition-transform ${
                      activeCategory === category.id ? 'rotate-180' : ''
                    }`} />
                  </div>
                </div>
              </button>

              {/* Mobile Dropdown */}
              <div
                className={`bg-white rounded-b-lg shadow-lg transition-all duration-300 ${
                  activeCategory === category.id ? 'max-h-[2000px] mt-2' : 'max-h-0 overflow-hidden'
                }`}
              >
                <div className="p-4">
                  <div className="space-y-3 mb-4">
                    {category.services.map((service, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <h4 className="text-gray-900 font-semibold mb-2 text-lg">{service.name}</h4>
                        <p className="text-gray-600 text-lg leading-relaxed mb-3">{service.details}</p>
                        {service.name === 'Underwater Treadmill' ? (
                          <Link to="/services/underwater-treadmill" className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors">Learn More →</Link>
                        ) : service.name === 'Acupuncture' ? (
                          <Link to="/services/acupuncture" className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors">Learn More →</Link>
                        ) : service.name === 'Therapeutic Exercise' ? (
                          <Link to="/services/therapeutic-exercise" className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors">Learn More →</Link>
                        ) : service.name === 'Laser Therapy' ? (
                          <Link to="/services/laser-therapy" className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors">Learn More →</Link>
                        ) : service.name === 'Shockwave Therapy' ? (
                          <Link to="/services/shockwave-therapy" className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors">Learn More →</Link>
                        ) : service.name === 'Wheelchairs, Orthotics, & Prosthetics' ? (
                          <Link to="/services/wheelchairs-mobility" className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors">Learn More →</Link>
                        ) : service.name === 'Homeopathy' ? (
                          <Link to="/services/homeopathy" className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors">Learn More →</Link>
                        ) : service.name === 'Herbal Therapy' ? (
                          <Link to="/services/herbal-therapy" className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors">Learn More →</Link>
                        ) : service.name === 'Ozone Therapy' ? (
                          <Link to="/services/ozone-therapy" className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors">Learn More →</Link>
                        ) : service.name === 'Fecal Microbiome Restoration Therapy (FMBRT)' ? (
                          <Link to="/services/fmbrt" className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors">Learn More →</Link>
                        ) : service.name === 'Ozone Therapy & Mistletoe Therapies' ? (
                          <Link to="/services/ozone-therapy" className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors">Learn More →</Link>
                        ) : service.name === 'Targeted Botanical and Herbal Therapies' ? (
                          <Link to="/services/herbal-therapy" className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors">Learn More →</Link>
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <Link
                    to={category.id === 'physical-therapy' ? '/services/therapeutic-exercise' : `/services/${category.id}`}
                    className="inline-flex items-center justify-center bg-[#b48cbf] text-white px-6 py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors w-full text-lg font-semibold shadow-md"
                  >
                    View Full {category.title} Page
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Version - 3 Columns with Overlay Panel */}
        <div className="relative hidden sm:block">
          {/* Category Blocks */}
          <div className="flex flex-row gap-0">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                className={`relative flex-1 h-80 lg:h-96 group cursor-pointer transition-all duration-300 ${
                  activeCategory === category.id ? 'ring-4 ring-[#b48cbf] ring-inset z-10' : ''
                }`}
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

                {/* Content */}
                <div className="absolute inset-0 px-6 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white mb-2 text-2xl lg:text-3xl">{category.title}</h3>
                    <p className="text-white/90 text-lg">{category.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Full-Width Overlay Panel */}
          <div
            className={`absolute top-0 left-0 right-0 bg-gray-50/98 backdrop-blur-sm transition-all duration-500 overflow-y-auto ${
              activeCategory ? 'min-h-[500px] max-h-[600px] opacity-100 z-20' : 'h-0 opacity-0 overflow-hidden'
            }`}
          >
            {activeCategory && (
              <div className="w-full py-8 px-8 lg:px-12">
                <div className="max-w-6xl mx-auto">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-gray-900 mb-2">
                        {serviceCategories.find(cat => cat.id === activeCategory)?.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {serviceCategories.find(cat => cat.id === activeCategory)?.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveCategory(null)}
                      className="ml-4 p-2 hover:bg-gray-200 rounded-full transition-colors flex-shrink-0"
                      aria-label="Close panel"
                    >
                      <X className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {serviceCategories.find(cat => cat.id === activeCategory)?.services.map((service, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h4 className="text-gray-900 font-semibold mb-2 text-lg">{service.name}</h4>
                        <p className="text-gray-600 text-base mb-2">{service.details}</p>
                        {service.name === 'Underwater Treadmill' ? (
                          <Link to="/services/underwater-treadmill" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors">Learn More →</Link>
                        ) : service.name === 'Acupuncture' ? (
                          <Link to="/services/acupuncture" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors">Learn More →</Link>
                        ) : service.name === 'Therapeutic Exercise' ? (
                          <Link to="/services/therapeutic-exercise" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors">Learn More →</Link>
                        ) : service.name === 'Laser Therapy' ? (
                          <Link to="/services/laser-therapy" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors">Learn More →</Link>
                        ) : service.name === 'Shockwave Therapy' ? (
                          <Link to="/services/shockwave-therapy" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors">Learn More →</Link>
                        ) : service.name === 'Wheelchairs, Orthotics, & Prosthetics' ? (
                          <Link to="/services/wheelchairs-mobility" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors">Learn More →</Link>
                        ) : service.name === 'Homeopathy' ? (
                          <Link to="/services/homeopathy" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors">Learn More →</Link>
                        ) : service.name === 'Herbal Therapy' ? (
                          <Link to="/services/herbal-therapy" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors">Learn More →</Link>
                        ) : service.name === 'Skin Allergies' ? (
                          <Link to="/common-ailments/skin-allergies" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors">Learn More →</Link>
                        ) : service.name === 'Ozone Therapy' ? (
                          <Link to="/services/ozone-therapy" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors">Learn More →</Link>
                        ) : service.name === 'Fecal Microbiome Restoration Therapy (FMBRT)' ? (
                          <Link to="/services/fmbrt" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors">Learn More →</Link>
                        ) : service.name === 'Ozone Therapy & Mistletoe Therapies' ? (
                          <Link to="/services/ozone-therapy" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors">Learn More →</Link>
                        ) : service.name === 'Targeted Botanical and Herbal Therapies' ? (
                          <Link to="/services/herbal-therapy" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors">Learn More →</Link>
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center pb-4">
                    <Link
                      to={activeCategory === 'physical-therapy' ? '/services/therapeutic-exercise' : `/services/${activeCategory}`}
                      className="inline-flex items-center justify-center bg-[#b48cbf] text-white px-6 py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors"
                    >
                      View Full Page
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Start Your Pet's Recovery Journey?</h2>
          <p className="text-white/95 text-lg mb-8">
            Schedule a consultation today and let our expert team create a personalized rehabilitation plan for your furry friend.
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
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}