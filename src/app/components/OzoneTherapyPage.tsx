import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function OzoneTherapyPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (openAccordion !== null && accordionRefs.current[openAccordion]) {
      const element = accordionRefs.current[openAccordion];
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 160; // Account for fixed header (140px mobile + extra padding)

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [openAccordion]);

  const conditions = [
    {
      title: 'Skin & Allergy Conditions',
      description: 'Dermatitis, hot spots, chronic skin infections, environmental allergies'
    },
    {
      title: 'Oral Health',
      description: 'Periodontal disease'
    },
    {
      title: 'Ear Infections',
      description: 'Recurrent otitis externa and media are effectively managed with ozone insufflation targeting bacterial, fungal, and viral pathogens simultaneously.'
    },
    {
      title: 'Wound Healing',
      description: 'Chronic, non-healing wounds benefits from ozone\'s ability to sterilize tissue and accelerate the body\'s natural repair processes'
    },
    {
      title: 'Immune Support and Cancer',
      description: 'Pets with cancer or compromised immune systems may benefits from ozone\'s immunomodulatory and supportive effects.'
    }
  ];

  const deliveryMethods = [
    {
      title: 'Subcutaneous ozonated fluids',
      description: 'Ozone gas is bubbled into saline and then injected under the skin. This allows for gentle absorbed by the body over time.'
    },
    {
      title: 'Rectal insufflation',
      description: 'This is one of the most commonly used systemic delivery method in veterinary patients. Ozone gas is gently introduced rectally, where it is rapidly absorbed through intestinal walls or by the caudal rectal vein and into the bloodstream, producing whole-body therapeutic effects.'
    },
    {
      title: 'Ozonated saline',
      description: 'Sterile saline or water infused with ozone is applied topically or used as an irrigation solution for wounds, skin infections, or ear canals.'
    },
    {
      title: 'Ozone Bagging',
      description: 'A limb, paw, or wound is placed inside a sealed bag filled with ozone gas. This direct exposure is ideal for treating resistant wounds, paw infections, and more.'
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
              Ozone Therapy for Dogs & Cats
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Medical-grade ozone therapy that reduces inflammation, fights infection, and enhances healing by improving oxygen utilization and supporting the body's natural defenses.
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

      {/* How Can Ozone Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-500 uppercase tracking-wide text-lg mb-2">HOW CAN OZONE HELP MY PET?</p>
            <h2 className="text-gray-900 mb-6">Healing power of <span className="italic">ozone therapy</span> for your pet</h2>
          </div>

          <div className="bg-gradient-to-br from-[#b7e1da]/10 to-[#b48cbf]/10 rounded-lg p-8 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A natural, science-backed treatment that harnesses the body's own healing mechanisms — reducing inflammation, fighting infection, and restoring vitality without harsh pharmaceuticals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Unlike pharmaceutical interventions, ozone therapy works <em>with</em> the body's biology — stimulating the immune system, improving circulation, and enhancing oxygen utilization at the cellular level. It has been used in human medicine for over a century, and is now a valuable tool in integrative veterinary practice.
            </p>
          </div>
        </div>
      </section>

      {/* What Ozone Can Help With - Accordion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">What Ozone Therapy Can Help With</h2>

          <div className="space-y-4">
            {conditions.map((condition, index) => (
              <div key={index} ref={(el) => (accordionRefs.current[index] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{condition.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openAccordion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 text-lg">{condition.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Research Quote */}
          <div className="mt-12 bg-white rounded-lg p-8 border-l-4 border-[#b48cbf]">
            <p className="text-gray-700 italic mb-4">
              "Ozone therapy activates the antioxidant system and modulates the immune response, making it a promising complementary treatment in veterinary medicine for a wide variety of conditions."
            </p>
            <p className="text-gray-600 text-lg">
              — Elvis A.M. et al., Ozone Therapy in Veterinary Medicine, Frontiers in Physiology (2020)
            </p>
          </div>
        </div>
      </section>

      {/* How is Ozone Delivered - Accordion */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">How is Ozone Therapy Delivered</h2>

          <div className="space-y-4">
            {deliveryMethods.map((method, index) => (
              <div key={index} ref={(el) => (accordionRefs.current[index + 100] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setOpenAccordion(openAccordion === (index + 100) ? null : (index + 100))}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{method.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openAccordion === (index + 100) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === (index + 100) && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 text-lg">{method.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* AAOT Reference */}
          <div className="mt-12 text-center">
            <p className="text-gray-700">
              The American Academy of Ozonotherapy holds a wealth of information and research-based evidence on this amazing modality at{' '}
              <a
                href="https://www.aaot.us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold"
              >
                www.aaot.us
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Experience Natural Healing with Ozone Therapy</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Discover how ozone therapy can support your pet's immune system, fight infection, and promote healing naturally.
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
