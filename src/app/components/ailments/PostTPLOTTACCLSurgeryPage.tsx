import { Header } from '../Header';
import { Footer } from '../Footer';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import { PawIcon } from '../icons/PawIcon';

export function PostTPLOTTACCLSurgeryPage() {
  const treatments = [
    {
      text: 'Physical therapy and therapeutic exercises',
      link: '/services/therapeutic-exercise'
    },
    {
      text: 'Underwater treadmill therapy for low-impact strengthening',
      link: '/services/underwater-treadmill'
    },
    {
      text: 'Laser therapy to reduce inflammation and promote healing',
      link: '/services/laser-therapy'
    },
    {
      text: 'Custom rehabilitation protocols based on surgical procedure',
      link: null
    },
    {
      text: 'Progressive strengthening and range of motion exercises',
      link: null
    }
  ];

  const benefits = [
    'Faster bone and tissue healing',
    'Reduced post-surgical pain and swelling',
    'Restored muscle strength and function',
    'Improved joint stability and range of motion',
    'Prevention of compensatory injuries',
    'Optimized surgical outcomes',
    'Reduced recovery time',
    'Better long-term joint health'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Post TPLO/TTA/CCL Surgery Rehabilitation
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Specialized post-surgical rehabilitation combining underwater treadmill, therapeutic exercises, and laser therapy to accelerate healing, restore strength, and optimize surgical outcomes.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Post-Surgery Rehabilitation
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-gray-900 mb-6">Comprehensive Post-Surgical Rehabilitation</h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>TPLO (Tibial Plateau Leveling Osteotomy)</strong>, <strong>TTA (Tibial Tuberosity Advancement)</strong>, and <strong>CCL (Cranial Cruciate Ligament)</strong> surgeries require specialized rehabilitation to ensure optimal recovery and long-term joint health.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                At Healing Paws Center, our <strong>certified rehabilitation team creates customized post-surgical programs</strong> that accelerate bone healing, restore muscle strength, and help your pet return to normal activity safely and effectively.
              </p>
            </div>

            {/* Right Column - Callout */}
            <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 border-l-4 border-[#b48cbf] rounded-lg p-6 sm:p-8 flex items-center">
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>Early intervention is critical.</strong> Starting rehabilitation soon after surgery significantly improves outcomes, reduces complications, and shortens overall recovery time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Our Post-Surgical Treatment Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {treatments.map((treatment, index) => {
              const [title, ...descParts] = treatment.text.split(':');
              const description = descParts.join(':').trim();
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#b48cbf] rounded-full flex items-center justify-center mt-0.5">
                      <PawIcon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-semibold mb-2 text-base sm:text-base">
                        {title}
                      </h4>
                      <p className="text-gray-600 text-base mb-3 sm:mb-4">{description}</p>
                      {treatment.link && (
                        <Link
                          to={treatment.link}
                          className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors"
                        >
                          Learn More →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Benefits of Post-Surgical Rehabilitation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <PawIcon className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Post-Surgical Rehabilitation Appointments Available!</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Our experienced team works closely with your surgeon to create a comprehensive rehabilitation plan tailored to your pet's specific procedure and recovery needs.
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
