import { Header } from '../Header';
import { Footer } from '../Footer';
import { Calendar, User, ArrowLeft, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import kidney from '../../../imports/kidney.jpg?url';

export function KidneyDiseaseBlogPost() {
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
              <Heart className="w-4 h-4 text-white" />
              <span className="text-white text-lg font-medium">Pet Health</span>
            </div>
            <h1 className="text-white mb-6 text-4xl sm:text-5xl leading-tight">
              Treating Kidney Disease Naturally
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>HP Staff</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 10, 2025</span>
              </div>
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src={kidney}
            alt="Treating Kidney Disease in Dogs and Cats Naturally"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What is Kidney Disease */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Kidney Disease?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Kidney disease and kidney failure in dogs and cats are extremely common conditions that affect our beloved pets. The kidneys play a vital role in filtering water and nutrients, maintaining your pet's overall health and wellbeing.
          </p>

          <div className="bg-[#b7e1da]/10 border-l-4 border-[#b7e1da] rounded-r-lg p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">How is Kidney Disease Diagnosed?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Veterinarians use several diagnostic tools to evaluate kidney function, including:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#b7e1da] font-bold text-xl">•</span>
                <span>Bloodwork (Creatinine and BUN levels)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b7e1da] font-bold text-xl">•</span>
                <span>Urinalysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b7e1da] font-bold text-xl">•</span>
                <span>Urine culture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b7e1da] font-bold text-xl">•</span>
                <span>Imaging studies</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#b48cbf]/10 border-l-4 border-[#b48cbf] rounded-r-lg p-6 mb-8">
            <p className="text-gray-900 font-semibold text-lg">
              Important to know: Kidney disease typically appears in pets once at least <span className="text-[#b48cbf]">25% of the kidneys are no longer functioning</span>, making early detection crucial.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Signs of Kidney Disease Include:</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-[#b7e1da] transition-colors">
              <p className="text-gray-700">Increased drinking and urination</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-[#b7e1da] transition-colors">
              <p className="text-gray-700">Weight loss</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-[#b7e1da] transition-colors">
              <p className="text-gray-700">Decreased energy</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-[#b7e1da] transition-colors">
              <p className="text-gray-700">Decreased appetite</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-[#b7e1da] transition-colors">
              <p className="text-gray-700">Vomiting and nausea</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-[#b7e1da] transition-colors">
              <p className="text-gray-700">Clear or dilute urine</p>
            </div>
          </div>
        </section>

        {/* Natural Treatment Methods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Natural Ways to Treat Dog and Cat Kidney Disease</h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            At Healing Paws Center, we offer holistic treatment approaches that can support your pet's kidney health and improve their quality of life. These natural therapies can be used alongside conventional Western medications for comprehensive care.
          </p>

          <div className="space-y-10">
            {/* Acupuncture */}
            <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-2xl p-8 border-2 border-[#b7e1da]/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#b7e1da] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Veterinary Acupuncture and Acupressure</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                    Acupuncture is a powerful tool for supporting kidney health in pets. This ancient practice works by:
                  </p>
                  <ul className="space-y-3 text-gray-700 text-lg mb-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                      <span>Increasing kidney blood flow and promoting healing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                      <span>Increasing appetite and energy levels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                      <span>Decreasing nausea and improving comfort</span>
                    </li>
                  </ul>
                  <div className="bg-white rounded-lg p-5">
                    <p className="text-gray-700 leading-relaxed">
                      Using Traditional Chinese Veterinary Medicine (TCVM) principles, we move Qi (energy) to damaged areas of the kidneys. Specific acupuncture points we use include <strong>BL-23 (Bladder-23), BL-39 (Bladder-39), KID-3 (Kidney-3), and ST-36 (Stomach-36)</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ozone Therapy */}
            <div className="bg-gradient-to-br from-[#b48cbf]/10 to-white rounded-2xl p-8 border-2 border-[#b48cbf]/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#b48cbf] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Subcutaneous Ozone Therapy</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    This innovative therapy involves hyper-saturating saline with ozone, which breaks down into oxygen once in the body.
                  </p>
                  <div className="bg-white rounded-lg p-5">
                    <p className="text-gray-700 leading-relaxed">
                      By increasing oxygen levels in the body, ozone therapy improves mitochondrial function and promotes cell growth and regeneration, supporting the kidneys' natural healing processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Herbal Therapy */}
            <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-2xl p-8 border-2 border-[#b7e1da]/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#b7e1da] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Herbal Therapy</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Chinese herbal medicine offers powerful support for kidney health in pets. We use carefully selected herbal blends to support kidney function and overall wellbeing.
                  </p>
                  <div className="bg-white rounded-lg p-5">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Common herbal formulas we recommend include:</strong>
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-[#b7e1da] font-bold text-xl">•</span>
                        <span>Rehmannia blends for kidney support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#b7e1da] font-bold text-xl">•</span>
                        <span>Hindquarter Weakness formulas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Therapy */}
            <div className="bg-gradient-to-br from-[#b48cbf]/10 to-white rounded-2xl p-8 border-2 border-[#b48cbf]/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#b48cbf] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Food Therapy</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Nutrition plays a crucial role in supporting kidney health. Food therapy utilizes nutritious foods specifically selected to support damaged kidneys.
                  </p>
                  <div className="bg-white rounded-lg p-5">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Kidney-supporting foods include:</strong>
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-[#b48cbf] font-bold text-xl">•</span>
                        <span>Kidney beans (appropriately prepared)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#b48cbf] font-bold text-xl">•</span>
                        <span>Brown rice</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#b48cbf] font-bold text-xl">•</span>
                        <span>Other foods selected based on Traditional Chinese Veterinary patterns</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendation */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#b7e1da]/20 via-[#b48cbf]/20 to-[#b7e1da]/20 rounded-2xl p-8 border-2 border-[#b48cbf]/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Recommendation</h3>
            <p className="text-gray-700 leading-relaxed text-lg text-center mb-4">
              These holistic therapies can be effectively combined with Western medications for a comprehensive treatment approach.
            </p>
            <p className="text-gray-900 font-bold text-xl text-center">
              We recommend starting acupuncture and all of these holistic methods <span className="text-[#b48cbf]">as soon as possible</span> for the best outcomes!
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-2xl p-10 my-16 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Support Your Pet's Kidney Health?</h3>
          <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation at Healing Paws Center to explore natural treatment options for your dog or cat's kidney disease.
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
              Learn More About Acupuncture
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog/fecal-microbiome-transplants" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Fecal Microbiome Transplants</h4>
              <p className="text-gray-600 text-lg">A natural way to heal the gut and support overall health in dogs and cats.</p>
            </Link>
            <Link to="/blog" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Treating Pet Allergies Naturally</h4>
              <p className="text-gray-600 text-lg">Effective natural approaches to managing your pet's allergies.</p>
            </Link>
            <Link to="/blog" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Degenerative Myelopathy in Dogs</h4>
              <p className="text-gray-600 text-lg">Understanding and treating this progressive neurological condition.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
