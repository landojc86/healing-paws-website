import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { ChevronDown, Star, CircleDot, Dumbbell, TrendingUp, Heart, Hand, Zap } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { PawIcon } from './icons/PawIcon';

export function TherapeuticExercisePage() {
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

  const approaches = [
    {
      title: 'Balance & Proprioception',
      description: 'Wobble boards, balance discs, and unstable surfaces rebuild your pet\'s sense of body position and joint stability.',
      icon: CircleDot
    },
    {
      title: 'Strength & Conditioning',
      description: 'Targeted exercises — sit-to-stands, incline walks, resistance bands — rebuild muscle mass and functional power in affected limbs.',
      icon: Dumbbell
    },
    {
      title: 'Gait Retraining',
      description: 'Cavaletti poles, ramps, and guided walking correct compensatory patterns and restore natural stride before they become permanent.',
      icon: TrendingUp
    },
    {
      title: 'Pain Management',
      description: 'Laser therapy, shockwave therapy, NMES, and therapeutic massage — used in combination for drug-free, lasting pain relief.',
      icon: Heart
    },
    {
      title: 'Manual & Soft Tissue Therapy',
      description: 'Hands-on massage, stretching, and joint mobilization to reduce tension, improve flexibility, and stimulate circulation.',
      icon: Hand
    },
    {
      title: 'Neurological Rehabilitation',
      description: 'E-stim, targeted sensory exercises, and assisted movement for pets recovering from spinal injury, IVDD, or degenerative disease.',
      icon: Zap
    }
  ];

  const benefits = [
    {
      title: 'Restores Mobility & Gait',
      description: 'Corrects compensatory movement patterns early, before they cause lasting damage to other joints.'
    },
    {
      title: 'Prevents Muscle Atrophy',
      description: 'Keeps muscles strong during recovery so your pet heals faster and re-injury risk drops significantly.'
    },
    {
      title: 'Reduces Pain Naturally',
      description: 'Therapeutic movement triggers endorphins and anti-inflammatory pathways — no drugs needed.'
    },
    {
      title: 'Improves Quality of Life',
      description: 'Pets that move freely are happier. Rehab restores not just mobility — but joy.'
    }
  ];

  const conditions = [
    {
      name: 'Post-TPLO & Cruciate Surgery',
      description: 'Back to zoomies faster with targeted strength & gait work.',
      link: '/common-ailments/post-tplo-tta-ccl-surgery'
    },
    {
      name: 'Hip & Elbow Dysplasia',
      description: 'Muscle-building exercises take load off painful joints.',
      link: '/common-ailments/hip-elbow-dysplasia'
    },
    {
      name: 'IVDD & Spinal Cord Injury',
      description: 'Neurological rehab helps rewire the body\'s movement signals',
      link: '/common-ailments/spinal-injury'
    },
    {
      name: 'Degenerative Myelopathy',
      description: 'Slows progression and preserves function for longer.',
      link: '/common-ailments/senior-neurologic'
    },
    {
      name: 'Osteoarthritis & Spondylosis',
      description: 'Gentle movement is one of the best long-term pain relievers.',
      link: '/common-ailments/arthritis'
    },
    {
      name: 'Fracture Recovery',
      description: 'Safe, progressive loading rebuilds bone and muscle together.',
      link: null
    },
    {
      name: 'Muscle Atrophy & Weakness',
      description: 'Targeted exercise restores mass and strength limb by limb.',
      link: null
    },
    {
      name: 'Neurological Conditions',
      description: 'E-stim and sensory work retrain nerves that injury has quieted.',
      link: '/common-ailments/post-neurologic-surgery'
    },
    {
      name: 'Obesity & Weight Management',
      description: 'Low-impact exercise burns calories without stressing fragile joints.',
      link: null
    },
    {
      name: 'Soft Tissue Injuries',
      description: 'Guided rehab heals sprains and strains without re-injury risk.',
      link: null
    },
    {
      name: 'Chronic Lameness',
      description: 'Gait retraining corrects the limp and the compensations causing it.',
      link: null
    },
    {
      name: 'Senior Pet Fitness',
      description: 'Aging doesn\'t have to mean slowing down — keep golden years golden.',
      link: '/common-ailments/senior-patients'
    }
  ];

  const testimonials = [
    {
      text: '"Ranger couldn\'t use his back legs at all after his IVDD episode. Between the physical therapy exercises and the e-stim, he was walking on his own within three weeks. The team at Healing Paws is simply extraordinary."',
      author: 'Carlos M., German Shepherd dad',
      location: 'Fort Lauderdale'
    },
    {
      text: '"We were told Luna would always limp after her TPLO. The land rehab program here proved that wrong completely. She runs on the beach like nothing ever happened."',
      author: 'Priya K., Golden Retriever mom',
      location: 'Plantation'
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
              Therapeutic Land Exercises
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Customized exercise programs combining balance training, strength conditioning, and gait retraining to restore mobility and prevent re-injury.
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

      {/* Our Rehabilitation Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">Our Rehabilitation Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-[#b7e1da]/10 to-[#b48cbf]/10 rounded-lg p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">{approach.title}</h3>
                  <p className="text-gray-600 text-lg">{approach.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">The Benefits of Land Physical Therapy for Pets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-2 border-[#b7e1da]">
                <h3 className="text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-gray-500 uppercase tracking-wide text-lg mb-2">CONDITIONS WE TREAT</p>
            <h2 className="text-gray-900 mb-4">Who Benefits from Land Rehab?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              If your pet is dealing with any of the following, land physical therapy can help them feel like themselves again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                {condition.link ? (
                  <Link to={condition.link}>
                    <h3 className="text-[#b48cbf] hover:text-[#9d6fa8] mb-2 font-semibold text-lg transition-colors cursor-pointer">
                      {condition.name}
                    </h3>
                  </Link>
                ) : (
                  <h3 className="text-gray-900 mb-2 font-semibold text-lg">{condition.name}</h3>
                )}
                <p className="text-gray-600 text-lg">{condition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">Moving Again. Living Again.</h2>
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
                <span className="font-semibold text-gray-900 text-lg">How is veterinary physical therapy different from just walking my dog?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 1 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-4">
                    Regular walks engage muscles generally and maintain baseline fitness, but they cannot target specific muscle groups, retrain faulty movement patterns, or address neurological deficits.
                  </p>
                  <p className="text-gray-600 text-lg">
                    Veterinary physical therapy uses precise exercises, specialized equipment, and hands-on guidance to produce therapeutic outcomes that casual exercise simply cannot replicate — especially after surgery or injury.
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
                <span className="font-semibold text-gray-900 text-lg">When can my pet start physical therapy after surgery?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 2 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    In most cases, passive range of motion and gentle massage can begin within 24–48 hours post-surgery. Active therapeutic exercises typically begin within the first week, depending on the procedure. Starting early is almost always better — it's the single most impactful thing you can do to shorten recovery. We work in close coordination with your surgeon to time everything appropriately.
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
                <span className="font-semibold text-gray-900 text-lg">Will my pet tolerate the exercises?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 3 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 3 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-4">
                    Most pets adapt quickly and many genuinely enjoy their sessions — the one-on-one attention, gentle handling, and positive reinforcement (WE LOVE USING TREATS!!) make rehab a positive experience.
                  </p>
                  <p className="text-gray-600 text-lg mb-4">
                    Our team is experienced in reading animal behavior and always works within each pet's comfort level.
                  </p>
                  <p className="text-gray-600 text-lg">
                    Sessions are never forced, and pace is always tailored to the individual.
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
                <span className="font-semibold text-gray-900 text-lg">Can physical therapy be combined with underwater treadmill or laser therapy?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 4 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 4 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Yes — and combination programs are often the most effective. Laser therapy reduces inflammation and pain before or after a land session; the <Link to="/services/underwater-treadmill" className="text-[#b48cbf] hover:text-[#9d6fa8] transition-colors text-lg">underwater treadmill</Link> builds cardiovascular fitness and muscle mass while land exercises focus on precision movement, balance, and neurological retraining. Your holistic vet will design the ideal combination protocol for your pet's specific condition.
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
                <span className="font-semibold text-gray-900 text-lg">How do I know if my pet needs physical therapy?</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openAccordion === 5 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 5 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Signs include limping or uneven gait, reluctance to use stairs or jump, muscle loss in one or more limbs, stiffness after rest, decreased activity level, or any recent surgery or neurological event. If you're unsure, a free consultation with our team is the best first step — we'll give you an honest assessment of whether rehabilitation would benefit your pet.
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
          <h2 className="text-white mb-6">Canine Rehab Appointments Available!</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Schedule a consultation to explore how therapeutic land exercises can help your pet move freely again.
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
