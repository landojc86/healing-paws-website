import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { PawIcon } from './icons/PawIcon';

export function FMBRTPage() {
  const conditions = [
    { name: 'Cancer', link: '/services/cancer-treatment' },
    { name: 'Chronic vomiting or diarrhea', link: null },
    { name: 'Chronic enteropathy / IBD (vomiting, diarrhea, weight loss, hypoalbuminemia)', link: null },
    { name: 'Severe skin allergies or yeast overgrowth', link: '/common-ailments/skin-allergies' },
    { name: 'Any patients suffering from cancer', link: '/services/cancer-treatment' }
  ];

  const benefits = [
    'Restores gut microbial balance',
    'Supports immune system function',
    'Relieves gastrointestinal symptoms',
    'Promotes mucosal healing',
    'No anesthesia required',
    'Quick 30-minute procedure',
    'Non-invasive treatment option',
    'May enhance cancer therapy response'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Fecal Microbiome Transplant (FMBRT) for Dogs & Cats
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Advanced therapy to restore healthy gut bacteria and improve digestive health, immune function, and overall well-being through targeted microbiome restoration.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book FMBRT Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At Healing Paws Center (Oakland Park, FL), we offer <strong>Fecal Microbiome Transplantation (FMBRT)</strong>—a targeted way to restore gut microbial balance in dogs and cats.
          </p>
          <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 border-l-4 border-[#b48cbf] rounded-lg p-6 sm:p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Because approximately <strong>70% of the immune system is associated with the gastrointestinal tract</strong>, the health of the gut microbiome can strongly influence immune responses throughout the body.
            </p>
          </div>
        </div>
      </section>

      {/* What is FMBRT Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6">What is FMBRT?</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            FMBRT transfers carefully screened intestinal microbes from a healthy donor to a patient to reseed a resilient, diverse microbiome, which can relieve GI signs and support mucosal healing when standard therapies have fallen short.
          </p>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
            <h3 className="text-gray-900 mb-4">Our Unique Approach</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At Healing Paws Center we utilize a unique combination of:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <PawIcon className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Capsules</p>
              </div>
              <div className="flex items-start gap-3">
                <PawIcon className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Enemas</p>
              </div>
              <div className="flex items-start gap-3">
                <PawIcon className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Ozone therapy</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#b7e1da]/20 to-[#b48cbf]/20 rounded-lg p-4">
              <p className="text-gray-700 font-semibold">
                Your pet will not need to be put under anesthesia. The entire process takes about 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Conditions We Commonly Treat with FMBRT</h2>

          <div className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="space-y-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-3">
                  <PawIcon className="w-6 h-6 text-[#b7e1da] flex-shrink-0 mt-1" />
                  {condition.link ? (
                    <Link to={condition.link} className="text-[#b48cbf] hover:text-[#9d6fa8] text-lg transition-colors">
                      {condition.name}
                    </Link>
                  ) : (
                    <p className="text-gray-700 text-lg">{condition.name}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cancer Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6">How Can FMBRT Help My Pet Suffering from Cancer?</h2>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Emerging research in human oncology suggests that the gut microbiome may influence how patients respond to certain cancer therapies.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Healthy gut bacteria interact closely with the immune system. Restoring beneficial microbes may help support balanced immune responses.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Benefits of FMBRT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <PawIcon className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">FMBRT Appointments Available!</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Restore your pet's gut health and support their immune system with our advanced Fecal Microbiome Transplant therapy. Quick, safe, and no anesthesia required.
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
