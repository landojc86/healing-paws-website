import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { Leaf, AlertTriangle, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function HerbalTherapyPage() {
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

  const conditionCategories = [
    {
      category: 'Skin & Allergies',
      icon: '🌸',
      conditions: ['Environmental allergies', 'Food sensitivities', 'Hot spots & itching', 'Seborrhea & dandruff']
    },
    {
      category: 'Organs & Systems',
      icon: '❤️',
      conditions: ['Liver disease & toxin support', 'Kidney disease', 'Heart & circulation', 'Thyroid imbalance']
    },
    {
      category: 'Joints & Mobility',
      icon: '🦴',
      conditions: ['Arthritis & stiffness', 'Post-surgical recovery', 'Hip dysplasia support', 'Disc disease support']
    },
    {
      category: 'Mind & Behavior',
      icon: '🧠',
      conditions: ['Anxiety & stress', 'Thunderstorm & noise phobia', 'Cognitive dysfunction', 'Adrenal & stress disorders']
    },
    {
      category: 'Digestion & Gut',
      icon: '🔥',
      conditions: ['IBD & colitis', 'Nausea & vomiting', 'Constipation & diarrhea', 'Leaky gut & dysbiosis']
    },
    {
      category: 'Immune & Cancer',
      icon: '🛡️',
      conditions: ['Chronic infections', 'Autoimmune disease', 'Cancer support & palliation', 'Post-chemo recovery']
    }
  ];

  const antiInflammatoryHerbs = [
    {
      name: 'BOSWELLIA FRANKINCENSE',
      scientificName: 'Boswellia serrata',
      description: 'One of the most well-researched natural anti-inflammatories for pets. Inhibits inflammatory pathways without GI or kidney side effects of NSAIDs. Excellent for arthritis, joint pain, and inflammatory bowel disease in dogs and cats.'
    },
    {
      name: 'GOLDEN SPICE',
      scientificName: 'Turmeric / Curcumin',
      description: 'Potent anti-inflammatory and antioxidant. Supports joint health, digestive function, liver health, and may have anti-cancer properties. Must be properly formulated for bioavailability in pets — we prescribe the right form and dose.'
    },
    {
      name: 'DEVIL\'S CLAW',
      scientificName: 'Harpagophytum procumbens',
      description: 'Traditional African herb with powerful anti-inflammatory and analgesic properties. Particularly effective for musculoskeletal pain, arthritis, and post-surgical recovery in dogs. Not recommended in cats.'
    },
    {
      name: 'WILLOW BARK',
      scientificName: 'Salix alba',
      description: 'Nature\'s original aspirin. Contains salicylates that reduce pain and inflammation naturally. Used carefully in dogs for musculoskeletal conditions — always dosed precisely and not used in cats.'
    }
  ];

  const immuneHerbs = [
    {
      name: 'ECHINACEA',
      scientificName: 'Echinacea purpurea',
      description: 'One of the most popular immune-stimulating herbs for pets. Supports immune response during infection, respiratory illness, and recovery from illness. Used in short courses rather than continuously for best effect.'
    },
    {
      name: 'ASTRAGALUS',
      scientificName: 'Astragalus membranaceus',
      description: 'A revered adaptogenic herb from Chinese medicine. Supports deep immune function, adrenal health, and overall vitality. Excellent for immunocompromised pets, cancer support, and chronic illness.'
    },
    {
      name: 'MEDICINAL MUSHROOMS',
      scientificName: 'Reishi, Turkey Tail, Shiitake',
      description: 'Powerful immunomodulating fungi with significant research support in veterinary oncology. Turkey Tail in particular has shown remarkable results in extending survival in dogs with certain cancers. Also support gut health and energy.'
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
              Herbal Therapy for Dogs & Cats in Fort Lauderdale
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Natural plant-based remedies and Traditional Chinese Veterinary Medicine herbs to support healing, reduce inflammation, boost immunity, and maintain optimal health.
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

      {/* What is Herbal Therapy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Herbal therapy — also called botanical medicine or phytotherapy — is the use of plants and plant-derived substances to prevent, treat, and manage disease in animals. It is one of the oldest forms of medicine on earth, used across virtually every human culture for thousands of years, and the very foundation from which much of modern pharmacology was derived.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              In veterinary herbal medicine, carefully selected plants are used in whole or concentrated form to support your pet's organs, immune system, nervous system, digestion, skin, joints, and more. Unlike isolated pharmaceutical compounds, whole plant medicines contain hundreds of synergistic compounds that work together — often more safely and gently than synthetic drugs.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions We Address Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-4 text-center">Conditions we address with herbal therapy</h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-8">
            Herbal medicine can play a meaningful therapeutic role across a wide spectrum of pet health conditions — from everyday wellness support to complex chronic disease management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditionCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-3xl mb-3">{category.icon}</div>
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

      {/* Powerful Herbs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-4 text-center">Powerful Herbs We use for Cats and Dogs</h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-8">
            Our herbal prescribing draws from Western and Chinese botanical traditions. Here are some of the most commonly used and evidence-supported herbs in our veterinary herbal practice.
          </p>

          {/* Anti-Inflammatory & Pain Relief */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-[#b48cbf]">
              ANTI-INFLAMMATORY & PAIN RELIEF
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {antiInflammatoryHerbs.map((herb, index) => (
                <div key={index} className="bg-gradient-to-br from-[#b48cbf]/5 to-[#b7e1da]/5 rounded-lg p-6 border border-gray-200">
                  <h4 className="text-[#b48cbf] font-bold mb-1">{herb.name}</h4>
                  <p className="text-gray-600 italic text-lg mb-3">{herb.scientificName}</p>
                  <p className="text-gray-700 text-lg leading-relaxed">{herb.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Immune System Support */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-[#b48cbf]">
              IMMUNE SYSTEM SUPPORT
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {immuneHerbs.map((herb, index) => (
                <div key={index} className="bg-gradient-to-br from-[#b48cbf]/5 to-[#b7e1da]/5 rounded-lg p-6 border border-gray-200">
                  <h4 className="text-[#b48cbf] font-bold mb-1">{herb.name}</h4>
                  <p className="text-gray-600 italic text-lg mb-3">{herb.scientificName}</p>
                  <p className="text-gray-700 text-lg leading-relaxed">{herb.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Warning Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-10 h-10 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-gray-900 mb-4">Important: Herbal safety is different for cats vs. dogs</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  This is one of the most critical aspects of veterinary herbal medicine — and a major reason why professional guidance matters. <strong>Cats are not small dogs.</strong> They lack certain liver enzymes that metabolize many plant compounds, making them far more sensitive to herbal toxicity than dogs.
                </p>
                <p className="text-lg">
                  Common herbs that are <strong>safe and beneficial for dogs</strong> can be <strong>toxic or even fatal for cats</strong> — including tea tree oil, pennyroyal, certain essential oils, and high doses of several medicinal herbs. Even "natural" or "herbal" products from pet stores may not be safe for cats.
                </p>
                <p className="text-orange-700 font-semibold text-lg">
                  This is exactly why you should never give your cat herbal remedies without guidance from a qualified holistic veterinarian. At Healing Paws Center, all of our herbal protocols are species-specific, carefully dosed, and safe for your individual pet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Herbal therapy for pets – FAQ</h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div ref={(el) => (accordionRefs.current[1] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">Can I just buy herbal supplements from a pet store?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 1 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    We strongly advise against self-prescribing herbal supplements for your pet without veterinary guidance. The pet supplement industry is largely unregulated — products vary wildly in quality, potency, and accuracy of labeling. More importantly, what's appropriate for one pet may be harmful to another. Species differences (especially cat vs. dog), concurrent medications, organ function, and individual health history all affect which herbs are safe and effective. Please consult us before starting any herbal protocol.
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
                <span className="font-semibold text-gray-900">Can herbal therapy be used with my pet's current medications?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 2 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-4">
                    Often yes — but this requires careful professional assessment. Some herbs can interact with pharmaceutical drugs: for example, milk thistle may affect how the liver processes certain medications, and St. John's Wort (not commonly used in pets) has significant drug interactions.
                  </p>
                  <p className="text-gray-600 text-lg">
                    We review your pet's complete medication list at every consultation and select herbs that are safe to combine with their current treatment. In many cases, herbal therapy can actually help reduce the dose or duration of pharmaceutical drugs needed over time.
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
                <span className="font-semibold text-gray-900">My pet has already seen a conventional vet. Can I still try herbal therapy?</span>
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
          <h2 className="text-white mb-6">Ready to Explore Herbal Therapy for Your Pet?</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Schedule a consultation to discover how herbal medicine can support your pet's health naturally and effectively.
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
