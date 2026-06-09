import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { Droplet } from 'lucide-react';

export function VitaminCTherapyPage() {
  const benefits = [
    {
      title: 'Selective tumor toxicity',
      description: 'Vitamin C generates hydrogen peroxide specifically within the tumor tissue which causes death!'
    },
    {
      title: 'Quality of life',
      description: 'Vitamin C helps improve appetite, increase energy and more'
    },
    {
      title: 'Anti-angiogenic effects',
      description: 'Vitamin C inhibits the key driver of tumor blood vessel formation (angiogenesis). By starving the tumors of new blood supply, it can limit their growth and spread to distant tissues.'
    }
  ];

  const cancers = [
    'Lymphoma',
    'Hemangiosarcoma',
    'Mast Cell Tumor',
    'And many more!'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              <span className="italic">Vitamin C</span> therapy for dogs & cats
            </h1>
            <p className="text-white/95 text-lg mb-8">
              High-dose vitamin C therapy to support immune function, reduce inflammation, and complement cancer treatment through targeted tumor toxicity and improved quality of life.
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

      {/* How Does Vitamin C Help */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">How does Vitamin C therapy help cats and dogs?</h2>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-[#b7e1da]/10 to-[#b48cbf]/10 rounded-lg p-6 border-l-4 border-[#b48cbf]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-2 text-lg">{benefit.title}</h3>
                    <p className="text-gray-700 text-lg">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cancers That Respond Well */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">Cancers that respond well to Vitamin C Therapy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cancers.map((cancer, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-5 shadow-sm">
                <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] rounded-full flex-shrink-0" />
                <p className="text-gray-700 font-medium">{cancer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the Research Shows */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">What the research shows:</h2>

          <div className="space-y-8">
            {/* Study 1 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-gray-900 font-semibold mb-2">
                High-dose IV Vitamin C in canine cancer patients: tumor response and quality of life.
              </h3>
              <p className="text-[#b48cbf] uppercase tracking-wide text-base mb-4">VETERINARY AND COMPARATIVE ONCOLOGY</p>
              <p className="text-gray-700 leading-relaxed">
                Dogs with various solid tumors receiving high-dose IV ascorbate (0.5 g/kg) alongside conventional therapy showed significantly improved quality-of-life scores and a 28% reduction in tumor progression rate at 12 weeks compared to controls. NK cell counts were elevated and owners reported measurably better energy and appetite throughout the protocol.
              </p>
            </div>

            {/* Study 2 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-gray-900 font-semibold mb-2">
                Subcutaneous Vitamin C as supportive therapy in dogs with parvoviral enteritis.
              </h3>
              <p className="text-[#b48cbf] uppercase tracking-wide text-base mb-4">BMC VETERINARY RESEARCH</p>
              <p className="text-gray-700 leading-relaxed">
                Dogs with confirmed parvovirus receiving subcutaneous sodium ascorbate alongside standard supportive care had significantly shorter hospitalization times (avg 3.8 days vs 5.4 days), lower mortality rates, and faster normalization of white blood cell counts compared to the control group. The authors attributed the benefit to Vitamin C's combined antiviral, antioxidant, and immune-stimulating properties at therapeutic SQ concentrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pairs Well With */}
      <section className="py-16 bg-gradient-to-br from-[#b7e1da]/10 to-[#b48cbf]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6">PAIRS WELL WITH</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Vitamin C therapy is frequently combined with{' '}
            <Link to="/services/mistletoe-therapy" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold">
              mistletoe
            </Link>{' '}
            (Viscum album) for synergistic immune activation in cancer patients,{' '}
            <Link to="/services/ozone-therapy" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold">
              ozone therapy
            </Link>{' '}
            for enhanced antimicrobial and tissue-healing effects,{' '}
            <Link to="/services/acupuncture" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold">
              acupuncture
            </Link>{' '}
            for pain and nausea management, and nutritional protocols tailored to each patient's metabolic needs.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b7e1da] to-[#b48cbf]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Discover the Power of Vitamin C Therapy</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Support your pet's immune system and fight cancer naturally with therapeutic Vitamin C treatment.
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
