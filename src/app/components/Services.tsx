import { ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import physicalTherapyImg from '../../imports/HP-1.jpg?url';
import integrativeHolisticImg from '../../imports/HP-2.jpg?url';
import cancerTreatmentImg from '../../imports/HP-3.jpg?url';

const serviceCategories = [
  {
    id: 'physical-therapy',
    title: 'Physical Therapy, Pain & Mobility Support',
    description: 'Comprehensive exercise programs and hands-on therapy for recovery',
    image: physicalTherapyImg,
    services: [
      'Acupuncture',
      'Underwater Treadmill',
      'Therapeutic Exercise',
      'Laser Therapy',
      'Shockwave Therapy',
      'Wheelchairs',
      'Orthotics & Prosthetics',
    ],
  },
  {
    id: 'integrative-holistic',
    title: 'Integrative & Holistic Medicine',
    description: 'Natural and complementary therapies for whole-body wellness',
    image: integrativeHolisticImg,
    services: [
      'Acupuncture',
      'Herbal Therapy',
      'Homeopathy',
      'Ozone Therapy',
      'Fecal Microbiome Restoration Therapy (FMBRT)',
    ],
  },
  {
    id: 'cancer-treatment',
    title: 'Cancer Treatment',
    description: 'Specialized care for pets undergoing cancer treatment and recovery',
    image: cancerTreatmentImg,
    services: [
      'Acupuncture',
      'Ozone Therapy & Mistletoe Therapies',
      'Fecal Microbiome Restoration Therapy (FMBRT)',
      'Targeted Botanical and Herbal Therapies',
      'Vitamin C Therapy',
    ],
  },
];

export function Services() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const activeCategory = serviceCategories.find(cat => cat.id === openCategory);

  return (
    <section id="services" className="py-12 sm:py-20 bg-gray-50">
      {/* Section Header - Contained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-gray-900 mb-4">
            Comprehensive Holistic Services
          </h2>
          <p className="text-gray-600 text-lg sm:text-lg">
            We offer a wide range of evidence-based therapeutic services tailored to meet your pet&apos;s unique needs and recovery goals.
          </p>
        </div>
      </div>

      {/* Service Categories - Mobile: Dropdown, Desktop: Overlay Panel */}

      {/* Mobile Version - Dropdown Below Each Card */}
      <div className="sm:hidden">
        {serviceCategories.map((category) => (
          <div key={category.id} className="mb-0">
            <button
              onClick={() => toggleCategory(category.id)}
              className={`relative w-full h-64 group cursor-pointer transition-all duration-300 ${
                openCategory === category.id ? 'ring-4 ring-[#b48cbf] ring-inset' : ''
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
                  <h3 className="text-white mb-2 text-xl">{category.title}</h3>
                  <ChevronDown className={`w-6 h-6 text-white mx-auto mt-2 transition-transform ${
                    openCategory === category.id ? 'rotate-180' : ''
                  }`} />
                </div>
              </div>
            </button>

            {/* Mobile Dropdown */}
            <div
              className={`bg-white transition-all duration-300 overflow-hidden ${
                openCategory === category.id ? 'max-h-[600px] py-6' : 'max-h-0'
              }`}
            >
              <div className="px-4">
                <p className="text-gray-600 text-lg mb-4 text-lg">{category.description}</p>
                <ul className="grid grid-cols-1 gap-3 mb-4">
                  {category.services.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                      {service === 'Acupuncture' ? (
                        <Link to="/services/acupuncture" className="hover:text-[#b48cbf] transition-colors text-lg">
                          {service}
                        </Link>
                      ) : service === 'Therapeutic Exercise' ? (
                        <Link to="/services/therapeutic-exercise" className="hover:text-[#b48cbf] transition-colors text-lg">
                          {service}
                        </Link>
                      ) : service === 'Laser Therapy' ? (
                        <Link to="/services/laser-therapy" className="hover:text-[#b48cbf] transition-colors text-lg">
                          {service}
                        </Link>
                      ) : service === 'Shockwave Therapy' ? (
                        <Link to="/services/shockwave-therapy" className="hover:text-[#b48cbf] transition-colors text-lg">
                          {service}
                        </Link>
                      ) : service === 'Underwater Treadmill' ? (
                        <Link to="/services/underwater-treadmill" className="hover:text-[#b48cbf] transition-colors text-lg">
                          {service}
                        </Link>
                      ) : service === 'Wheelchairs' ? (
                        <Link to="/services/wheelchairs-mobility" className="hover:text-[#b48cbf] transition-colors text-lg">
                          {service}
                        </Link>
                      ) : service === 'Orthotics & Prosthetics' ? (
                        <Link to="/services/orthotics-prosthetics" className="hover:text-[#b48cbf] transition-colors text-lg">
                          {service}
                        </Link>
                      ) : service === 'Herbal Therapy' ? (
                        <Link to="/services/herbal-therapy" className="hover:text-[#b48cbf] transition-colors text-lg">
                          {service}
                        </Link>
                      ) : service === 'Homeopathy' ? (
                        <Link to="/services/homeopathy" className="hover:text-[#b48cbf] transition-colors text-lg">
                          {service}
                        </Link>
                      ) : service === 'Fecal Microbiome Restoration Therapy (FMBRT)' ? (
                        <Link to="/services/fmbrt" className="hover:text-[#b48cbf] transition-colors text-lg">
                          {service}
                        </Link>
                      ) : service === 'Targeted Botanical and Herbal Therapies' ? (
                        <Link to="/services/herbal-therapy" className="hover:text-[#b48cbf] transition-colors text-lg">
                          {service}
                        </Link>
                      ) : service === 'Ozone Therapy & Mistletoe Therapies' ? (
                        <Link to="/services/ozone-therapy" className="hover:text-[#b48cbf] transition-colors text-lg">
                          {service}
                        </Link>
                      ) : service === 'Vitamin C Therapy' ? (
                        <Link to="/services/vitamin-c-therapy" className="hover:text-[#b48cbf] transition-colors text-lg">
                          {service}
                        </Link>
                      ) : (
                        <span className="text-lg">{service}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <Link
                  to={category.id === 'physical-therapy' ? '/services/therapeutic-exercise' : category.id === 'integrative-holistic' ? '/services/integrative-holistic' : '/services/cancer-treatment'}
                  className="inline-flex items-center justify-center bg-[#b48cbf] text-white px-6 py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors w-full text-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Version - Overlay Panel */}
      <div className="relative hidden sm:block">
        {/* Category Blocks */}
        <div className="flex flex-row gap-0">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`relative flex-1 h-80 lg:h-96 group cursor-pointer transition-all duration-300 ${
                openCategory === category.id ? 'ring-4 ring-[#b48cbf] ring-inset z-10' : ''
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
                  <ChevronDown className={`w-6 h-6 text-white mx-auto mt-4 transition-transform ${
                    openCategory === category.id ? 'rotate-180' : ''
                  }`} />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Full-Width Overlay Panel */}
        <div
          className={`absolute top-0 left-0 right-0 bg-gray-50/98 backdrop-blur-sm transition-all duration-500 overflow-hidden ${
            openCategory ? 'h-80 lg:h-96 opacity-100 z-20' : 'h-0 opacity-0'
          }`}
        >
          {activeCategory && (
            <div className="h-full flex items-center justify-center p-8 lg:p-12">
              <div className="max-w-6xl w-full">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-gray-900 mb-2">{activeCategory.title}</h3>
                    <p className="text-gray-600 text-lg">{activeCategory.description}</p>
                  </div>
                  <button
                    onClick={() => setOpenCategory(null)}
                    className="ml-4 p-2 hover:bg-gray-200 rounded-full transition-colors flex-shrink-0"
                    aria-label="Close panel"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {activeCategory.services.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                      {service === 'Acupuncture' ? (
                        <Link to="/services/acupuncture" className="hover:text-[#b48cbf] transition-colors">
                          {service}
                        </Link>
                      ) : service === 'Therapeutic Exercise' ? (
                        <Link to="/services/therapeutic-exercise" className="hover:text-[#b48cbf] transition-colors">
                          {service}
                        </Link>
                      ) : service === 'Laser Therapy' ? (
                        <Link to="/services/laser-therapy" className="hover:text-[#b48cbf] transition-colors">
                          {service}
                        </Link>
                      ) : service === 'Shockwave Therapy' ? (
                        <Link to="/services/shockwave-therapy" className="hover:text-[#b48cbf] transition-colors">
                          {service}
                        </Link>
                      ) : service === 'Underwater Treadmill' ? (
                        <Link to="/services/underwater-treadmill" className="hover:text-[#b48cbf] transition-colors">
                          {service}
                        </Link>
                      ) : service === 'Wheelchairs' ? (
                        <Link to="/services/wheelchairs-mobility" className="hover:text-[#b48cbf] transition-colors">
                          {service}
                        </Link>
                      ) : service === 'Orthotics & Prosthetics' ? (
                        <Link to="/services/orthotics-prosthetics" className="hover:text-[#b48cbf] transition-colors">
                          {service}
                        </Link>
                      ) : service === 'Herbal Therapy' ? (
                        <Link to="/services/herbal-therapy" className="hover:text-[#b48cbf] transition-colors">
                          {service}
                        </Link>
                      ) : service === 'Homeopathy' ? (
                        <Link to="/services/homeopathy" className="hover:text-[#b48cbf] transition-colors">
                          {service}
                        </Link>
                      ) : service === 'Fecal Microbiome Restoration Therapy (FMBRT)' ? (
                        <Link to="/services/fmbrt" className="hover:text-[#b48cbf] transition-colors">
                          {service}
                        </Link>
                      ) : service === 'Targeted Botanical and Herbal Therapies' ? (
                        <Link to="/services/herbal-therapy" className="hover:text-[#b48cbf] transition-colors">
                          {service}
                        </Link>
                      ) : service === 'Ozone Therapy & Mistletoe Therapies' ? (
                        <Link to="/services/ozone-therapy" className="hover:text-[#b48cbf] transition-colors">
                          {service}
                        </Link>
                      ) : service === 'Vitamin C Therapy' ? (
                        <Link to="/services/vitamin-c-therapy" className="hover:text-[#b48cbf] transition-colors">
                          {service}
                        </Link>
                      ) : (
                        <span>{service}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <Link
                    to={activeCategory.id === 'physical-therapy' ? '/services/therapeutic-exercise' : activeCategory.id === 'integrative-holistic' ? '/services/integrative-holistic' : '/services/cancer-treatment'}
                    className="inline-flex items-center justify-center bg-[#b48cbf] text-white px-6 py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* View More Services CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center bg-[#b48cbf] text-white px-8 py-4 rounded-lg hover:bg-[#9d6fa8] transition-colors font-semibold text-lg"
          >
            View More Services
          </Link>
        </div>
      </div>
    </section>
  );
}