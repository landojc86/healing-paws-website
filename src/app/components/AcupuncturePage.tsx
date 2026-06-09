import { Check, Sparkles, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useState, useRef, useEffect } from 'react';

export function AcupuncturePage() {
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
      title: 'Pain Management',
      items: [
        'Arthritis – back pain, neck pain, hip pain, shoulder pain, knee pain',
        'Intervertebral disc disease',
        'Hip dysplasia',
        'Elbow dysplasia',
        'Cranial cruciate ligament tear (either pre or post-surgery knee surgery)'
      ]
    },
    {
      title: 'Cancer',
      items: [
        'As a sole therapy or to help limit side-effects from chemotherapy and improve general quality of life'
      ]
    },
    {
      title: 'Neurological Disorders',
      items: [
        'Intervertebral disc disease resulting from a herniated disc',
        'Degenerative myelopathy',
        'Nerve paralysis or damage – including scuffing of hind limbs when walking',
        'Seizures or epilepsy',
        'Urinary and fecal incontinence'
      ]
    },
    {
      title: 'Pet Allergies',
      items: [
        'Recurrent skin infections'
      ]
    },
    {
      title: 'Gastro-Intestinal Disorders',
      items: [
        'Inflammatory Bowel Disease (IBD)',
        'Chronic diarrhea',
        'Chronic vomiting',
        'Chronic gurgling (LOUD) stomach'
      ]
    },
    {
      title: 'Respiratory Problems',
      items: [
        'Asthma',
        'Tracheal collapse',
        'Chronic upper respiratory infections'
      ]
    },
    {
      title: 'Internal Organ Disease',
      items: [
        'Kidney, Heart, or Liver Disease'
      ]
    },
    {
      title: 'Autoimmune Diseases',
      items: [
        'Immune-mediated hemolytic anemia',
        'Immune-mediated thrombocytopenia',
        'Eosinophilic granuloma in cats'
      ]
    },
    {
      title: 'Reproductive or Infertility Disorders',
      items: []
    },
    {
      title: 'Behavioral Issues (Anxiety)',
      items: []
    },
    {
      title: 'Endocrine Disorders',
      items: [
        'Hypothyroidism',
        'Cushing\'s disease',
        'Addinson\'s disease'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Pain Management',
      description: 'Natural relief from chronic and acute pain without medications.',
    },
    {
      title: 'Reduced Inflammation',
      description: 'Helps decrease inflammation throughout the body.',
    },
    {
      title: 'Improved Healing',
      description: 'Stimulates natural healing processes and recovery.',
    },
    {
      title: 'Minimal Side Effects',
      description: 'Safe, gentle treatment with few adverse reactions.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Banner Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Dog Acupuncture in Fort Lauderdale and Veterinary Acupuncture for Small Animals
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Traditional Chinese veterinary medicine using precise needle placement to provide natural pain relief, reduce inflammation, and support healing for a wide range of conditions.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Schedule Acupuncture Session
            </a>
          </div>
        </div>
      </section>

      {/* What Can Acupuncture Treat Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Text Content */}
            <div>
              <h2 className="text-gray-900 mb-6">What Can Acupuncture For Dogs And Cats (and other pets) Treat?</h2>
              <div className="space-y-3">
                {conditions.map((condition, index) => (
                  <div key={index} ref={(el) => (accordionRefs.current[index] = el)} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">
                        {condition.title === 'Cancer' ? (
                          <Link
                            to="/services/cancer-treatment"
                            className="text-[#b48cbf] hover:text-[#9d6fa8] transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Cancer
                          </Link>
                        ) : (
                          condition.title
                        )}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openAccordion === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openAccordion === index && (
                      <div className="px-4 pb-4 pt-0">
                        {condition.items.length > 0 ? (
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {condition.items.map((item, i) => {
                              // Map items to their corresponding pages
                              let linkTo = null;

                              if (item === 'Hip dysplasia' || item === 'Elbow dysplasia') {
                                linkTo = '/common-ailments/hip-elbow-dysplasia';
                              } else if (item === 'Arthritis – back pain, neck pain, hip pain, shoulder pain, knee pain') {
                                linkTo = '/common-ailments/arthritis';
                              } else if (item === 'Intervertebral disc disease' || item === 'Intervertebral disc disease resulting from a herniated disc') {
                                linkTo = '/common-ailments/spinal-injury';
                              } else if (item === 'Cranial cruciate ligament tear (either pre or post-surgery knee surgery)') {
                                linkTo = '/common-ailments/ccl-injury';
                              } else if (item === 'Degenerative myelopathy') {
                                linkTo = '/common-ailments/senior-neurologic';
                              } else if (item === 'Recurrent skin infections') {
                                linkTo = '/common-ailments/skin-allergies';
                              }

                              if (linkTo) {
                                return (
                                  <li key={i}>
                                    <Link to={linkTo} className="text-[#b48cbf] hover:text-[#9d6fa8] transition-colors">
                                      {item}
                                    </Link>
                                  </li>
                                );
                              } else {
                                return <li key={i}>{item}</li>;
                              }
                            })}
                          </ul>
                        ) : null}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Video Placeholders */}
            <div className="space-y-6">
              {/* Video 1 */}
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/6LShbjEVd7A"
                  title="Acupuncture Treatment"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video 2 */}
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/lB_wHG1qdTo"
                  title="Acupuncture Treatment"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medication Benefits Section */}
      <section
        className="py-20 bg-gray-50 relative bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1700045236823-30bc469f7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')"
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-900 text-xl leading-relaxed font-medium">
              In some cases, through acupuncture for dogs and cats in her Fort Lauderdale clinic,
              Healing Paws Center can decrease the conventional medications or even wean a
              patient off all conventional medications with regular acupuncture treatments.
            </p>
          </div>
        </div>
      </section>

      {/* What is Acupuncture Section - Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Accordion Item 1 */}
            <div ref={(el) => (accordionRefs.current[100] = el)} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenAccordion(openAccordion === 100 ? null : 100)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-xl">WHAT IS ACUPUNCTURE FOR DOGS AND CATS?</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openAccordion === 100 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 100 && (
                <div className="px-6 pb-6 pt-0">
                  <div className="text-gray-600 text-lg space-y-4">
                    <p>
                      Acupuncture for dogs and cats involves the placement of very, very small needles into 
                      precise locations on the animal body to cause therapeutic responses. The medical 
                      treatment is a safe therapy that offers virtually no side effects. Acupuncture has 
                      been practiced for thousands of years in China and beyond to treat a variety of 
                      diseases.
                    </p>
                    <p>
                      We strongly recommend that only a veterinarian having been formally trained and 
                      certified in medical acupuncture for animals perform acupuncture on pets.
                    </p>
                    <p>
                      Our doctors use acupuncture and other holistic veterinary techniques on dogs and cats
                      in our Fort Lauderdale clinic with great results for a number of conditions.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion Item 2 */}
            <div ref={(el) => (accordionRefs.current[101] = el)} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenAccordion(openAccordion === 101 ? null : 101)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-xl">HOW DOES ACUPUNCTURE FOR DOGS AND CATS WORK?</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openAccordion === 101 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 101 && (
                <div className="px-6 pb-6 pt-0">
                  <div className="text-gray-600 text-lg space-y-4">
                    <p>
                      For example, acupuncture points are specifically located at junctions of large nerve 
                      bundles and blood vessels. Acupuncture stimulates these areas and results in...
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>The release of pain relieving and anti-inflammatory substances (including serotonin, and norepinephrine)</li>
                      <li>Improved tissue blood flow</li>
                      <li>Improved oxygenation and removal of toxins</li>
                    </ul>
                    <p>
                      Peer-reviewed and journal-published studies have demonstrated that acupuncture can 
                      activate T-cell lymphocytes and boost the number of white blood cells in the 
                      body. This, in turn, can allow for a stronger immune system.
                    </p>
                    <p>
                      With acupuncture, there are minimal to no side effects. This contrasts to medical 
                      prescriptions, which can have a great number of unwanted side effects on a pet's organ 
                      function.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">Pet Electroacupuncture</h2>
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[9/16] max-w-md w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/75yIY46wovk"
                title="Pet Electroacupuncture"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Repeat before footer */}
      <section className="py-20 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Pet Acupuncture Appointments Available!</h2>
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

      {/* What to Expect During Treatment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">What to Expect During Treatment</h2>
          <div className="space-y-4">
            {/* Initial Consultation */}
            <div ref={(el) => (accordionRefs.current[200] = el)} id="initial-consultation" className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenAccordion(openAccordion === 200 ? null : 200)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-xl">Initial Consultation</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openAccordion === 200 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 200 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Your pet's first visit is 45-60 minutes long. The consultation includes a physical
                    examination as well as a Traditional Chinese Veterinary Medical examination,
                    review of all previous medical history, and review of current and past
                    medications. During the consultation, the doctor will formulate a holistic
                    treatment plan based on your pet's individual needs.
                  </p>
                </div>
              )}
            </div>

            {/* Treatment Sessions */}
            <div ref={(el) => (accordionRefs.current[201] = el)} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenAccordion(openAccordion === 201 ? null : 201)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-xl">Treatment Sessions</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openAccordion === 201 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 201 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg mb-3">
                    Sessions are typically 40 minutes and may include multiple modalities such as
                    electroacupuncture, dry needling, aqua-puncture with Vitamin B12 or
                    homeopathies, and/or moxibustion! Most pets thoroughly enjoy their sessions
                    and show improvements within weeks.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>We encourage pet parents to attend any and all sessions!</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Treatment Frequency */}
            <div ref={(el) => (accordionRefs.current[202] = el)} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenAccordion(openAccordion === 202 ? null : 202)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-xl">Treatment Frequency</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openAccordion === 202 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 202 && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 text-lg">
                    Initially, treatments may be weekly to twice weekly – as your pet progresses,
                    sessions are typically reduced. We also emphasize home exercises to maximize
                    results between visits.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">Patient Success Stories</h2>
          <div className="space-y-8">
            {/* IVDD Review */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "When our Dachshund Biscuit was diagnosed with IVDD, we were heartbroken. This clinic created a treatment plan that included acupuncture and the results were incredible. Within weeks he was moving freely and back to his happy self. We are so grateful for this amazing team!"
              </p>
              <p className="text-gray-900 font-semibold">— Sarah M.</p>
              <p className="text-gray-600 text-lg mt-1">IVDD</p>
            </div>

            {/* Arthritis Review */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Diesel, my 12-year-old Rottweiler, suffered from severe hip arthritis for years. After starting acupuncture at this clinic, he is sleeping through the night, climbing steps again, and even playing with his toys. Seeing my old boy feeling good again means everything. Highly recommend!"
              </p>
              <p className="text-gray-900 font-semibold">— Mike R.</p>
              <p className="text-gray-600 text-lg mt-1">Arthritis</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}