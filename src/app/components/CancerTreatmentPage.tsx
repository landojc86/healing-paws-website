import { Check, HeartPulse, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useState, useRef, useEffect } from 'react';

export function CancerTreatmentPage() {
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
      
      {/* Banner Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Integrative Cancer Care for Dogs & Cats
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Holistic cancer treatment combining acupuncture, targeted botanicals, ozone therapy, and immune support to complement conventional care and improve quality of life.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg sm:text-lg w-full sm:w-auto"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* Introduction - Holistic Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-4 text-center">Our Holistic Approach to Cancer Care</h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            We offer a better path forward—one that works with your pet's body, not against it.
          </p>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12">
            {/* Conventional Card */}
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 relative">
              <div className="absolute -top-3 left-6 bg-gray-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Traditional Route
              </div>
              <h3 className="text-gray-900 mb-4 mt-2">Conventional Approaches</h3>
              <ul className="space-y-3 text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg">Surgery</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg">Surgery and chemotherapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg">Radiation</span>
                </li>
              </ul>
              <div className="bg-white rounded-lg p-3 border-l-4 border-gray-400">
                <p className="text-gray-600 text-lg italic">May or may not be curative</p>
              </div>
            </div>

            {/* Holistic Card - Emphasized */}
            <div className="bg-gradient-to-br from-[#b7e1da]/20 to-[#b48cbf]/20 rounded-lg p-6 border-2 border-[#b48cbf] shadow-lg relative">
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Our Holistic Approach</span>
              </div>
              <h3 className="text-gray-900 mb-4 mt-2 font-bold">Holistic Treatment Focus</h3>
              <p className="text-gray-700 text-lg mb-4">
                Holistic treatment by a holistic veterinarian focuses on treating the patient with more natural treatment options that are:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#b48cbf] mt-0.5 flex-shrink-0" />
                  <span className="text-lg font-medium">Much less invasive</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#b48cbf] mt-0.5 flex-shrink-0" />
                  <span className="text-lg font-medium">More supportive of natural healing by the body</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#b48cbf] mt-0.5 flex-shrink-0" />
                  <span className="text-lg font-medium">Encourage the body's natural ability to protect and regulate itself</span>
                </li>
              </ul>
              <div className="bg-white/80 rounded-lg p-4 border-l-4 border-[#b48cbf]">
                <p className="text-gray-800 text-lg font-semibold">
                  These treatments can be complementary or utilized as the sole therapy to fight cancer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Services - Accordion Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Integrative Cancer Therapies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our comprehensive range of treatments designed to support your pet's healing and improve quality of life during cancer care.
            </p>
          </div>

          <div className="space-y-4">
            {/* Acupuncture */}
            <div ref={(el) => (accordionRefs.current[0] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 0 ? null : 0)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">Acupuncture</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 0 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 0 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-4">
                    Acupuncture works on several levels to combat cancer and its effects including:
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-gray-900 font-semibold mb-2">1. Enhancing the immune system function</h4>
                      <p className="text-gray-600 text-lg">
                        Studies have demonstrated that acupuncture can encourage the production of such cancer-killing cells as T-lymphocytes, macrophages, and natural killer cells.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-gray-900 font-semibold mb-2">2. Decreasing pain</h4>
                      <p className="text-gray-600 text-lg">
                        Acupuncture causes the natural release of the "feel good" neurotransmitters such as norepinephrine, and dopamine.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-gray-900 font-semibold mb-2">3. Increased appetite and energy</h4>
                      <p className="text-gray-600 text-lg">
                        This can be the most beneficial effect of acupuncture. Cancer causes animals to just feel tired, drained, and sad. Acupuncture is a natural way to treat these symptoms of cancer. Most owners will comment on how active and energetic their pets are after their treatments.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#b7e1da]/20 rounded-lg p-5 border-l-4 border-[#b48cbf]">
                    <h4 className="text-gray-900 font-semibold mb-3">For Pets Undergoing Chemotherapy and Radiation</h4>
                    <p className="text-gray-600 text-lg mb-3 text-lg">
                      Studies have demonstrated that acupuncture can help <strong>REDUCE the unwanted side effects of chemotherapy:</strong>
                    </p>
                    <ul className="space-y-2 text-gray-600 text-lg">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#b48cbf] flex-shrink-0" />
                        <span>Nausea/vomiting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#b48cbf] flex-shrink-0" />
                        <span>Decreased energy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#b48cbf] flex-shrink-0" />
                        <span>Decreased appetite</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#b48cbf] flex-shrink-0" />
                        <span>Weight loss</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-4 text-lg">
                      Additionally, acupuncture can boost your pet's overall immune system function in the body. Acupuncture can help keep white blood cell and red blood cell levels within normal range during chemotherapy – <strong>with NO side effects.</strong>
                    </p>
                  </div>

                  <Link 
                    to="/services/acupuncture"
                    className="inline-block mt-4 text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors"
                  >
                    Learn More About Acupuncture →
                  </Link>
                </div>
              )}
            </div>

            {/* Targeted Botanicals */}
            <div ref={(el) => (accordionRefs.current[1] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">Targeted Botanicals and Herbal Therapy</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 1 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-6">
                    We use Traditional Chinese Veterinary Medicine (TCVM) herbal therapy and targeted botanicals as part of our integrative cancer care approach.
                  </p>

                  <h4 className="text-gray-900 font-semibold mb-3">How Can These Therapies Help?</h4>
                  <p className="text-gray-600 text-lg mb-4">These therapies are designed to help:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-lg">Support the immune system</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-lg">Regulate inflammation</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-lg">Improve quality of life for pets facing cancer</span>
                    </li>
                  </ul>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="text-gray-900 font-semibold mb-2">Boswellia Serrata (Frankincense)</h5>
                      <p className="text-gray-600 text-lg">
                        A botanical extract that has gained attention in both human and veterinary integrative oncology.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="text-gray-900 font-semibold mb-2">Turkey Tail Mushroom</h5>
                      <p className="text-gray-600 text-lg">
                        Scientifically known as <em>Trametes versicolor</em>, this is one of the most widely researched medicinal mushrooms used in integrative oncology. It contains biologically active compounds called polysaccharide-K (PSK) and polysaccharopeptide (PSP), which have been studied for their ability to support immune system activity and cellular health.
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/services/herbal-therapy"
                    className="inline-block mt-4 text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors"
                  >
                    Learn More About Herbal Therapy →
                  </Link>
                </div>
              )}
            </div>

            {/* Vitamin C Therapy */}
            <div ref={(el) => (accordionRefs.current[2] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">Vitamin C Therapy</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 2 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-6">
                    Vitamin C therapy for pets is an emerging integrative treatment used to support the immune system, reduce inflammation, and promote healing in dogs and cats.
                  </p>

                  <h4 className="text-gray-900 font-semibold mb-3">How Does Vitamin C Therapy Work?</h4>
                  <p className="text-gray-600 text-lg mb-4">There are two options for Vitamin C:</p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="text-gray-900 font-semibold mb-2">Low-dose Vitamin C</h5>
                      <p className="text-gray-600 text-lg">
                        Supports general wellness and immune health. At these levels, vitamin C acts as an antioxidant, helping reduce everyday inflammation, support skin health, and aid in recovery from mild illness or stress.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="text-gray-900 font-semibold mb-2">High-dose Vitamin C</h5>
                      <p className="text-gray-600 text-lg">
                        Used therapeutically for more complex conditions like chronic disease, cancer support, or significant inflammation. At higher doses—especially when given intravenously—vitamin C can have a pro-oxidant effect, helping target abnormal cells, reduce oxidative stress at a deeper level, and support more intensive healing.
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/services/vitamin-c-therapy"
                    className="inline-block mt-4 text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors"
                  >
                    Learn More About Vitamin C Therapy →
                  </Link>
                </div>
              )}
            </div>

            {/* Ozone Therapy */}
            <div ref={(el) => (accordionRefs.current[3] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">Ozone Therapy</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 3 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 3 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-6">
                    Ozone therapy uses medical-grade ozone (O₃), a highly energized form of oxygen, to improve oxygen utilization and supporting the body's natural defenses.
                  </p>

                  <h4 className="text-gray-900 font-semibold mb-3">How Can Ozone Help My Pet?</h4>
                  <p className="text-gray-600 text-lg mb-4">Ozone therapy allows for:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-lg">Improved oxygen delivery</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-lg">Stimulating immune signaling pathways</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-lg">Reduction of inflammation</span>
                    </li>
                  </ul>

                  <p className="text-gray-600 text-lg">
                    The American Academy of Ozonotherapy holds a wealth of information and research-based evidence on this amazing modality at{' '}
                    <a href="https://www.aaot.us" target="_blank" rel="noopener noreferrer" className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold">
                      www.aaot.us
                    </a>.
                  </p>

                  <Link
                    to="/services/ozone-therapy"
                    className="inline-block mt-4 text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors"
                  >
                    Learn More About Ozone Therapy →
                  </Link>
                </div>
              )}
            </div>

            {/* Mistletoe Therapy */}
            <div ref={(el) => (accordionRefs.current[4] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 4 ? null : 4)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">Mistletoe Therapy</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 4 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 4 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-6">
                    Mistletoe therapy has been used in human integrative cancer care for decades, particularly in Europe, to support immune function and improve quality of life during cancer treatment.
                  </p>

                  <h4 className="text-gray-900 font-semibold mb-3">What is Mistletoe Therapy?</h4>
                  <p className="text-gray-600 text-lg mb-6">
                    Mistletoe therapy uses extracts from the plant <em>Viscum album</em>, a medicinal botanical that has been widely studied for its immune-modulating and supportive properties. Mistletoe extracts contain biologically active compounds such as mistletoe lectins and viscotoxins, which may help stimulate immune responses and support the body during cancer treatment.
                  </p>

                  <h4 className="text-gray-900 font-semibold mb-3">How Does It Work?</h4>
                  <p className="text-gray-600 text-lg mb-4">Mistletoe therapy allows for:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-lg">Stimulation of immune system to recognize and respond to abnormal cells → activating natural killer cells and more</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-lg">Regulate inflammatory response</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-lg">Improve quality of life</span>
                    </li>
                  </ul>

                  <Link
                    to="/services/mistletoe-therapy"
                    className="inline-block mt-4 text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors"
                  >
                    Learn More About Mistletoe Therapy →
                  </Link>
                </div>
              )}
            </div>

            {/* FMBRT */}
            <div ref={(el) => (accordionRefs.current[5] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 5 ? null : 5)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">Fecal Microbiome Restoration Therapy (FMBRT)</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 5 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 5 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-6">
                    At Healing Paws Center (Oakland Park, FL), we offer Fecal Microbiome Transplantation (FMBRT)—a targeted way to restore gut microbial balance in dogs and cats. Because approximately 70% of the immune system is associated with the gastrointestinal tract, the health of the gut microbiome can strongly influence immune responses throughout the body.
                  </p>

                  <h4 className="text-gray-900 font-semibold mb-3">What is FMBRT?</h4>
                  <p className="text-gray-600 text-lg mb-6">
                    FMBRT transfers carefully screened intestinal microbes from a healthy donor to a patient to reseed a resilient, diverse microbiome, which can relieve GI signs and support mucosal healing when standard therapies have fallen short. At Healing Paws Center we utilize a unique combination of capsules, enemas, as well as ozone therapy. Your pet will not need to be put under anesthesia. The entire process takes about 30 minutes.
                  </p>

                  <h4 className="text-gray-900 font-semibold mb-3">Conditions We Commonly Treat with FMT</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-[#b48cbf] mt-1 flex-shrink-0" />
                      <span>Cancer</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-[#b48cbf] mt-1 flex-shrink-0" />
                      <span>Chronic vomiting or diarrhea – such as chronic enteropathy / IBD (vomiting, diarrhea, weight loss, hypoalbuminemia in some cases)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-[#b48cbf] mt-1 flex-shrink-0" />
                      <span>Severe Skin Allergies or Yeast overgrowth</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-[#b48cbf] mt-1 flex-shrink-0" />
                      <span>Any patients suffering from cancer</span>
                    </li>
                  </ul>

                  <div className="bg-[#b7e1da]/20 rounded-lg p-5 border-l-4 border-[#b48cbf]">
                    <h4 className="text-gray-900 font-semibold mb-3">How Can FMBRT Help My Pet Suffering from Cancer?</h4>
                    <p className="text-gray-600 text-lg mb-3 text-lg">
                      Emerging research in human oncology suggests that the gut microbiome may influence how patients respond to certain cancer therapies.
                    </p>
                    <p className="text-gray-600 text-lg">
                      Healthy gut bacteria interact closely with the immune system. Restoring beneficial microbes may help support balanced immune responses.
                    </p>
                  </div>

                  <Link
                    to="/services/fmbrt"
                    className="inline-block mt-4 text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors"
                  >
                    Learn More About FMBRT →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Support Your Pet's Cancer Journey</h2>
          <p className="text-white/95 text-lg mb-8">
            Schedule a consultation to learn how our integrative cancer care can provide comfort and support for your beloved companion.
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
