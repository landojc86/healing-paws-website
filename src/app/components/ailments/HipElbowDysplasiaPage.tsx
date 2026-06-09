import { Header } from '../Header';
import { Footer } from '../Footer';
import { Link } from 'react-router-dom';
import { Bone, AlertCircle, ArrowUp, Footprints, TrendingDown, Activity } from 'lucide-react';
import { PawIcon } from '../icons/PawIcon';
import backgroundImage from '../../../imports/HP-1.jpg?url';

export function HipElbowDysplasiaPage() {
  const commonSigns = [
    {
      icon: ArrowUp,
      title: 'Reluctance to Jump',
      description: 'Reluctance to jump onto furniture or into the car'
    },
    {
      icon: Footprints,
      title: 'Bunny Hopping Gait',
      description: 'Bunny hopping gait of the hindlimbs'
    },
    {
      icon: TrendingDown,
      title: 'Decreased Activity',
      description: 'Decreased activity or stamina, especially during walks or play'
    },
    {
      icon: Activity,
      title: 'Slower Running',
      description: 'Slower running or avoiding running altogether'
    },
    {
      icon: AlertCircle,
      title: 'Stiffness or Limping',
      description: 'Stiffness or limited range of motion or limping'
    },
    {
      icon: AlertCircle,
      title: 'Signs of Pain',
      description: 'Signs of pain when moving, rising, or after exercise'
    }
  ];

  const treatments = [
    {
      text: 'Acupuncture: Reduces inflammation and pain while promoting natural healing',
      link: '/services/acupuncture'
    },
    {
      text: 'Laser Therapy: Decreases joint inflammation and stimulates cellular repair',
      link: '/services/laser-therapy'
    },
    {
      text: 'Shockwave Therapy: Advanced therapy that promotes healing in damaged joint tissue',
      link: '/services/shockwave-therapy'
    },
    {
      text: 'Hydrotherapy: Underwater treadmill sessions that build muscle strength while minimizing joint stress',
      link: '/services/underwater-treadmill'
    },
    {
      text: 'Therapeutic Exercise: Targeted strengthening to improve joint stability',
      link: '/services/therapeutic-exercise'
    },
    {
      text: 'Targeted Supplements: Natural support for joint health and cartilage protection',
      link: null
    },
    {
      text: 'Therapeutic Botanicals & Herbal Medicine: Plant-based anti-inflammatory support',
      link: '/services/herbal-therapy'
    }
  ];

  const benefits = [
    'Reduced pain and inflammation',
    'Improved joint stability and function',
    'Strengthened supporting muscles',
    'Enhanced mobility and activity tolerance',
    'Delayed progression of arthritis',
    'Reduced or eliminated reliance on NSAIDs',
    'Better long-term joint health',
    'Improved quality of life'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-8 text-3xl sm:text-4xl">
              Holistic Hip and Elbow Dysplasia Treatment for Dogs & Cats in Fort Lauderdale
            </h1>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Hip & Elbow Dysplasia Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Paragraphs */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Hip and elbow dysplasia are among the most common orthopedic conditions we see in dogs—and while they're common, they should never be dismissed. These conditions can lead to chronic pain, arthritis, and decreased mobility, significantly impacting your dog's quality of life if left unaddressed.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Healing Paws Center, we take a <strong>proactive, integrative approach to treating hip and elbow dysplasia in dogs in Fort Lauderdale</strong>, focusing on both pain relief and long-term joint health.
              </p>
            </div>

            {/* Right Column - Early Intervention Callout */}
            <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 border-l-4 border-[#b48cbf] rounded-lg p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#b48cbf] flex-shrink-0 sm:mt-1" />
                <div>
                  <h3 className="text-gray-900 mb-3">Early Intervention is Key</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The earlier dysplasia is identified, the more we can do to help. Starting treatment early can significantly slow progression, reduce pain, and help your dog stay active and comfortable for years to come.
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
          <h2 className="text-gray-900 mb-10 text-center">Common Signs of Elbow or Hip Dysplasia in Dogs</h2>

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

      {/* Callout Section */}
      <section
        className="relative py-16 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Many pet owners assume these changes are just part of aging—but in reality, they are often early indicators of joint instability, inflammation, and developing arthritis.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>The earlier dysplasia is identified, the more we can do to help.</strong> With a personalized, integrative treatment plan—including acupuncture, laser therapy, shockwave therapy, and rehabilitation—we can improve mobility, reduce pain, and help your dog stay active and comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* Which Dogs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6 text-center">Which Dogs Are Most Likely to Develop Elbow or Hip Dysplasia?</h2>

          <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              While hip and elbow dysplasia can affect any dog, it is most commonly seen in <strong>large and giant breed dogs</strong> due to their rapid growth rates and increased stress on developing joints.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Breeds such as <strong>Labrador Retrievers, German Shepherds, Golden Retrievers, Saint Bernards, and Great Danes</strong> are especially predisposed.
            </p>
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#b48cbf]">
              <p className="text-gray-700 text-lg leading-relaxed">
                However, it's important to understand that size isn't the only factor—<strong>genetics, nutrition, growth patterns, and activity level</strong> all play a role in how these conditions develop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Treatment Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6 text-center">How to Holistically Treat Elbow and Hip Dysplasia</h2>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              <strong>The good news?</strong> With the right treatment plan, many dogs with dysplasia can live active, comfortable lives.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our goal is to <strong>reduce or eliminate long-term reliance on NSAIDs</strong> (like Rimadyl (carprofen), Deramaxx, or Galliprant) whenever possible, as chronic use can negatively impact your pet's liver and kidneys.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 rounded-lg p-6 sm:p-8 mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-[#b48cbf] flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg leading-relaxed">
                As a <strong>holistic and integrative veterinary clinic in Fort Lauderdale</strong>, we focus on safer, natural pain management options including targeted supplements, therapeutic botanicals, herbal medicine, acupuncture, laser therapy, and rehabilitation. By addressing inflammation and pain at the root, we help dogs and cats achieve improved mobility and comfort—without the risks associated with prolonged NSAID use.
              </p>
            </div>
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
                      <p className="text-gray-600 text-base mb-3 sm:mb-4">{description}</p>
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Benefits of Our Dysplasia Treatment Program</h2>
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
          <h2 className="text-white mb-6">Canine Hip & Elbow Dysplasia Treatment Appointments Available!</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Our team specializes in creating age-appropriate rehabilitation programs that support proper development in young pets while managing symptoms in older animals. Start your pet's journey to better joint health today.
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
