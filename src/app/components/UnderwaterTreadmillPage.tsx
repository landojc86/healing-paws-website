import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { ChevronDown, Star } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function UnderwaterTreadmillPage() {
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
    { name: 'Hip & Elbow Dysplasia', link: '/common-ailments/hip-elbow-dysplasia' },
    { name: 'TPLO / Cruciate Repair Recovery', link: '/common-ailments/post-tplo-tta-ccl-surgery' },
    { name: 'Intervertebral Disc Disease (IVDD)', link: '/common-ailments/spinal-injury' },
    { name: 'Degenerative Myelopathy', link: '/common-ailments/senior-neurologic' },
    { name: 'Fibrocartilaginous Embolism (FCE)', link: null },
    { name: 'Osteoarthritis & Spondylosis', link: '/common-ailments/arthritis' },
    { name: 'Obesity & Weight Management', link: null },
    { name: 'Post-Fracture Rehabilitation', link: null },
    { name: 'Muscle Atrophy & Weakness', link: null },
    { name: 'Stroke / Neurological Recovery', link: null },
    { name: 'Pre-Surgical Conditioning', link: null },
    { name: 'Chronic Lameness & Gait Issues', link: null }
  ];

  const firstSessionSteps = [
    {
      number: '1',
      title: 'Holistic Assessment',
      description: 'Your integrative vet reviews history, conducts a gait and mobility evaluation, and designs a personalized aquatic protocol.'
    },
    {
      number: '2',
      title: 'Tank Introduction',
      description: 'Your pet is gently guided into the tank as water rises to the therapeutic level. A therapist is always hands-on throughout.'
    },
    {
      number: '3',
      title: 'Active Session',
      description: 'Belt speed and water level are adjusted for your pet\'s specific needs. Sessions last 30–40 minutes.'
    }
  ];

  const testimonials = [
    {
      text: '"After Biscuit\'s TPLO surgery, the surgeon said he\'d be limping for months. After six underwater treadmill sessions at Healing Paws, he was walking normally. We were blown away."',
      author: 'Maria T., Labrador mom',
      location: 'Fort Lauderdale'
    },
    {
      text: '"Our 14-year-old golden couldn\'t climb stairs anymore. Three weeks of aquatic therapy and she\'s back on the bed every night. I genuinely didn\'t think that was possible."',
      author: 'James R., senior dog dad',
      location: 'Boca Raton'
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
              Underwater Treadmill (Hydrotherapy)
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Low-impact aquatic therapy that builds strength, improves mobility, and accelerates recovery while reducing stress on joints and supporting cardiovascular health.
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

      {/* Common Conditions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">Common Conditions That Respond Well</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center gap-3 group hover:border-[#b48cbf]/30"
              >
                <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                {condition.link ? (
                  <Link to={condition.link} className="text-[#b48cbf] hover:text-[#9d6fa8] font-medium text-lg transition-colors">
                    {condition.name}
                  </Link>
                ) : (
                  <p className="text-gray-700 font-medium text-lg">{condition.name}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">See Hydrotherapy in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/EenpyLnVwZM"
                title="Callie in Hydrotherapy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VNoGlV8AlPA"
                title="Barnabus in Hydrotherapy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/R5HXqms_Kd8"
                title="Emi in Hydrotherapy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Your Pet's First Session */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-gray-500 uppercase tracking-wide text-lg mb-2">WHAT TO EXPECT</p>
            <h2 className="text-gray-900 mb-4">Your Pet's First Session</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              Calm, gentle, and always at your pet's pace. Most animals warm up to the water within minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firstSessionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-gray-900 mb-3 font-semibold">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-gray-500 uppercase tracking-wide text-lg mb-2">PET PARENT STORIES</p>
            <h2 className="text-gray-900 mb-12">Paws on the Treadmill, Tails in the Air</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
                <p className="text-gray-900 font-semibold">— {testimonial.author}</p>
                <p className="text-gray-500 text-lg">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Your Questions, Answered</h2>
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div ref={(el) => (accordionRefs.current[1] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">Does my pet need to know how to swim?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 1 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-4">
                    Not at all. The underwater treadmill is VERY different from a pool — your pet walks or trots on a belt, and the water level is adjusted so they can keep their head comfortably above water.
                  </p>
                  <p className="text-gray-600 text-lg">
                    Our team supports and guides every pet, and many dogs who dislike water become enthusiastic treadmill walkers within their first session. We ALWAYS utilize positive reinforcement (and LOVE to use treats!).
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
                <span className="font-semibold text-gray-900 text-lg">How soon after surgery can my pet start?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 2 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-4">
                    This depends on the procedure and your surgeon's clearance, but many dogs begin aquatic rehab within 10–14 days post surgery.
                  </p>
                  <p className="text-gray-600 text-lg">
                    Early movement in water is shown to significantly reduce muscle atrophy and shorten total recovery time. We coordinate directly with your surgeon.
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
                <span className="font-semibold text-gray-900 text-lg">How many sessions will my pet need?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 3 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 3 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Acute post-surgical cases typically need 8–12 sessions over 4–6 weeks. Chronic conditions like arthritis often benefit from ongoing monthly – twice monthly maintenance sessions after an initial series. Your holistic vet will reassess progress regularly and adjust the plan accordingly.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div ref={(el) => (accordionRefs.current[4] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 4 ? null : 4)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">Is underwater treadmill therapy safe for cats?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 4 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 4 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Yes — we treat cats with neurological conditions, post-surgical recovery, and obesity using our underwater treadmill. Feline sessions require a different approach (slower acclimation, shallower water levels, and an exceptionally patient therapist), but the physiological benefits are equally powerful for cats.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div ref={(el) => (accordionRefs.current[5] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 5 ? null : 5)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">Can underwater therapy be combined with laser therapy?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 5 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 5 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Absolutely — and this combination is one of our most popular holistic protocols. Cold laser therapy before or after an aquatic session amplifies the anti-inflammatory, pain-relieving, and tissue-healing effects of both modalities. Many of our patients receive combination therapy on the same visit.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div ref={(el) => (accordionRefs.current[6] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 6 ? null : 6)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">Is the underwater treadmill different from taking my dog to swim in the pool, ocean, or lake?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 6 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 6 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-4">
                    <strong>Yes!</strong> Our Underwater Treadmill allows for a slowed, low-impact gait which can only be safely achieved in these controlled conditions.
                  </p>
                  <p className="text-gray-600 text-lg mb-4">
                    With this therapy, we can <strong>improve range of motion</strong> (so your pet can jump into your car), <strong>decrease pain</strong> (so your pet can get up on their own without any help), and <strong>retrain gait</strong> (so your pet can make it that extra block on their daily walk).
                  </p>
                  <p className="text-gray-600 text-lg">
                    We control the water depth, walking speed of the treadmill, and presence/absence of resistance jets with our Underwater Treadmill.
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
          <h2 className="text-white mb-6">Pet Hydrotherapy Appointments Available!</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Schedule a consultation to explore how underwater treadmill therapy can help your pet move freely and pain-free.
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
