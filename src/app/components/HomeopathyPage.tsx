import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function HomeopathyPage() {
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

  const principles = [
    {
      title: 'Like cures like',
      description: 'Remedies made from substances that mirror the pet\'s symptoms trigger natural healing'
    },
    {
      title: 'Highly diluted',
      description: 'Remedies are diluted and succussed, making them potent yet completely non-toxic'
    },
    {
      title: 'Treats the whole pet',
      description: 'Physical symptoms, personality, fears, and history all guide the remedy selection'
    },
    {
      title: 'Minimum dose',
      description: 'The smallest effective dose is used to gently stimulate healing without overwhelming'
    }
  ];

  const conditionCategories = [
    {
      category: 'Skin & Coat',
      conditions: ['Allergies & chronic itching', 'Hot spots & rashes', 'Hair loss & dry skin', 'Recurring ear infections']
    },
    {
      category: 'Mind & Behavior',
      conditions: ['Separation anxiety', 'Fear & phobias', 'Aggression & trauma', 'Cognitive decline in seniors']
    },
    {
      category: 'Joints & Muscles',
      conditions: ['Arthritis & stiffness', 'Hip dysplasia support', 'Post-surgery recovery', 'Spinal issues']
    },
    {
      category: 'Organs & Systems',
      conditions: ['Kidney & liver disease', 'Digestive disorders & IBD', 'Thyroid & hormonal issues', 'Urinary tract problems']
    },
    {
      category: 'Immune & Chronic',
      conditions: ['Autoimmune disease', 'Recurrent infections', 'Cancer support & palliation', 'Vaccine reaction recovery']
    },
    {
      category: 'Cat Specialties',
      conditions: ['FIV & FeLV support', 'Hyperthyroidism', 'Feline asthma', 'Litter box avoidance']
    }
  ];

  const remedies = [
    {
      name: 'ARNICA MONTANA',
      uses: 'Trauma, bruising, muscle soreness, post-surgery recovery, shock'
    },
    {
      name: 'APIS MELLIFICA',
      uses: 'Bee stings, allergic swelling, urinary issues, hot inflamed skin'
    },
    {
      name: 'NUX VOMICA',
      uses: 'Digestive upset, vomiting, irritability, over-indulgence, constipation'
    },
    {
      name: 'PULSATILLA',
      uses: 'Clingy anxious pets, ear infections, eye discharge, hormonal issues'
    },
    {
      name: 'SULPHUR',
      uses: 'Chronic skin conditions, itching, smelly coats, digestive weakness'
    },
    {
      name: 'PHOSPHORUS',
      uses: 'Fearful sensitive pets, bleeding disorders, liver issues, thunderstorm fear'
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
              Homeopathy for Dogs & Cats in Fort Lauderdale
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Gentle, individualized homeopathic remedies that stimulate your pet's natural healing response, treating the whole animal with highly diluted natural substances and minimal side effects.
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

      {/* What is Homeopathy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Homeopathy is a complete natural healing system developed over 200 years ago, now widely used for both humans and animals. It's based on the principle that <strong>"like cures like"</strong> — a substance that causes symptoms in a healthy body can, in highly diluted form, cure those same symptoms in a sick body. The result? Your pet's own healing intelligence is awakened and guided back to balance.
            </p>
          </div>
        </div>
      </section>

      {/* Four Key Principles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6 text-center">Four Key Principles of Homeopathy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border-2 border-[#b7e1da]">
                <h3 className="text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 text-lg">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-4 text-center">What can Homeopathy treats in cats and dogs?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Homeopathic veterinary medicine can be effective for a remarkably wide range of conditions — acute and chronic, physical and emotional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditionCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-[#b48cbf]/10 to-[#b7e1da]/10 rounded-lg p-6">
                <h3 className="text-gray-900 mb-4 font-semibold">{category.category}</h3>
                <div className="space-y-2">
                  {category.conditions.map((condition, condIndex) => (
                    <div key={condIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#b48cbf] rounded-full flex-shrink-0 mt-2" />
                      <p className="text-gray-700 text-lg">{condition}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Remedies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-4 text-center">Common homeopathic remedies for pets</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Here are some of the most frequently used remedies in veterinary homeopathy. Your pet's specific remedy is chosen based on their complete individual picture — never just one symptom.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remedies.map((remedy, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-gray-900 mb-2 font-semibold text-lg">{remedy.name}</h3>
                <p className="text-gray-600 text-lg">{remedy.uses}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">FAQs about homeopathy for pets</h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div ref={(el) => (accordionRefs.current[1] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">Can homeopathy be used alongside my pet's current medications?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 1 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-4">
                    In most cases, yes.
                  </p>
                  <p className="text-gray-600 text-lg">
                    Homeopathic remedies are generally compatible with conventional medications and do not cause drug interactions in the traditional chemical sense. We review your pet's full medication list at the initial consultation. In some cases, certain medications (particularly steroids) can interfere with the action of remedies — we'll discuss this openly and work with you to create the safest, most effective integrated plan. We often collaborate with your existing conventional vet too.
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
                <span className="font-semibold text-gray-900">Can homeopathy help my senior pet without the risks of Conventional drugs?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 2 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Absolutely — this is one of homeopathy's greatest strengths. Senior pets often have compromised kidney or liver function, making many conventional medications risky or off-limits. Homeopathic remedies are completely non-toxic and place zero burden on the organs. They can effectively manage pain, inflammation, cognitive decline, anxiety, and many chronic conditions in older cats and dogs — improving quality of life and comfort during the golden years without the worry of drug side effects.
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
                <span className="font-semibold text-gray-900">My pet has already seen a conventional vet. Can I still try homeopathy?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 3 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 3 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Absolutely. Many of our clients come to us after conventional treatment hasn't fully resolved their pet's issues, or when they want to reduce their pet's reliance on long-term medications. We fully respect and often work alongside conventional veterinary care. We'll review all existing diagnoses, test results, and treatments so we can build a holistic plan that complements — and where possible, improves upon — what your pet is already receiving.
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
          <h2 className="text-white mb-6">Ready to Explore Homeopathy for Your Pet?</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Schedule a consultation to discover how homeopathy can awaken your pet's healing intelligence and guide them back to balance.
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
              to="/services/integrative-holistic"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              View All Holistic Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
