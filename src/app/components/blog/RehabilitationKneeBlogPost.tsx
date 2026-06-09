import { Header } from '../Header';
import { Footer } from '../Footer';
import { Calendar, User, ArrowLeft, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import laserInfrared from '../../../imports/laser-and-infrared-imaging-lg-crop.jpg?url';

export function RehabilitationKneeBlogPost() {
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
              <Activity className="w-4 h-4 text-white" />
              <span className="text-white text-lg font-medium">Rehabilitation</span>
            </div>
            <h1 className="text-white mb-6 text-4xl sm:text-5xl leading-tight">
              Rehabilitation After Canine Knee Surgery
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Dr. Jessie Dreyfuss, DVM, CVA, CCRT</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>July 26, 2018</span>
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
            src={laserInfrared}
            alt="Canine Rehabilitation with Laser and Infrared Imaging"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Canine Knee Injuries</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Dogs have a ligament similar to human ACLs called the cranial cruciate ligament, which can rupture. Surgical options include TPLO, TTA, lateral suture procedure, and CBLO procedures that alter knee joint mechanics.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Three Key Reasons for Post-Operative Rehabilitation</h2>

          <div className="space-y-8">
            {/* Reason 1 */}
            <div className="bg-[#b7e1da]/20 rounded-lg p-6 border-l-4 border-[#b48cbf]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Pain Relief and Faster Recovery</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Post-operative pain is significant. Treatment modalities offered include:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Laser therapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Canine massage</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Acupuncture</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Therapeutic ultrasound</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                These therapies help "lower pain and inflammation" so pets can resume normal activities sooner.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                We use infrared imaging to assess inflammation levels and ensure proper pain management. Underwater treadmill therapy allows pets to bear only 20% of their weight, promoting full range of motion while preventing muscle loss.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-[#b48cbf]/20 rounded-lg p-6 border-l-4 border-[#b7e1da]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Prevention of Second Injury</h3>
              <div className="bg-white rounded-lg p-4 mb-4 border-2 border-[#b48cbf]">
                <p className="text-gray-900 font-bold text-lg">
                  Critical Statistic: More than 50% of dogs will rupture their OTHER cranial cruciate ligament within 12 months of the first injury.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Targeted strengthening exercises and progressive conditioning aim to reduce this risk and avoid expensive second surgeries.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-[#b7e1da]/20 rounded-lg p-6 border-l-4 border-[#b48cbf]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Professional Guidance</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Just as human medicine provides post-operative rehabilitation as standard practice, professional veterinary supervision helps protect the initial surgical investment and ensures proper recovery progression.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our holistic approaches focus on helping pets return to running and playing through comprehensive rehabilitation programs including land exercises for lifelong muscle retention.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Treatment Philosophy</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            We emphasize holistic approaches beyond oral pain medications, focusing on helping pets return to running and playing through comprehensive rehabilitation programs including land exercises for lifelong muscle retention.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-2xl p-10 my-16 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Start Your Pet's Post-Surgical Recovery</h3>
          <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a rehabilitation consultation to ensure your pet's optimal recovery and prevent future injuries.
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
              to="/services/therapeutic-exercise"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-bold text-lg"
            >
              Learn About Rehabilitation
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
