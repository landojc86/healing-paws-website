import { Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useState, useRef, useEffect } from 'react';

export function LaserTherapyPage() {
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

  const benefits = [
    {
      icon: '💊',
      title: 'Natural Pain Relief',
      description: 'Laser therapy stimulates the release of endorphins — your pet\'s natural painkillers — and blocks pain signals at the nerve level. Effective for both acute injuries and chronic pain conditions like arthritis in dogs and cats.'
    },
    {
      icon: '⚡',
      title: 'Accelerated Healing',
      description: 'Photons from the laser increase ATP production in cells, supercharging the body\'s natural healing response. Wounds, post-surgical incisions, and soft tissue injuries heal significantly faster with veterinary laser treatment.'
    },
    {
      icon: '✨',
      title: 'Reduced Inflammation',
      description: 'Cold laser therapy inhibits inflammatory cytokines and improves lymphatic drainage, reducing swelling and heat in affected joints and tissues — a major benefit for pets with hip dysplasia, tendinitis, or disc disease.'
    },
    {
      icon: '🐕',
      title: 'Improved Mobility & Flexibility',
      description: 'By reducing pain and inflammation, laser therapy directly restores range of motion. Many senior pets treated at Healing Paws Center return to activities they had given up — walks, stairs, playtime — within just a few sessions.'
    },
    {
      icon: '⚡',
      title: 'Nerve Regeneration',
      description: 'Laser therapy is one of few non-invasive treatments shown to support nerve tissue repair, making it valuable for pets with degenerative myelopathy, intervertebral disc disease (IVDD), or post-surgical neurological recovery.'
    },
    {
      icon: '🛡️',
      title: 'Zero Side Effects',
      description: 'Unlike NSAIDs and long-term pharmaceuticals, laser therapy carries no risk of organ damage, drug interactions, or side effects. It is safe for pets of all ages — including senior animals with compromised kidney or liver function.'
    }
  ];

  const conditions = [
    'Osteoarthritis & Joint Pain',
    'Hip & Elbow Dysplasia',
    'Intervertebral Disc Disease (IVDD)',
    'Post-Surgical Recovery',
    'Soft Tissue Injuries & Sprains',
    'Chronic Wounds & Hot Spots',
    'Skin Conditions & Dermatitis',
    'Ear Infections (Otitis)',
    'Degenerative Myelopathy',
    'Lick Granulomas',
    'Dental & Oral Inflammation',
    'Cancer-Related Pain Management'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Advanced Light-Based Healing Technology
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Non-invasive Class IV laser therapy that reduces pain, accelerates healing, and decreases inflammation without medications or side effects.
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

      {/* How Laser Therapy Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6 text-center">How Laser Therapy Works</h2>
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Therapeutic laser therapy, also known as photobiomodulation, delivers specific wavelengths of light energy deep into tissues. This light energy is absorbed by cells, triggering biological processes that reduce inflammation, relieve pain, and accelerate healing.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The treatment is completely painless and most pets find it very relaxing. Many show improvement after just a few sessions, though the number of treatments needed varies by condition. Sessions typically last 5-20 minutes depending on the size of the treatment area.
            </p>
          </div>
        </div>
      </section>

      {/* Why Pet Parents Choose Laser Therapy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-4 text-center">Why Pet Parents Choose Laser Therapy</h2>
          <p className="text-gray-700 text-lg text-center mb-8 leading-relaxed">
            From aging dogs with arthritis to cats recovering from surgery, laser therapy delivers measurable, lasting results across a wide range of conditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-[#b48cbf]/5 to-[#b7e1da]/5 rounded-lg p-6 border border-gray-200">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-gray-900 mb-3 font-semibold">{benefit.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laser Therapy Helps With Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-4 text-center">Laser Therapy Helps With...</h2>
          <p className="text-gray-700 text-lg text-center mb-8 leading-relaxed">
            Our veterinary laser therapy program is tailored to your pet's specific diagnosis and health history. Common conditions we treat include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-[#4a5f4d] text-white rounded-lg p-4 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#b7e1da] rounded-full flex-shrink-0" />
                <span>{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div ref={(el) => (accordionRefs.current[1] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">Is laser therapy safe for dogs and cats?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 1 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Yes. Cold laser therapy (LLLT) is FDA-cleared, extensively studied, and widely considered one of the safest modalities in veterinary rehabilitation medicine. It is non-invasive, and produces no heat damage.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div ref={(el) => (accordionRefs.current[2] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">How many sessions does my pet need?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 2 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    This varies by condition and severity. Acute injuries may respond within 3–5 sessions. Chronic conditions like arthritis typically benefit from an initial series of 6–8 sessions over 2–3 weeks, followed by periodic maintenance sessions. We include laser therapy into our physical therapy sessions.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div ref={(el) => (accordionRefs.current[3] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">Can laser therapy replace my pet's medications?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 3 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 3 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Laser therapy can significantly reduce or sometimes eliminate the need for pain medications in appropriate cases — especially NSAIDs. However, we always assess each pet individually. Our goal at Healing Paws Center is to use the least invasive, most natural approach possible while keeping your pet comfortable and safe.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">Laser Therapy in Pets</h2>
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[9/16] max-w-md w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/c34bzvgl8F0"
                title="Laser Therapy in Pets"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Pet Laser Appointments Available!</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Experience the healing power of light. Discover how laser therapy can help your pet heal faster and feel better naturally.
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
              to="/services/physical-therapy"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              View Physical Therapy Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
