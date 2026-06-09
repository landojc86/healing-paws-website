import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { Heart, Bone, Activity, Stethoscope } from 'lucide-react';

export function CommonAilmentsPage() {
  const ailments = [
    {
      title: 'Arthritis/Weakness',
      description: 'Degenerative joint disease causing pain, stiffness, and reduced mobility. Our rehabilitation programs help manage pain and improve joint function through low-impact exercises and therapeutic modalities.',
      icon: Bone,
      color: 'bg-[#b48cbf]',
      link: '/common-ailments/arthritis'
    },
    {
      title: 'Hip/Elbow Dysplasia',
      description: 'Genetic condition affecting joint development leading to arthritis and pain. Early intervention with physical therapy can significantly improve quality of life and delay surgical intervention.',
      icon: Bone,
      color: 'bg-[#b7e1da]',
      link: '/common-ailments/hip-elbow-dysplasia'
    },
    {
      title: 'Senior Pets/Hindlimb Weakness',
      description: 'Senior pets experiencing slowing down, difficulty walking, or trouble getting into and out of the car. Targeted rehabilitation helps maintain independence and comfort in their golden years.',
      icon: Heart,
      color: 'bg-[#b48cbf]',
      link: '/common-ailments/senior-patients'
    },
    {
      title: 'Post TPLO/TTA/CCL Surgery',
      description: 'Specialized rehabilitation after TPLO, TTA, or CCL surgical repair. Our targeted programs accelerate bone healing, restore muscle strength, and optimize surgical outcomes for faster return to activity.',
      icon: Stethoscope,
      color: 'bg-[#b7e1da]',
      link: '/common-ailments/post-tplo-tta-ccl-surgery'
    },
    {
      title: 'Degenerative Myelopathy',
      description: 'Progressive neurologic disease affecting the spinal cord in older dogs. Our comprehensive approach includes physical therapy and laser therapy to maintain mobility and quality of life.',
      icon: Activity,
      color: 'bg-[#b48cbf]',
      link: '/common-ailments/senior-neurologic'
    },
    {
      title: 'Skin Allergies',
      description: 'Integrative treatment for allergic dermatitis in dogs and cats using ozone therapy, laser therapy, herbal medicine, and microbiome restoration to address root causes.',
      icon: Activity,
      color: 'bg-[#b7e1da]',
      link: '/common-ailments/skin-allergies'
    },
    {
      title: 'Spinal Injury/IVDD/Herniated Discs',
      description: 'Holistic treatment for intervertebral disc disease through acupuncture, laser therapy, physical rehabilitation, and herbal support for both surgical and non-surgical cases.',
      icon: Activity,
      color: 'bg-[#b48cbf]',
      link: '/common-ailments/spinal-injury'
    },
    {
      title: 'CCL/ACL Tear (Knee Injury)',
      description: 'Non-surgical and post-surgical treatment for cranial cruciate ligament injuries using laser therapy, physical rehabilitation, custom bracing, and targeted supplements.',
      icon: Activity,
      color: 'bg-[#b7e1da]',
      link: '/common-ailments/ccl-injury'
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
              Common Ailments We Treat
            </h1>
            <p className="text-white/95 text-lg mb-8">
              From arthritis and hip dysplasia to post-surgical recovery and neurological conditions, we provide comprehensive holistic care tailored to your pet's specific needs.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-base sm:text-base w-full sm:w-auto"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* Ailments Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ailments.map((ailment, index) => {
              const IconComponent = ailment.icon;
              return (
                <Link
                  key={index}
                  to={ailment.link}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 block"
                >
                  <div className={`${ailment.color} p-6 flex items-center justify-center`}>
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-900 mb-3 text-xl">{ailment.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{ailment.description}</p>
                    <p className="text-[#b48cbf] mt-4 font-semibold">Learn More →</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Is Your Pet Experiencing Any of These Conditions?</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Don't wait for symptoms to worsen. Early intervention can make a significant difference in your pet's recovery and quality of life.
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
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}