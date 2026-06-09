import { Check, Activity, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useState } from 'react';
import underwaterTreadmillImage from '../../imports/_G3A2622.JPG?url';
import therapeuticExerciseImage from '../../imports/206041213-origpic-667e5f.jpg?url';

export function PhysicalTherapyPage() {
  const [openExpectation, setOpenExpectation] = useState<number | null>(null);

  const services = [
    {
      name: 'Acupuncture',
      details: 'Dog Acupuncture in Fort Lauderdale and Veterinary Acupuncture for Small Animals',
      link: '/services/acupuncture'
    },
    {
      name: 'Laser Therapy',
      details: 'Non-invasive treatment that uses light to stimulate cell regeneration and increase blood circulation, reducing pain and inflammation.',
      link: '/services/laser-therapy'
    },
    {
      name: 'Shockwave Therapy',
      details: 'Advanced therapy using acoustic waves to promote healing, reduce pain, and accelerate tissue repair.',
      link: '/services/shockwave-therapy'
    },
    {
      name: 'Wheelchairs',
      details: 'Custom mobility devices to enhance independence and quality of life for pets with mobility challenges.',
      link: '/services/wheelchairs-mobility'
    },
    {
      name: 'Orthotics & Prosthetics',
      details: 'Custom supportive equipment and devices to improve mobility and comfort for injured or disabled pets.',
      link: '/services/orthotics-prosthetics'
    },
  ];

  const benefits = [
    {
      title: 'Faster Recovery',
      description: 'Evidence-based treatments accelerate healing and reduce recovery time.',
    },
    {
      title: 'Pain Relief',
      description: 'Multi-modal pain management strategies to improve comfort and quality of life.',
    },
    {
      title: 'Improved Mobility',
      description: 'Restore function and increase range of motion for better quality of life.',
    },
    {
      title: 'Prevent Re-injury',
      description: 'Build strength and stability to reduce the risk of future injuries.',
    },
  ];

  const conditions = [
    'Arthritis',
    'CCL/ACL',
    'Senior Pets',
    'IVDD/Herniated Discs',
    'Degenerative Myelopathy',
    'Hindlimb Weakness',
    'Skin Allergies',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Banner Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Dog and Cat Rehabilitation and Physical Therapy
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Comprehensive rehabilitation combining acupuncture, underwater treadmill, laser therapy, and therapeutic exercises to restore mobility and accelerate recovery.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg w-full sm:w-auto"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* Fort Lauderdale Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Header and Description */}
            <div>
              <h2 className="text-gray-900 mb-6">Fort Lauderdale Pet Rehab and Exercise Center</h2>
              <p className="text-gray-600 text-lg mb-8">
                Healing Paws Center is a veterinary rehabilitation and acupuncture clinic conveniently
                located in the Fort Lauderdale / Wilton Manors area. Visit this holistic veterinary
                practice off Oakland Park Blvd near Dixie Hwy, and restore your pet's health and
                mobility!
              </p>
            </div>

            {/* Right Column - Video */}
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/cT0U0kz2bhU"
                  title="Physical Therapy Treatment"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Treatments Section Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-0 text-center">Types of Treatments for Pet Rehabilitation</h2>
        </div>
      </section>

      {/* Therapeutic Land Exercises - Image Left */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left - Image */}
          <div className="bg-gray-200 h-[400px] md:h-[500px]">
            <img
              src={therapeuticExerciseImage}
              alt="Therapeutic Land Exercises"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right - Content */}
          <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 bg-white h-[400px] md:h-[500px]">
            <div>
              <h3 className="text-gray-900 text-2xl font-semibold mb-4">Therapeutic Land Exercises</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Customized land-based exercise programs designed to improve strength, balance, coordination, and overall functional mobility.
              </p>
              <Link
                to="/services/therapeutic-exercise"
                className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Underwater Treadmill - Image Right */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left - Content */}
          <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 bg-white order-2 md:order-1 h-[400px] md:h-[500px]">
            <div>
              <h3 className="text-gray-900 text-2xl font-semibold mb-4">Underwater Treadmill (Hydrotherapy)</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Low-impact aquatic exercise that builds strength, improves cardiovascular health, and reduces joint stress through controlled water therapy.
              </p>
              <Link
                to="/services/underwater-treadmill"
                className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
          {/* Right - Image */}
          <div className="bg-gray-200 order-1 md:order-2 h-[400px] md:h-[500px]">
            <img
              src={underwaterTreadmillImage}
              alt="Underwater Treadmill"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Other Rehab Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Other Rehab Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our additional rehabilitation and therapeutic services designed to support your pet's recovery and wellness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="text-gray-900 font-semibold mb-2 text-lg">{service.name}</h4>
                <p className="text-gray-600 text-lg mb-2">{service.details}</p>
                <Link
                  to={service.link}
                  className="text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rehabilitation Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Video Placeholder */}
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VSORIk_YZNI"
                title="Physical Therapy Treatment"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Right Column - Text Content */}
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Healing Paws Fort Lauderdale has a certified rehabilitation team that will examine and evaluate your pet to formulate an individualized, comprehensive treatment plan for your pet family.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                All of our treatments are prescribed and directed by a veterinarian, and we will work with your current veterinarian to complement your pet's ongoing treatment plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Candidates Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Common Candidates for Dog Rehabilitation in Our Fort Lauderdale Clinic</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Veterinary candidates include but are not limited to:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <Link to="/common-ailments/arthritis" className="text-[#b48cbf] hover:text-[#9d6fa8] text-lg transition-colors">
                    Arthritis (Osteoarthritis)
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <Link to="/common-ailments/hip-elbow-dysplasia" className="text-[#b48cbf] hover:text-[#9d6fa8] text-lg transition-colors">
                    Hip/Elbow Dysplasia
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <Link to="/common-ailments/senior-patients" className="text-[#b48cbf] hover:text-[#9d6fa8] text-lg transition-colors">
                    Senior patients
                  </Link>
                  <span className="text-gray-600 text-lg"> (any dog/cat/pet that is slowing down or has difficulty walking or getting into and out of the car)</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <Link to="/common-ailments/senior-neurologic" className="text-[#b48cbf] hover:text-[#9d6fa8] text-lg transition-colors">
                    Senior neurologic patients
                  </Link>
                  <span className="text-gray-600 text-lg"> (including difficulty walking of hind limbs, scuffing of the back feet, or dragging of the hind feet)</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <Link to="/common-ailments/post-orthopedic-surgery" className="text-[#b48cbf] hover:text-[#9d6fa8] text-lg transition-colors">
                    Post-orthopedic
                  </Link>
                  <span className="text-gray-600 text-lg"> (such as knee, elbow, shoulder, back, hip surgery) surgery cases – including cranial cruciate ligament tears, hip dysplasia</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <span className="text-gray-600 text-lg">Post-neurologic (such as a </span>
                  <Link to="/common-ailments/spinal-injury" className="text-[#b48cbf] hover:text-[#9d6fa8] text-lg transition-colors">
                    herniated spinal disc surgery
                  </Link>
                  <span className="text-gray-600 text-lg"> or </span>
                  <Link to="/common-ailments/spinal-injury" className="text-[#b48cbf] hover:text-[#9d6fa8] text-lg transition-colors">
                    intervertebral disc disease
                  </Link>
                  <span className="text-gray-600 text-lg">, </span>
                  <Link to="/common-ailments/senior-neurologic" className="text-[#b48cbf] hover:text-[#9d6fa8] text-lg transition-colors">
                    degenerative myelopathy
                  </Link>
                  <span className="text-gray-600 text-lg">) surgery cases</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <span className="text-gray-700 text-lg">Obesity/overweight</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <span className="text-gray-700 text-lg">Inoperable orthopedic conditions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Start Your Pet's Recovery Journey?</h2>
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
          <div className="space-y-3">
            {/* Initial Consultation */}
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenExpectation(openExpectation === 0 ? null : 0)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">Initial Consultation</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openExpectation === 0 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openExpectation === 0 && (
                <div className="px-4 pb-4 pt-0">
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
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenExpectation(openExpectation === 1 ? null : 1)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">Treatment Sessions</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openExpectation === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openExpectation === 1 && (
                <div className="px-4 pb-4 pt-0">
                  <p className="text-gray-600 text-lg mb-3">
                    Sessions are typically 40 minutes and may include multiple modalities such as
                    therapeutic land based exercises, manual therapy, <Link to="/services/underwater-treadmill" className="text-[#b48cbf] hover:text-[#9d6fa8] transition-colors text-lg">underwater treadmill
                    sessions</Link>, TENS/EMS therapy, shockwave therapy, or more! Most pets
                    thoroughly enjoy their sessions and show improvements within weeks.
                  </p>
                  <p className="text-gray-600 text-lg">We encourage pet parents to attend any and all sessions!</p>
                </div>
              )}
            </div>

            {/* Treatment Frequency */}
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenExpectation(openExpectation === 2 ? null : 2)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">Treatment Frequency</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openExpectation === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openExpectation === 2 && (
                <div className="px-4 pb-4 pt-0">
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

      {/* CTA Section - Second */}
      <section className="py-20 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Canine Rehab Appointments Available!</h2>
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