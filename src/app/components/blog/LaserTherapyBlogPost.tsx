import { Header } from '../Header';
import { Footer } from '../Footer';
import { Calendar, User, ArrowLeft, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import laser from '../../../imports/lser.jpg?url';

export function LaserTherapyBlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-lg font-medium">Treatment Modalities</span>
            </div>
            <h1 className="text-white mb-6 text-4xl sm:text-5xl leading-tight">
              Laser Therapy for Dogs in Fort Lauderdale
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>HP Staff</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>December 15, 2024</span>
              </div>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src={laser}
            alt="Laser Therapy for Dogs in Fort Lauderdale"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#b7e1da]/20 to-[#b48cbf]/20 rounded-2xl p-8 mb-8">
            <p className="text-gray-900 text-xl font-medium text-center">
              Laser therapy provides a <strong>non-invasive, NON-PAINFUL, drug-free</strong> way to help your pet heal and find relief from pain.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            At Healing Paws Center, we typically recommend laser therapy treatments 2-3 times weekly, depending on your pet's condition. This powerful therapy can be effectively combined with other holistic treatments including acupuncture, massage, magnetic pain therapy, and hydrotherapy for comprehensive care.
          </p>
        </section>

        {/* What is Laser Therapy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Laser Therapy?</h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            Laser therapy is an advanced treatment that reduces pain and inflammation while promoting healing throughout your pet's body. The therapy works by:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-xl p-6 border-2 border-[#b7e1da]/30 hover:border-[#b7e1da] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#b7e1da] text-2xl">✓</span>
                <h4 className="font-bold text-gray-900">Releases Endorphins</h4>
              </div>
              <p className="text-gray-600 text-lg">Natural pain relief</p>
            </div>
            <div className="bg-gradient-to-br from-[#b48cbf]/10 to-white rounded-xl p-6 border-2 border-[#b48cbf]/30 hover:border-[#b48cbf] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#b48cbf] text-2xl">✓</span>
                <h4 className="font-bold text-gray-900">Improves Blood Flow</h4>
              </div>
              <p className="text-gray-600 text-lg">Enhanced circulation</p>
            </div>
            <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-xl p-6 border-2 border-[#b7e1da]/30 hover:border-[#b7e1da] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#b7e1da] text-2xl">✓</span>
                <h4 className="font-bold text-gray-900">Improves Nerve Function</h4>
              </div>
              <p className="text-gray-600 text-lg">Better nerve response</p>
            </div>
            <div className="bg-gradient-to-br from-[#b48cbf]/10 to-white rounded-xl p-6 border-2 border-[#b48cbf]/30 hover:border-[#b48cbf] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#b48cbf] text-2xl">✓</span>
                <h4 className="font-bold text-gray-900">Decreases Pain</h4>
              </div>
              <p className="text-gray-600 text-lg">Fast relief</p>
            </div>
            <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-xl p-6 border-2 border-[#b7e1da]/30 hover:border-[#b7e1da] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#b7e1da] text-2xl">✓</span>
                <h4 className="font-bold text-gray-900">Repairs Tissue</h4>
              </div>
              <p className="text-gray-600 text-lg">Accelerated healing</p>
            </div>
            <div className="bg-gradient-to-br from-[#b48cbf]/10 to-white rounded-xl p-6 border-2 border-[#b48cbf]/30 hover:border-[#b48cbf] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#b48cbf] text-2xl">✓</span>
                <h4 className="font-bold text-gray-900">Relaxes Muscles</h4>
              </div>
              <p className="text-gray-600 text-lg">Reduces tension</p>
            </div>
          </div>

          {/* Conditions Treated */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Conditions We Treat with Laser Therapy</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Wounds (hot spots, skin infections)',
              'Arthritis',
              'Hip or elbow dysplasia',
              'Intervertebral disc disease/back problems',
              'Lick granuloma',
              'Ear infections',
              'Joint pain',
              'Sprains/strains',
              'Cranial cruciate ligament rupture',
              'Gingivitis',
              'Surgical wound healing',
              'Degenerative Myelopathy',
              'Burns',
              'Feline interstitial cystitis',
              'Stomatitis',
              'Fracture healing'
            ].map((condition, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-lg p-4 hover:border-[#b7e1da] transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-[#b48cbf] font-bold mt-0.5">•</span>
                  <p className="text-gray-700">{condition}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Does Laser Therapy Work?</h2>
          <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-2xl p-8 border-2 border-[#b7e1da]/30">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Laser therapy utilizes precise frequencies to stimulate cells to release ATP (cellular energy), which accelerates healing and tissue repair.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              The treatment also reduces inflammatory mediators, helping to decrease swelling and pain. Different laser classes vary by wavelength, power, duration, and dosage, allowing us to customize treatment for your pet's specific needs.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Questions About Laser Therapy</h2>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="bg-white border-2 border-[#b48cbf]/30 rounded-2xl p-8 hover:border-[#b48cbf] transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <HelpCircle className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-900">Why does my dog need to wear goggles?</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg pl-10">
                Protective "doggles" are essential to protect your pet's retina during laser therapy treatment. These special goggles ensure the laser light doesn't damage their sensitive eyes while we work on other areas of their body.
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-white border-2 border-[#b7e1da]/30 rounded-2xl p-8 hover:border-[#b7e1da] transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <HelpCircle className="w-6 h-6 text-[#b7e1da] flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-900">Will it hurt my pet?</h3>
              </div>
              <div className="pl-10">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  <strong>No!</strong> Laser therapy is completely painless. It's a "cold laser," meaning your pet won't feel any sensation during treatment.
                </p>
                <div className="bg-[#b7e1da]/10 rounded-lg p-5">
                  <p className="text-gray-700">
                    Sessions typically last just 4-7 minutes and can often be performed during your pet's acupuncture appointments for added convenience.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-white border-2 border-[#b48cbf]/30 rounded-2xl p-8 hover:border-[#b48cbf] transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <HelpCircle className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-900">Do we need to shave or clip my pet's hair?</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg pl-10">
                No shaving or clipping is required! The laser penetrates through the fur to reach the tissues beneath. Additionally, <strong>no sedation is needed</strong>—your pet can remain fully awake and comfortable during treatment.
              </p>
            </div>

            {/* Question 4 */}
            <div className="bg-white border-2 border-[#b7e1da]/30 rounded-2xl p-8 hover:border-[#b7e1da] transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <HelpCircle className="w-6 h-6 text-[#b7e1da] flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-900">Are there any contra-indications?</h3>
              </div>
              <div className="pl-10">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Laser therapy is not recommended for:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#b7e1da] font-bold text-xl">•</span>
                    <span className="text-gray-700">Animals with cancer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#b7e1da] font-bold text-xl">•</span>
                    <span className="text-gray-700">Pregnant animals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h2>

          <div className="space-y-8">
            {/* Buddy's Tale */}
            <div className="bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Buddy's Tale</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-white/95 text-lg leading-relaxed">
                  Buddy came to us with a non-healing neck wound that had been causing significant discomfort. Using laser therapy combined with ozonated saline treatments, Buddy's wound healed quickly and completely. The combination of these natural therapies accelerated his healing process dramatically.
                </p>
              </div>
            </div>

            {/* Roxy's Tale */}
            <div className="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Roxy's Tale</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-white/95 text-lg leading-relaxed mb-4">
                  Roxy suffered from a partial cranial cruciate ligament tear, a painful condition that often requires surgery. However, her family chose to manage the condition conservatively using a comprehensive holistic approach.
                </p>
                <p className="text-white/95 text-lg leading-relaxed">
                  Through a combination of acupuncture, physical therapy, targeted supplements, and laser therapy, Roxy made an incredible recovery. Today, she's back to hiking and running—activities her family thought might be impossible after her injury!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-2xl p-10 my-16 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Experience the Healing Power of Laser Therapy</h3>
          <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
            Give your dog natural, pain-free relief. Schedule a laser therapy consultation at Healing Paws Center in Fort Lauderdale today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-bold shadow-lg text-lg"
            >
              Book Appointment
            </a>
            <Link
              to="/services/laser-therapy"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-bold text-lg"
            >
              Learn More About Laser Therapy
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog/treating-laryngeal-paralysis-naturally" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Treating Laryngeal Paralysis Naturally</h4>
              <p className="text-gray-600 text-lg">Natural treatment options including acupuncture and herbal therapy.</p>
            </Link>
            <Link to="/blog/treating-pet-allergies-naturally" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Treating Pet Allergies Naturally</h4>
              <p className="text-gray-600 text-lg">Holistic approaches to managing allergies and skin conditions.</p>
            </Link>
            <Link to="/blog" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Degenerative Myelopathy in Dogs</h4>
              <p className="text-gray-600 text-lg">Supporting mobility and quality of life in dogs with DM.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
