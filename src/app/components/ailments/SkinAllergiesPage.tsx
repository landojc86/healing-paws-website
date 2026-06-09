import { Header } from '../Header';
import { Footer } from '../Footer';
import { Link } from 'react-router-dom';
import { Sparkles, AlertCircle } from 'lucide-react';
import { PawIcon } from '../icons/PawIcon';

export function SkinAllergiesPage() {
  const symptoms = [
    'Itching and scratching',
    'Excessive licking',
    'Hair loss',
    'Frequent ear infections',
    'Frequent skin infections',
    'Reddened skin'
  ];

  const treatments = [
    {
      text: 'Ozone therapy: Supports skin healing and helps reduce bacterial and yeast overgrowth',
      link: '/services/ozone-therapy'
    },
    {
      text: 'Laser therapy: Decreases inflammation, promotes healing, and relieves itching',
      link: '/services/laser-therapy'
    },
    {
      text: 'Herbal and targeted botanicals therapy: Helps balance the immune system and support skin health naturally',
      link: '/services/herbal-therapy'
    },
    {
      text: 'Lifestyle & nutrition changes: Reduces environmental and dietary triggers',
      link: null
    },
    {
      text: 'Immunotherapy: Helps desensitize your pet to allergens for long-term relief',
      link: null
    },
    {
      text: 'Microbiome restoration: Supports gut and skin health to improve immune balance and reduce allergic responses',
      link: '/services/fmbrt'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Skin Allergies
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Integrative treatment for allergic dermatitis using ozone therapy, laser therapy, herbal medicine, and microbiome restoration to address root causes and provide lasting relief.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Skin Allergy Appointment
            </a>
          </div>
        </div>
      </section>

      {/* What are skin allergies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Paragraphs */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Skin allergies in dogs and cats, also called <strong>allergic dermatitis</strong>, occur when the immune system overreacts to triggers like pollen, food, or fleas.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Healing Paws Center, we take an integrative approach to treating skin allergies, addressing both the symptoms and the underlying immune imbalances that cause them.
              </p>
            </div>

            {/* Right Column - Callout */}
            <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 border-l-4 border-[#b48cbf] rounded-lg p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#b48cbf] flex-shrink-0 sm:mt-1" />
                <div>
                  <h3 className="text-gray-900 mb-3">Root Cause Treatment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Unlike conventional approaches that only mask symptoms, our integrative therapies work to restore immune balance and provide lasting relief from allergic reactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Symptoms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Common Symptoms</h2>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3">
                  <PawIcon className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{symptom}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6">How We Can Help Skin Allergies</h2>

          <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 rounded-lg p-6 sm:p-8 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              We take an <strong>integrative approach to treating skin allergies in dogs and cats</strong>:
            </p>
          </div>

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
                      <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Benefits of Our Skin Allergy Treatment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Reduced itching and discomfort',
              'Improved skin health and healing',
              'Balanced immune response',
              'Long-term allergy relief',
              'Reduced reliance on medications',
              'Healthier coat and skin',
              'Prevention of secondary infections',
              'Better overall quality of life'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <PawIcon className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">Patient Success Stories</h2>
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Rosie, my Bulldog, suffered from horrible skin allergies for years — constant scratching, chewed up paws, and recurring infections that never fully cleared. We tried everything with no lasting relief. This clinic introduced us to ozone therapy and immunotherapy and the transformation has been unbelievable. His skin is clear, the infections are gone, and he is finally comfortable and happy. This practice truly treats the root cause instead of just the symptoms. I can't thank them enough for giving my boy his life back!"
            </p>
            <p className="text-gray-900 font-semibold">— Brenda H.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Pet Skin Allergy Appointments Available!</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Our integrative approach addresses the root causes of skin allergies, providing natural, effective relief for your pet. Let us help your pet achieve healthier skin and a better quality of life.
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
