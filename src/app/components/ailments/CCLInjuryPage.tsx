import { Header } from '../Header';
import { Footer } from '../Footer';
import { Link } from 'react-router-dom';
import { Activity, AlertCircle, Footprints, Clock, ArrowUp, TrendingDown } from 'lucide-react';
import { PawIcon } from '../icons/PawIcon';

export function CCLInjuryPage() {
  const commonSigns = [
    {
      icon: Footprints,
      title: 'Limping or Favoring a Hind Leg',
      description: 'Limping or favoring a hind leg'
    },
    {
      icon: Activity,
      title: 'Stiffness or Changes in Gait',
      description: 'Stiffness or changes in gait'
    },
    {
      icon: AlertCircle,
      title: 'Swelling Around the Knee Joint',
      description: 'Swelling around the knee joint'
    },
    {
      icon: Clock,
      title: 'Difficulty Getting Up',
      description: 'Difficulty getting up or rising from rest'
    },
    {
      icon: TrendingDown,
      title: 'Decreased Activity',
      description: 'Decreased activity or reluctance to run/jump'
    }
  ];

  const treatments = [
    {
      text: 'Laser Therapy: Reduces inflammation and pain while promoting tissue healing',
      link: '/services/laser-therapy'
    },
    {
      text: 'Physical Rehabilitation: Targeted exercises to restore strength and joint stability',
      link: '/services/physical-therapy'
    },
    {
      text: 'Manual Therapy: Hands-on techniques to improve mobility and reduce compensatory tension',
      link: null
    },
    {
      text: 'Controlled Therapeutic Exercise: Carefully designed movement programs to rebuild function safely',
      link: '/services/therapeutic-exercise'
    },
    {
      text: 'Custom Bracing: Supportive devices to stabilize the knee joint during healing',
      link: null
    },
    {
      text: 'Targeted Natural Supplements: Joint support and anti-inflammatory botanical formulas',
      link: null
    }
  ];

  const benefits = [
    'Restored mobility without surgery',
    'Reduced pain and inflammation',
    'Improved joint stability',
    'Regained strength and function',
    'Reduced risk of re-injury',
    'Better long-term outcomes',
    'Non-invasive, holistic approach',
    'Optimized post-surgical recovery (when needed)'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-white mb-8 text-3xl sm:text-4xl">
              Cranial Cruciate Ligament Injury (CCL/ACL)
            </h1>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Canine Torn CCL Injury Appointment
            </a>
          </div>
        </div>
      </section>

      {/* What is CCL Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Paragraphs */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                A <strong>CCL tear (cranial cruciate ligament injury)</strong> in dogs is a common orthopedic condition where the ligament that stabilizes the knee joint becomes partially or completely torn. This ligament, similar to the ACL in humans, helps keep the knee stable during movement.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                When it is damaged, the joint becomes unstable, leading to pain, inflammation, limping, and difficulty walking.
              </p>
            </div>

            {/* Right Column - Callout */}
            <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 border-l-4 border-[#b48cbf] rounded-lg p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#b48cbf] flex-shrink-0 sm:mt-1" />
                <div>
                  <h3 className="text-gray-900 mb-3">Degenerative Condition</h3>
                  <p className="text-gray-700 leading-relaxed">
                    CCL tears in dogs often develop over time due to degeneration rather than a sudden injury, especially in active or overweight pets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Signs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-10 text-center">Common Signs of a CCL Tear (Knee Injury) in Dogs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonSigns.map((sign, index) => {
              const IconComponent = sign.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 sm:p-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-3 text-xl">{sign.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{sign.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6">What Options Are There for My Pet with a CCL Tear?</h2>

          <div className="bg-white border-2 border-[#b48cbf] rounded-lg p-6 sm:p-8 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              If your dog is diagnosed with a CCL tear (cranial cruciate ligament injury), <strong>surgery is often recommended—but may not be the only option</strong>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Healing Paws Center, a holistic and integrative veterinary clinic in Fort Lauderdale, we offer <strong>non-surgical CCL treatment options for dogs</strong> to help restore mobility and reduce pain without immediately resorting to surgery.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 rounded-lg p-6 sm:p-8 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Many dogs with CCL injuries can successfully recover through a <strong>customized rehabilitation plan designed to support healing and joint stability</strong>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Each treatment plan is tailored to your dog's specific needs and may include targeted natural supplements, and advanced integrative therapies such as laser therapy, physical rehabilitation, manual therapy, controlled therapeutic exercise, and/or custom bracing.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-[#b7e1da] flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>Our goal is to improve function, reduce inflammation, and help your dog regain strength safely and effectively.</strong>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#b7e1da]/10 to-[#b48cbf]/10 border-l-4 border-[#b48cbf] rounded-lg p-6 sm:p-8 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              If surgery is necessary, <strong>we work alongside you every step of the way—before, during, and after the procedure—to optimize recovery and long-term outcomes</strong>.
            </p>
          </div>

          <h3 className="text-gray-900 mb-6">Our Integrative Treatment Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {treatments.map((treatment, index) => {
              const [title, ...descParts] = treatment.text.split(':');
              const description = descParts.join(':').trim();
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#b48cbf] rounded-full flex items-center justify-center mt-0.5">
                      <PawIcon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-semibold mb-2 text-base sm:text-base">
                        {title}
                      </h4>
                      <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
                      {treatment.link && (
                        <Link
                          to={treatment.link}
                          className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors"
                        >
                          Learn More →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Benefits of Our CCL Treatment Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <PawIcon className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Canine Torn CCL Injury Appointments BOOK NOW</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Whether you're exploring non-surgical options or need post-surgical rehabilitation, our team is here to support your dog's recovery with comprehensive, integrative care. Let us help your dog regain mobility and live pain-free.
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
              to="/common-ailments"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
