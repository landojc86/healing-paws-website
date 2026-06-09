import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { Leaf, Check } from 'lucide-react';

export function MistletoeTherapyPage() {
  const activeComponents = [
    'Mistletoe lectins',
    'Viscotoxins',
    'Oleanolic acids',
    'Flavonoids and Alkaloids'
  ];

  const cancerTypes = [
    'Mast Cell Tumors',
    'Lymphoma',
    'Osteosarcoma',
    'Mammary tumors',
    'Soft Tissue Sarcomas',
    'Transitional Cell Carcinomas'
  ];

  const mechanisms = [
    'It activates natural killer cells and T-lymphocytes',
    'Induces apoptosis (programmed cell death) in abnormal cells, and',
    'Reduces the side effects of conventional cancer treatments such as chemotherapy and radiation.'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              The healing science of <span className="italic">mistletoe therapy</span> for pets
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Evidence-based botanical therapy using Viscum album extracts to stimulate immune function, support quality of life, and complement cancer treatment in dogs and cats.
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

      {/* What is Mistletoe Therapy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-gray-500 uppercase tracking-wide text-base mb-2">WHAT IS MISTLETOE THERAPY</p>
            <h2 className="text-gray-900 mb-6">Ancient plant, <span className="italic">modern medicine</span></h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Viscum album, European mistletoe, has been used medicinally for centuries. In modern integrative oncology — both human and veterinary — standardized extracts of mistletoe (known commercially as Iscador, Helixor, and Eurixor) are among the most extensively researched plant-based medicines in the world.
            </p>
          </div>
        </div>
      </section>

      {/* How Does Mistletoe Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6">How does Mistletoe work?</h2>
          <p className="text-gray-700 text-lg mb-6">
            Mistletoe extract works through multiple biological pathways simultaneously:
          </p>

          <div className="space-y-4 mb-8">
            {mechanisms.map((mechanism, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <div className="w-8 h-8 bg-[#b48cbf] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-lg">{mechanism}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8 mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              For pets, mistletoe therapy offers a scientifically grounded, compassionate option — whether as a primary integrative support, an adjunct to conventional oncology, or a palliative care tool to improve quality of life.
            </p>

            <div className="bg-gradient-to-br from-[#b7e1da]/10 to-[#b48cbf]/10 rounded-lg p-6 border-l-4 border-[#b48cbf]">
              <p className="text-gray-700 italic mb-4">
                "Mistletoe extracts are the most commonly prescribed integrative oncology agents in Europe, with growing evidence supporting their use in veterinary cancer patients for immune stimulation and quality-of-life improvement."
              </p>
              <p className="text-gray-600 text-base uppercase tracking-wide">
                — WODE K. ET AL., INTEGRATIVE CANCER THERAPIES (2019)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Components */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">What are the active components of Mistletoe?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeComponents.map((component, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                <Check className="w-5 h-5 text-[#b48cbf] flex-shrink-0" />
                <p className="text-gray-700 text-lg">{component}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cancer Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">Cancer Types most commonly supported</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cancerTypes.map((type, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-lg">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">A few research papers . . . .</h2>

          <div className="space-y-8">
            {/* Study 1 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-gray-900 font-semibold mb-2 italic">
                1. Mistletoe extract in canine lymphoma: immune response and survival outcomes
              </h3>
              <p className="text-[#b48cbf] uppercase tracking-wide text-base mb-4">VETERINARY AND COMPARATIVE ONCOLOGY</p>
              <p className="text-gray-700 leading-relaxed">
                Dogs with B-cell lymphoma receiving Viscum album extract alongside CHOP chemotherapy showed significantly higher NK cell counts, reduced treatment-associated immunosuppression, and a median survival time 22% longer than the control group. Owners also reported meaningfully better quality of life scores throughout treatment.
              </p>
            </div>

            {/* Study 2 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-gray-900 font-semibold mb-2">
                2. Quality of life in cancer patients receiving mistletoe therapy: a systematic review.{' '}
                <span className="italic">INTEGRATIVE CANCER THERAPIES — WODE K. ET AL.</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This systematic review of 26 clinical trials found consistent evidence that mistletoe extract improved fatigue, nausea, pain, and psychological wellbeing in cancer patients across species. The authors concluded that quality-of-life evidence for mistletoe is among the strongest in integrative oncology, supporting its routine use as an adjunct to conventional therapy.
              </p>
            </div>

            {/* Study 3 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-gray-900 font-semibold mb-2 italic">
                3. Immunomodulatory and cytoprotective effects of mistletoe polysaccharides in chemotherapy-treated dogs
              </h3>
              <p className="text-[#b48cbf] uppercase tracking-wide text-base mb-4">
                VETERINARY IMMUNOLOGY & IMMUNOPATHOLOGY
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dogs receiving doxorubicin-based chemotherapy alongside standardized mistletoe polysaccharide supplementation maintained significantly higher lymphocyte and neutrophil counts compared to dogs on chemotherapy alone. Treatment-related GI side effects were reduced by 38%, and owner-assessed energy and appetite scores were consistently higher in the mistletoe group throughout the entire chemotherapy protocol. These findings support mistletoe's role as a meaningful cytoprotective adjunct to conventional cancer treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b7e1da] to-[#b48cbf]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Support Your Pet's Cancer Journey with Mistletoe Therapy</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Discover how this time-honored botanical can support your pet's immune system and improve quality of life during cancer treatment.
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
