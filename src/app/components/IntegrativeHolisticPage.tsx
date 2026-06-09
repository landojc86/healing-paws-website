import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

const categoryData = {
  id: 'integrative-holistic',
  title: 'Integrative & Holistic Medicine',
  description: 'Natural and complementary therapies for whole-body wellness',
  icon: Sparkles,
  image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpc3RpYyUyMHBldCUyMGNhcmV8ZW58MXx8fHwxNzY1Mzg4NTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  services: [
    {
      name: 'Acupuncture',
      details: 'Dog Acupuncture in Fort Lauderdale and Veterinary Acupuncture for Small Animals',
      link: '/services/acupuncture',
    },
    {
      name: 'Herbal Therapy',
      details: 'Natural plant-based remedies to support healing, boost immunity, and maintain optimal health.',
      link: '/services/herbal-therapy',
    },
    {
      name: 'Homeopathy',
      details: 'Gentle, individualized treatments using highly diluted natural substances to stimulate the body\'s healing response.',
      link: '/services/homeopathy',
    },
    {
      name: 'Ozone Therapy',
      details: 'Innovative treatment using medical-grade ozone to reduce inflammation, enhance healing, and improve overall wellness.',
      link: '/services/ozone-therapy',
    },
    {
      name: 'Fecal Microbiome Restoration Therapy (FMBRT)',
      details: 'Advanced therapy to restore healthy gut bacteria and improve digestive health.',
      link: '/services/fmbrt',
    },
  ],
};

const benefits = [
  {
    title: 'Natural Healing',
    description: 'Harness the power of nature to support your pet\'s innate healing abilities.',
  },
  {
    title: 'Whole-Body Wellness',
    description: 'Address the root causes of health issues, not just symptoms.',
  },
  {
    title: 'Fewer Side Effects',
    description: 'Gentle, natural treatments with minimal adverse reactions.',
  },
  {
    title: 'Complementary Care',
    description: 'Works alongside conventional medicine for comprehensive treatment.',
  },
];

export function IntegrativeHolisticPage() {
  const Icon = categoryData.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Banner Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Natural & Holistic Veterinary Care
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Integrative medicine combining acupuncture, herbal therapy, homeopathy, and advanced natural treatments to support your pet's innate healing abilities.
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

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-gray-900 mb-4">Our Integrative & Holistic Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our comprehensive range of natural and holistic therapies designed to support your pet's overall health and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {categoryData.services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#b48cbf] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 font-semibold mb-2 text-base sm:text-base">
                      {service.name}
                    </h4>
                    <p className="text-gray-600 text-lg mb-3 sm:mb-4">{service.details}</p>
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
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Conditions We Treat</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our integrative and holistic therapies are effective for a wide range of health concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: 'Chronic Illness', link: null },
              { name: 'Digestive Disorders', link: null },
              { name: 'Skin & Coat Issues', link: '/common-ailments/skin-allergies' },
              { name: 'Allergies & Sensitivities', link: '/common-ailments/skin-allergies' },
              { name: 'Immune System Support', link: null },
              { name: 'Behavioral Issues', link: null },
              { name: 'Senior Pet Care', link: '/common-ailments/senior-patients' },
              { name: 'Anxiety & Stress', link: null },
              { name: 'Metabolic Imbalances', link: null },
              { name: 'Environmental Toxin Exposure', link: null },
              { name: 'Chronic Inflammation', link: null },
              { name: 'Preventative Wellness', link: null },
            ].map((condition, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full flex-shrink-0" />
                {condition.link ? (
                  <Link to={condition.link} className="text-[#b48cbf] hover:text-[#9d6fa8] text-lg transition-colors">
                    {condition.name}
                  </Link>
                ) : (
                  <span className="text-gray-700 text-lg">{condition.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4 sm:mb-6">Ready to Explore Holistic Care for Your Pet?</h2>
          <p className="text-white/95 text-base sm:text-lg mb-6 sm:mb-8">
            Schedule a consultation today and discover how integrative medicine can support your pet's health and wellness naturally.
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
            <Link
              to="/services"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-base sm:text-base"
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
