import { Header } from '../Header';
import { Footer } from '../Footer';
import { Link } from 'react-router-dom';
import { Activity, AlertCircle, TrendingDown, Footprints, ZapOff, Scale } from 'lucide-react';
import { PawIcon } from '../icons/PawIcon';

export function SeniorNeurologicPage() {
  const signs = [
    {
      icon: TrendingDown,
      title: 'Progressive Hind Limb Weakness'
    },
    {
      icon: Footprints,
      title: 'Wobbling or Ataxia (Loss of Coordination)'
    },
    {
      icon: Activity,
      title: 'Dragging of the Paws'
    },
    {
      icon: ZapOff,
      title: 'Difficulty Standing or Walking'
    },
    {
      icon: Footprints,
      title: 'Crossing of the Back Legs'
    },
    {
      icon: Activity,
      title: 'Knuckling of the Paws'
    },
    {
      icon: Scale,
      title: 'Loss of Balance'
    },
    {
      icon: AlertCircle,
      title: 'Eventual Paralysis as the Disease Progresses'
    }
  ];

  const benefits = [
    'Dogs live longer',
    'More mobile lives by slowing functional decline',
    'Prevention of complications from immobility',
    'Better quality of life',
    'Maintained muscle strength',
    'Improved circulation',
    'Reduced risk of secondary conditions',
    'Enhanced independence and engagement'
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
              Degenerative Myelopathy
            </h1>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Degenerative Myelopathy Appointment
            </a>
          </div>
        </div>
      </section>

      {/* What is DM Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Paragraphs */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Degenerative myelopathy (DM) in dogs is a <strong>progressive neurologic disease that affects the spinal cord</strong>, leading to weakness and loss of coordination in the hind limbs.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Commonly seen in older dogs, this condition often begins with subtle signs like wobbling, dragging of the paws, or difficulty standing, and can progress to paralysis over time.
              </p>
            </div>

            {/* Right Column - Testing Callout */}
            <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 border-l-4 border-[#b48cbf] rounded-lg p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#b48cbf] flex-shrink-0 sm:mt-1" />
                <div>
                  <h3 className="text-gray-900 mb-3">We Can Test for This Disease</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    At Healing Paws Center, we can test your dog for degenerative myelopathy to provide an accurate diagnosis and create a targeted treatment plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6">Signs of Degenerative Myelopathy in Dogs</h2>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Common clinical signs of degenerative myelopathy in dogs include progressive hind limb weakness, wobbling (ataxia), dragging of the paws, and difficulty standing or walking. As this neurologic disease advances, dogs may develop crossing of the back legs, knuckling, and eventual paralysis.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Degenerative myelopathy typically affects older dogs and is often painless</strong>, which can make early signs easy to miss.
            </p>
          </div>
        </div>
      </section>

      {/* Common Clinical Signs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-10 text-center">Common Clinical Signs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signs.map((sign, index) => {
              const IconComponent = sign.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6 sm:p-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 text-xl">{sign.title}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6">How Can We Help Your Dog with Degenerative Myelopathy?</h2>

          <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 rounded-lg p-6 sm:p-8 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              We specialize in supporting dogs with degenerative myelopathy through a <strong>comprehensive, integrative approach focused on maintaining mobility and quality of life</strong>.
            </p>
          </div>

          <div className="bg-white border-2 border-[#b7e1da] rounded-lg p-6 sm:p-8 mb-8">
            <h3 className="text-gray-900 mb-4">Research-Backed Treatment</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              <strong>Veterinary research has demonstrated that physical therapy and laser therapy help dogs with degenerative myelopathy:</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <PawIcon className="w-6 h-6 text-[#b7e1da] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#b48cbf] rounded-full flex items-center justify-center mt-0.5">
                  <PawIcon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 font-semibold mb-2 text-base sm:text-base">Physical Therapy</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Targeted exercises and rehabilitation to maintain strength, improve coordination, and slow functional decline.
                  </p>
                  <Link
                    to="/services/therapeutic-exercise"
                    className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#b48cbf] rounded-full flex items-center justify-center mt-0.5">
                  <PawIcon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 font-semibold mb-2 text-base sm:text-base">Laser Therapy</h4>
                  <p className="text-gray-600 text-base mb-3 sm:mb-4">
                    Reduces inflammation, promotes nerve health, and supports overall neurological function.
                  </p>
                  <Link
                    to="/services/laser-therapy"
                    className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-base transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wheelchair Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6">Mobility Carts (Wheelchairs) for Dogs</h2>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              <strong>Wheelchairs (mobility carts) are an excellent option</strong> for dogs with degenerative myelopathy and other neurologic conditions, helping maintain independence, mobility, and quality of life as weakness progresses.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              By supporting the hind end, a dog wheelchair allows pets to continue walking, exercising, and engaging with their environment—<strong>preventing muscle loss, improving circulation, and reducing the risk of complications from immobility</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/aTKn3yZZHMM"
              title="Mobility Cart for Dogs with Degenerative Myelopathy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Dog Degenerative Myelopathy Appointments BOOK NOW</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Our team understands the challenges of neurological conditions and creates comprehensive programs that address both the physical and functional aspects of recovery. We celebrate every milestone with you, from maintaining strength to improving coordination and quality of life.
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
