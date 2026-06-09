import { Header } from '../Header';
import { Footer } from '../Footer';
import { Link } from 'react-router-dom';
import { Activity, AlertCircle, ArrowUp, Footprints, TrendingDown, ZapOff, Volume2, DropletOff } from 'lucide-react';
import { PawIcon } from '../icons/PawIcon';

export function SpinalInjuryPage() {
  const commonSigns = [
    {
      icon: AlertCircle,
      title: 'Back or Neck Pain',
      description: 'Back or neck pain'
    },
    {
      icon: ArrowUp,
      title: 'Reluctance to Jump or Climb Stairs',
      description: 'Reluctance to jump or climb stairs'
    },
    {
      icon: TrendingDown,
      title: 'Weakness or Limping',
      description: 'Weakness or limping'
    },
    {
      icon: Footprints,
      title: 'Wobbly Walking (Ataxia)',
      description: 'Wobbly walking (ataxia)'
    },
    {
      icon: Activity,
      title: 'Knuckling or Dragging Paws',
      description: 'Knuckling or dragging paws'
    },
    {
      icon: ZapOff,
      title: 'Difficulty Standing or Paralysis',
      description: 'Difficulty standing or paralysis'
    },
    {
      icon: Volume2,
      title: 'Trembling or Vocalizing',
      description: 'Trembling or vocalizing'
    },
    {
      icon: DropletOff,
      title: 'Loss of Bladder or Bowel Control',
      description: 'Loss of bladder or bowel control'
    }
  ];

  const treatments = [
    'Acupuncture: Reduces inflammation, promotes nerve healing, and provides pain relief',
    'Laser Therapy: Decreases inflammation, stimulates cellular repair, and accelerates healing',
    'Physical Rehabilitation: Targeted exercises and therapies to restore mobility and strength',
    'Herbal Support: Natural anti-inflammatory and pain management through botanical medicine',
    'Therapeutic Exercise: Gentle movements to maintain function and prevent muscle atrophy',
    'Manual Therapy: Soft tissue work to reduce tension and support recovery'
  ];

  const benefits = [
    'Faster recovery and improved outcomes',
    'Reduced pain and inflammation',
    'Earlier return to walking',
    'Enhanced nerve healing',
    'Reduced reliance on medications',
    'Prevention of muscle atrophy',
    'Better long-term function',
    'Improved quality of life'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Holistic Treatment for Spinal Injury/IVDD/Herniated Disc/FCE in Dogs & Cats
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Comprehensive integrative care using acupuncture, laser therapy, physical rehabilitation, and herbal support for both surgical and non-surgical spinal cases.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Canine Spinal Injury Appointment
            </a>
          </div>
        </div>
      </section>

      {/* What is IVDD Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Paragraphs */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>Intervertebral Disc Disease (IVDD)</strong>, also known as a herniated or slipped disc, is a common neurological condition in dogs and cats that occurs when the cushioning discs between the spine's vertebrae become damaged and press on the spinal cord. This can cause high levels of pain in your pet.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Healing Paws Center, we frequently treat IVDD in dogs and cats presenting with symptoms such as back pain, weakness, difficulty walking, or even paralysis.
              </p>
            </div>

            {/* Right Column - Callout */}
            <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 border-l-4 border-[#b48cbf] rounded-lg p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#b48cbf] flex-shrink-0 sm:mt-1" />
                <div>
                  <h3 className="text-gray-900 mb-3">Comprehensive Care Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We treat pets with IVDD at every stage—both those who have undergone back surgery and those pursuing non-surgical management. Early intervention improves outcomes significantly.
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
          <h2 className="text-gray-900 mb-10 text-center">Common Signs of Spinal Injury</h2>

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

      {/* How to Heal Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6">How to Holistically Heal Your Pet Suffering from IVDD</h2>

          <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 rounded-lg p-6 sm:p-8 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We treat pets with IVDD and herniated discs at every stage—<strong>BOTH those who have undergone back surgery and those pursuing non-surgical management</strong>.
            </p>
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-[#b48cbf] flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>Research demonstrates that pets who have physical therapy after their surgery recover faster, walk sooner, and stay out of pain!</strong>
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-[#b7e1da] rounded-lg p-6 sm:p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              As a <strong>holistic and integrative veterinary clinic in Fort Lauderdale</strong>, we focus on advanced, non-surgical IVDD treatment options including acupuncture, laser therapy, physical rehabilitation, and herbal support to reduce inflammation, relieve pain, and promote nerve healing.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Benefits of Our IVDD Treatment Program</h2>
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
          <h2 className="text-white mb-6">Canine Spinal Injury Appointments Available!</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Whether your pet has undergone surgery or you're pursuing conservative management, our integrative approach provides comprehensive support for IVDD recovery. Let us help your pet heal and regain mobility.
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
