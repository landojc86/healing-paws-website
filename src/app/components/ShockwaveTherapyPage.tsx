import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { Activity, ChevronDown, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { PawIcon } from './icons/PawIcon';

export function ShockwaveTherapyPage() {
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

  const traditionalMeds = [
    'Long-term use damages liver and kidneys',
    'Mask pain without healing the source',
    'Do not slow or reverse joint degeneration',
    'Risk of GI issues, immune suppression',
    'Require daily dosing for ongoing effect'
  ];

  const shockwaveBenefits = [
    'Zero drug side effects on organs',
    'Stimulates actual tissue healing',
    'Research supports slowing arthritis progression',
    'No daily medication needed',
    'Results build over a short treatment series'
  ];

  const howItWorks = [
    'Increased blood flow to injured tissue',
    'Release of natural growth factors',
    'Enhanced bone remodeling',
    'Improved tendon & ligament fiber alignment',
    'Reduced pain signaling & inflammation'
  ];

  const conditions = [
    {
      title: 'Osteoarthritis — hip & elbow dysplasia',
      result: 'Improved gait symmetry and reduced chronic joint pain'
    },
    {
      title: 'Supraspinatus tendinopathy',
      result: 'Reduced shoulder pain and restored range of motion'
    },
    {
      title: 'Iliopsoas tendinopathy & muscle strain',
      result: 'Less pain during activity and improved hind-end function'
    },
    {
      title: 'Biceps tendinopathy',
      result: 'Decreased forelimb lameness and improved function'
    },
    {
      title: 'Delayed healing post-TPLO & orthopedic surgery',
      result: 'Accelerated bone remodeling and faster return to weight-bearing'
    },
    {
      title: 'Chronic back pain & spinal conditions',
      result: 'Non-invasive relief without medication escalation'
    }
  ];

  const keyBenefits = [
    {
      title: 'No sedation needed',
      description: 'Completely non-invasive — most pets relax or even fall asleep during treatment'
    },
    {
      title: 'Drug-free pain relief',
      description: 'Reduces or eliminates reliance on NSAIDs and steroids that stress the liver and kidneys'
    },
    {
      title: 'Stimulates real healing',
      description: 'Triggers growth factors and blood flow to repair tissue — not just mask symptoms'
    },
    {
      title: 'Slows arthritis progression',
      description: 'Research supports ESWT as a disease-modifying therapy, not just temporary relief'
    },
    {
      title: 'Restores senior pet mobility',
      description: 'Gentle enough for aging dogs and cats — improves comfort and activity levels'
    },
    {
      title: 'Speeds surgical recovery',
      description: 'Accelerates bone and soft tissue healing after TPLO, fracture repair, and more'
    },
    {
      title: 'Pairs with holistic care',
      description: 'Enhances results when combined with acupuncture, rehab therapy, and joint supplements'
    },
    {
      title: 'Proven in sports medicine',
      description: 'Widely used in human athletes — the same healing science applied to your pet'
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
              Shockwave Therapy for Dogs & Cats
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Advanced acoustic wave therapy that stimulates tissue repair, reduces chronic pain, and accelerates healing for arthritis, tendon injuries, and post-surgical recovery.
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

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-[#b48cbf] rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 font-semibold">No sedation required</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#b7e1da] rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 font-semibold">Drug-free pain relief</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#b48cbf] rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 font-semibold">Non-invasive</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#b7e1da] rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 font-semibold">Used in human sports medicine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shockwave Instead of NSAIDs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Why Shockwave Therapy Instead of NSAIDs or Steroids?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-red-200">
              <h3 className="text-gray-900 mb-4">Traditional Medications (NSAIDs & Steroids)</h3>
              <div className="space-y-3">
                {traditionalMeds.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-gray-600 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-[#b7e1da]">
              <h3 className="text-gray-900 mb-4">Shockwave Therapy (ESWT)</h3>
              <div className="space-y-3">
                {shockwaveBenefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#b48cbf] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6 text-center">How Does Veterinary Shockwave Therapy Work?</h2>
          <p className="text-gray-700 text-lg text-center mb-8 leading-relaxed">
            Extracorporeal Shockwave Therapy delivers precisely controlled acoustic sound pulses deep into musculoskeletal tissues. These pulses trigger the body's own repair processes — no incision, no anesthesia, no downtime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {howItWorks.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                <PawIcon className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">What Shockwave Therapy Can Heal in Your Pet</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => {
              const images = [
                'https://images.unsplash.com/photo-1620020488421-3f890d36d6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
                'https://images.unsplash.com/photo-1700045236823-30bc469f7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
                'https://images.unsplash.com/photo-1705769948211-703a092f107a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
                'https://images.unsplash.com/photo-1586015512653-9c6a3416ba5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
                'https://images.unsplash.com/photo-1765604551468-2b012465ba59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
                'https://images.unsplash.com/photo-1616853107501-b6a302d3b0e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
              ];

              return (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={images[index]}
                      alt={condition.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-900 font-semibold mb-2">{condition.title}</h3>
                    <p className="text-gray-600 text-lg">{condition.result}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Frequently Asked Questions About ESWT for Pets</h2>

          <div className="space-y-4">
            <div ref={(el) => (accordionRefs.current[0] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 0 ? null : 0)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">Is shockwave therapy safe for dogs and cats?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openAccordion === 0 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 0 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Yes. Veterinary ESWT is a well-established, non-invasive modality with an excellent safety profile. It does not require sedation, produces no radiation, and carries none of the organ-level risks associated with long-term NSAID or steroid use.
                  </p>
                </div>
              )}
            </div>

            <div ref={(el) => (accordionRefs.current[1] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">How soon will my pet see results from shockwave therapy?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openAccordion === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 1 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Many pet owners notice improved mobility and reduced pain signs within 2–3 sessions. Because ESWT stimulates genuine tissue healing rather than just masking pain, improvements tend to accumulate and can be long-lasting with a full course of treatment.
                  </p>
                </div>
              )}
            </div>

            <div ref={(el) => (accordionRefs.current[2] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">Can shockwave therapy be combined with other treatments?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openAccordion === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 2 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Absolutely — and we encourage it. ESWT integrates seamlessly with veterinary acupuncture, <Link to="/services/underwater-treadmill" className="text-[#b48cbf] hover:text-[#9d6fa8] transition-colors">underwater treadmill therapy</Link>, laser therapy, joint supplements, and targeted rehabilitation exercises. This multimodal approach is the foundation of integrative veterinary rehabilitation.
                  </p>
                </div>
              )}
            </div>

            <div ref={(el) => (accordionRefs.current[3] = el)} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">Is shockwave therapy right for my senior dog with arthritis?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openAccordion === 3 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 3 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Shockwave therapy is one of the most effective non-surgical options for dogs with chronic osteoarthritis, including those suffering from hip dysplasia or elbow dysplasia. It is gentle enough for senior pets and can meaningfully reduce dependence on daily pain medications.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">Patient Success Stories</h2>
          <div className="space-y-8">
            {/* Post-TPLO Review */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "After our Labrador Max had his TPLO surgery, we wanted to do everything possible to help him recover fully. This clinic recommended shockwave therapy as part of his rehab and it was a game changer. He bounced back faster than our surgeon expected and was bearing full weight way ahead of schedule. The staff was so knowledgeable and caring throughout the whole process. 10/10 would recommend to any pet parent navigating post-surgical recovery!"
              </p>
              <p className="text-gray-900 font-semibold">— Amanda K.</p>
              <p className="text-gray-600 text-lg mt-1">Post-TPLO Shockwave</p>
            </div>

            {/* Biceps Tendinopathy Review */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Our Border Collie Luna was diagnosed with biceps tendinopathy and we were worried she would never be back to her athletic self. After a series of shockwave treatments here, she made a full recovery. The improvement after each session was noticeable and the team kept us informed every step of the way. Luna is back to agility training and we couldn't be happier!"
              </p>
              <p className="text-gray-900 font-semibold">— Jenna R.</p>
              <p className="text-gray-600 text-lg mt-1">Biceps Tendinopathy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">See Shockwave Therapy in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/bAGYplMwSdg"
                title="Shockwave Therapy Treatment"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FNMVA5clRDM"
                title="Emi Getting Shockwave Therapy"
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
          <h2 className="text-white mb-6">Experience Drug-Free Pain Relief for Your Pet</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Discover how shockwave therapy can help your pet heal naturally and restore mobility without the side effects of medications.
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
