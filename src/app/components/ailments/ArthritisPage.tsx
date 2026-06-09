import { Header } from '../Header';
import { Footer } from '../Footer';
import { Link } from 'react-router-dom';
import { Bone, Clock, TrendingDown, Footprints, ArrowUp, AlertCircle } from 'lucide-react';
import { PawIcon } from '../icons/PawIcon';
import backgroundImage from '../../../imports/289-1.jpg?url';

export function ArthritisPage() {

  const earlySignsOfArthritis = [
    {
      icon: Clock,
      title: 'Stiffness—Especially After Rest',
      description: 'If your dog seems stiff when getting up in the morning or after lying down, this is one of the earliest and most common signs of arthritis! Many pets "warm out of it" after a few steps—but that doesn\'t mean it\'s normal!'
    },
    {
      icon: TrendingDown,
      title: 'Slower or Struggling to Get Up',
      description: 'Healthy dogs typically get up with ease. If your dog is taking longer, hesitating, or showing visible effort when rising, it may indicate joint pain and inflammation. You may even see limping!'
    },
    {
      icon: ArrowUp,
      title: 'Reluctance to Jump or Climb',
      description: 'Hesitation to jump onto the bed, into the car, or even climb stairs is a major red flag. These movements require joint strength and flexibility—both of which are impacted by arthritis.'
    },
    {
      icon: Footprints,
      title: 'Decreased Stamina on Walks or Refusal for Long Walks',
      description: 'If your dog is suddenly wanting shorter walks, lagging behind, or stopping more frequently, it may not be "just aging." It\'s often a sign of underlying discomfort or arthritis pain.'
    }
  ];

  const treatments = [
    {
      text: 'Acupuncture: Traditional Chinese medicine technique that reduces pain and inflammation in arthritic joints',
      link: '/services/acupuncture'
    },
    {
      text: 'Laser Therapy: Low-level laser therapy that reduces inflammation, increases circulation, and stimulates cellular healing',
      link: '/services/laser-therapy'
    },
    {
      text: 'Shockwave Therapy: Advanced modality that promotes healing and reduces pain in chronic joint conditions',
      link: '/services/shockwave-therapy'
    },
    {
      text: 'Therapeutic Ultrasound: Sound waves that reduce inflammation and provide deep tissue pain relief',
      link: null
    },
    {
      text: 'Underwater Treadmill: Low-impact aquatic exercise that strengthens muscles while reducing stress on painful joints',
      link: '/services/underwater-treadmill'
    },
    {
      text: 'Therapeutic Exercise: Targeted rehabilitation exercises to improve strength and mobility',
      link: '/services/therapeutic-exercise'
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
              Holistic Arthritis Treatment for Dogs & Cats in Fort Lauderdale
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Comprehensive integrative care combining acupuncture, laser therapy, rehabilitation, and natural supplements to reduce inflammation, improve mobility, and enhance quality of life.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Canine Arthritis Appointment
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
                Arthritis is one of the most common—and often overlooked—sources of chronic pain in dogs. As joints become inflamed and degenerate over time, even simple, everyday movements like walking, climbing stairs, or getting comfortable can become difficult and painful.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Healing Paws Center, we specialize in <strong>holistic research-based arthritis treatment for dogs and cats in Fort Lauderdale</strong>, focusing not just on symptom relief—but on improving mobility, comfort, and overall quality of life. Using integrative therapies such as acupuncture, laser therapy, shockwave therapy, and rehabilitation, we work to reduce inflammation, support joint health, and help your pet move more comfortably again.
              </p>
            </div>

            {/* Right Column - Early Intervention Callout */}
            <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 border-l-4 border-[#b48cbf] rounded-lg p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#b48cbf] flex-shrink-0 sm:mt-1" />
                <div>
                  <h3 className="text-gray-900 mb-3">Early Intervention is Key</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Arthritis is a progressive condition, meaning it worsens over time if left unaddressed. Early intervention is key.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If you're noticing subtle changes—slowing down, stiffness, hesitation to jump, or decreased activity—these may be early signs of joint discomfort. Starting treatment early can significantly slow progression, reduce pain, and help your pet maintain an active, happy life for years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* They're Not Slowing Down Section */}
      <section
        className="relative py-16 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-6">
              They're Not Slowing Down—They're Hurting: Early Signs of Arthritis in Dogs
            </h2>
            <p className="text-white/95 text-lg leading-relaxed mb-4">
              As the person who knows your pet best, you are often the first to notice subtle changes—the small shifts that signal something isn't quite right. If something feels off, trust that instinct.
            </p>
            <p className="text-white/95 text-lg leading-relaxed">
              At Healing Paws Center, we often hear, <em>"I thought they were just slowing down."</em> In reality, many of these dogs are experiencing chronic joint pain from arthritis.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Recognizing the early signs of arthritis in dogs is critical.</strong> The sooner we intervene with holistic arthritis treatment in Fort Lauderdale, the more we can do to reduce pain, improve mobility, and protect long-term joint health.
            </p>
          </div>
        </div>
      </section>

      {/* Common Signs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-10 text-center">Common Signs of Arthritis in Dogs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {earlySignsOfArthritis.map((sign, index) => {
              const IconComponent = sign.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6 sm:p-8 hover:shadow-md transition-shadow">
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

      {/* Our Treatment Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Our Holistic Treatment Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
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

          {/* Video Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/eSQTfnR-pK0"
                title="Arthritis Treatment"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Benefits of Our Arthritis Treatment Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Reduced pain and inflammation',
              'Improved joint mobility and flexibility',
              'Enhanced muscle strength and support',
              'Better quality of life and activity level',
              'Delayed progression of joint degeneration',
              'Reduced reliance on pain medications',
              'Prevention of compensatory injuries',
              'Improved overall comfort and wellbeing'
            ].map((benefit, index) => (
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
          <h2 className="text-white mb-6">Canine Arthritis Treatment Appointments Available!</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            At Healing Paws Center, we understand that arthritis is a progressive condition requiring ongoing management. Our certified rehabilitation team creates individualized treatment plans that evolve with your pet's changing needs.
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
