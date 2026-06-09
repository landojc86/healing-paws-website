import { Header } from '../Header';
import { Footer } from '../Footer';
import { Calendar, User, ArrowLeft, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import ivdd from '../../../imports/ivdd-dachshund-title-image.jpg?url';

export function IVDDAcupunctureBlogPost() {
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
              Treating Intervertebral Disc Disease in Dogs Using Acupuncture
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Dr. Jessie Dreyfuss, DVM, CVA, CCRT</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>February 13, 2018</span>
              </div>
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src={ivdd}
            alt="Treating IVDD in Dogs with Acupuncture"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is IVDD?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Intervertebral disc disease (IVDD), also known as herniated or "slipped discs," occurs when the outer portion of spinal discs breaks down over time. The inner disc material can then break through and damage the spinal cord, resulting in pain, nerve damage, and potentially paralysis.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Breeds with long backs, such as Dachshunds and Corgis, are commonly affected.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs of IVDD</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Pet owners may notice:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#b48cbf] flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg">Crying out when picked up</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#b48cbf] flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg">Looking at their back repeatedly</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#b48cbf] flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg">Difficulty walking with back legs or all limbs</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#b48cbf] flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg">Hunched posture</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#b48cbf] flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg">Refusing to jump or use stairs</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#b48cbf] flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg">Resistance to moving head/neck, shifting only eyes</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Acupuncture Treats IVDD</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Acupuncture involves placing tiny needles at precise locations that are anatomically known to have a junction of nerve bundles, arterioles, and venules. For IVDD, points near major spinal nerves are selected.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            This stimulates the body to release endorphins, norepinephrine, and anti-inflammatory mediators, promoting natural healing while providing pain relief. Most animals fall asleep during treatment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Evidence Supporting Acupuncture</h2>
          <div className="bg-gradient-to-r from-[#b7e1da]/20 to-[#b48cbf]/20 rounded-lg p-6 border-l-4 border-[#b48cbf] mb-6">
            <p className="text-gray-900 font-semibold text-lg mb-3">
              Studies demonstrate that dogs with herniated discs recover more quickly when acupuncture is added to their treatment plan versus Western treatment/surgery alone.
            </p>
            <p className="text-gray-700 text-lg">
              In one study, dogs receiving acupuncture walked sooner than those who didn't. Acupuncture is particularly valuable when surgery isn't recommended or when pets cannot undergo anesthesia.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Physical Therapy Benefits</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Physical therapy complements acupuncture through:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-[#b7e1da]/20 rounded-lg p-5 border-l-4 border-[#b48cbf]">
              <h4 className="font-bold text-gray-900 mb-2">Passive range of motion and massage</h4>
              <p className="text-gray-700 text-lg">For comfort and circulation</p>
            </div>
            <div className="bg-[#b48cbf]/20 rounded-lg p-5 border-l-4 border-[#b7e1da]">
              <h4 className="font-bold text-gray-900 mb-2">Laser therapy</h4>
              <p className="text-gray-700 text-lg">To encourage blood flow and pain relief</p>
            </div>
            <div className="bg-[#b7e1da]/20 rounded-lg p-5 border-l-4 border-[#b48cbf]">
              <h4 className="font-bold text-gray-900 mb-2">Underwater treadmill therapy</h4>
              <p className="text-gray-700 text-lg">For low-impact muscle rebuilding (one minute in water equals three minutes on land)</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Wheelchair Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Wheelchairs may be appropriate depending on the pet's mobility and owner goals. Proper fitting is essential to achieve normal biomechanics, avoid discomfort, and prevent pressure sores.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Works Cited:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 text-lg">
            <li>Hayashi et al. (2007). JAVMA 231(6): 913-918.</li>
            <li>Joaquim et al (2010). JAVMA 236(11): 1225-1229.</li>
          </ol>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-2xl p-10 my-16 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Help Your Dog with IVDD</h3>
          <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore acupuncture and physical therapy options for your dog's disc disease.
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
              to="/services/acupuncture"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-bold text-lg"
            >
              Learn About Acupuncture
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
