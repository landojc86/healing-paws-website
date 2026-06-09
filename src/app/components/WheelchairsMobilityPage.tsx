import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { Heart, Dumbbell, Ruler, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { PawIcon } from './icons/PawIcon';

export function WheelchairsMobilityPage() {
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Pet Wheelchairs & Mobility Solutions
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Custom mobility devices and wheelchairs designed to restore independence, improve quality of life, and keep your pet active and engaged.
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

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/v8xBDYZzznI"
              title="Pet Wheelchair in Action"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Pet Wheelchairs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Conditions */}
            <div className="bg-gradient-to-br from-[#b48cbf]/10 to-[#b7e1da]/10 rounded-lg p-8">
              <h3 className="text-gray-900 mb-6 text-center">Conditions that benefit from a pet wheelchair or dog cart</h3>
              <div className="space-y-4">
                {[
                  'Hind limb paralysis',
                  'Degenerative myelopathy',
                  'Herniated disc / spinal injury',
                  'Arthritis in dogs and cats',
                  "Wobbler's disease",
                  'Amputee dogs / tripods (tripawds)'
                ].map((condition, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <PawIcon className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{condition}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Why Choose */}
            <div>
              <h3 className="text-gray-900 mb-6 text-center">Why choose a dog wheelchair or pet mobility cart?</h3>
              <div className="space-y-6">
                {/* Restore Independence */}
                <div className="bg-white border-2 border-[#b7e1da] rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#b7e1da] rounded-full flex items-center justify-center flex-shrink-0">
                      <PawIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">Restore independence</h4>
                      <p className="text-gray-600 text-lg">
                        A pet wheelchair gives dogs and cats the freedom to walk, run, and play again — keeping them engaged and mentally stimulated.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Improve Quality of Life */}
                <div className="bg-white border-2 border-[#b48cbf] rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#b48cbf] rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">Improve quality of life</h4>
                      <p className="text-gray-600 text-lg">
                        Pets in wheelchairs experience better mood, reduced muscle atrophy, and renewed ability to participate in daily activities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Support Muscle Health */}
                <div className="bg-white border-2 border-[#b7e1da] rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#b7e1da] rounded-full flex items-center justify-center flex-shrink-0">
                      <Dumbbell className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">Support muscle health</h4>
                      <p className="text-gray-600 text-lg">
                        Pairing a dog cart with physical therapy maintains and builds muscle mass, especially for pets with DM or post-surgical weakness.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Custom-Fitted */}
                <div className="bg-white border-2 border-[#b48cbf] rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#b48cbf] rounded-full flex items-center justify-center flex-shrink-0">
                      <Ruler className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">Custom-fitted for your pet</h4>
                      <p className="text-gray-600 text-lg">
                        No two pets are alike. Our rehabilitation veterinarians measure each animal individually for a precise, comfortable fit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Wheelchair FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-gray-900 mb-8 text-center">Frequently Asked Questions About Pet Wheelchairs</h3>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div ref={(el) => (accordionRefs.current[10] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 10 ? null : 10)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Can my dog still use their rear legs in a wheelchair?</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openAccordion === 10 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === 10 && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 text-lg">
                      Yes — many dog wheelchair models allow pets to use their rear limbs while receiving support. For fully paralyzed pets, stirrups on the rear of the cart prevent the legs from dragging. Combining wheelchair use with veterinary physical therapy significantly improves muscle strength and mobility outcomes.
                    </p>
                  </div>
                )}
            </div>

            {/* FAQ 2 */}
            <div ref={(el) => (accordionRefs.current[11] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 11 ? null : 11)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">My pet has front-limb weakness — is a front-wheel wheelchair available?</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openAccordion === 11 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === 11 && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 text-lg">
                      Absolutely. Healing Paws Center can custom-measure your pet for a front-limb wheelchair (forelimb cart). This design shifts weight toward the rear limbs while providing targeted support for the front legs, improving balance and overall mobility. Physical therapy is strongly recommended alongside front-wheel carts.
                    </p>
                  </div>
                )}
            </div>

            {/* FAQ 3 */}
            <div ref={(el) => (accordionRefs.current[12] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 12 ? null : 12)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">What if my pet needs support for all four limbs?</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openAccordion === 12 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === 12 && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 text-lg">
                      For pets requiring full-body support, we offer quad carts — four-wheel pet wheelchairs that stabilize all four limbs. We recommend a consultation with our veterinary rehabilitation specialists to determine the best mobility device for your pet's specific needs.
                    </p>
                  </div>
                )}
            </div>

            {/* FAQ 4 */}
            <div ref={(el) => (accordionRefs.current[13] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 13 ? null : 13)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">How does the custom wheelchair fitting process work?</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openAccordion === 13 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === 13 && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 text-lg">
                      Healing Paws Center provides end-to-end service: professional measurement, wheelchair ordering, and post-delivery fitting. Because dog and cat wheelchairs must be sized precisely — height, width, length, and weight all factor in — our certified rehabilitation staff oversees every step to ensure a comfortable, functional fit.
                    </p>
                  </div>
                )}
            </div>

            {/* FAQ 5 */}
            <div ref={(el) => (accordionRefs.current[14] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 14 ? null : 14)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">What if my pet resists using the cart?</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openAccordion === 14 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === 14 && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 text-lg">
                      Resistance to a new dog wheelchair is rare, but adjustment periods do vary. Our team uses positive reinforcement techniques and gradual desensitization to help your pet build confidence in their new mobility device. Gentle encouragement and short, rewarding sessions yield the best results.
                    </p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Restore Your Pet's Mobility and Independence</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Schedule a consultation to explore custom wheelchairs for your pet.
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
              to="/services/orthotics-prosthetics"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              View Orthotics & Prosthetics
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
