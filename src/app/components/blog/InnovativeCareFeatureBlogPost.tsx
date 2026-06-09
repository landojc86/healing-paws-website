import { Header } from '../Header';
import { Footer } from '../Footer';
import { Calendar, User, ArrowLeft, Heart, Award, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import featureImage from '../../../imports/df-669x272.jpg?url';

export function InnovativeCareFeatureBlogPost() {
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
              Featured: Innovative Care Journal Article Written by Dr. Jessie
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Dr. Jessica Dreyfuss, DVM, CVA, CCRT</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>December 10, 2024</span>
              </div>
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src={featureImage}
            alt="Innovative Care Journal Feature"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#b7e1da]/20 to-[#b48cbf]/20 rounded-2xl p-8 mb-8 text-center">
            <Award className="w-16 h-16 text-[#b48cbf] mx-auto mb-4" />
            <p className="text-gray-900 text-2xl font-bold mb-2">
              We're Proud to Announce
            </p>
            <p className="text-gray-700 text-xl">
              Dr. Jessica Dreyfuss has been featured in the <strong>Innovative Care Journal</strong>
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            We're thrilled to share that Dr. Jessie, our founder and lead veterinarian at Healing Paws Center, has authored an important article published in the Innovative Care Journal on a topic close to our hearts: helping pets achieve and maintain a healthy weight through veterinary rehabilitation.
          </p>
        </section>

        {/* Article Details */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About the Article</h2>

          <div className="bg-white border-2 border-[#b7e1da] rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              "How Veterinary Rehabilitation Can Help Obese Dogs"
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              This comprehensive article explores the role of veterinary rehabilitation in treating canine obesity—one of the most common health challenges facing pets today.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Dr. Jessie shares her expertise on how targeted rehabilitation methods can help overweight dogs safely lose weight, improve mobility, and enhance their overall quality of life while protecting their joints and preventing injury.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#b48cbf]/10 to-white rounded-2xl p-8 border-2 border-[#b48cbf]/30">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Key Topics Covered:</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                <p className="text-gray-700">The health impacts of canine obesity</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                <p className="text-gray-700">Safe exercise protocols for overweight dogs</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                <p className="text-gray-700">Underwater treadmill therapy benefits</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                <p className="text-gray-700">Rehabilitation techniques and approaches</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                <p className="text-gray-700">Creating sustainable weight loss plans</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                <p className="text-gray-700">Long-term health maintenance strategies</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Dr. Jessie */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Dr. Jessica Dreyfuss</h2>

          <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-2xl p-8 border-2 border-[#b7e1da]/30 mb-8">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Dr. Jessica Dreyfuss brings a wealth of knowledge and specialized training to veterinary rehabilitation and integrative care. Her unique combination of certifications and hands-on experience makes her a recognized expert in the field.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-4">Credentials & Certifications:</h4>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5">
                <h5 className="font-bold text-gray-900 mb-2">Doctor of Veterinary Medicine (DVM)</h5>
                <p className="text-gray-600 text-lg">North Carolina State University College of Veterinary Medicine (with honors)</p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <h5 className="font-bold text-gray-900 mb-2">Certified Veterinary Acupuncturist (CVA)</h5>
                <p className="text-gray-600 text-lg">Chi Institute of Traditional Chinese Veterinary Medicine</p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <h5 className="font-bold text-gray-900 mb-2">Certified Canine Rehabilitation Therapist (CCRT)</h5>
                <p className="text-gray-600 text-lg">Canine Rehabilitation Institute</p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <h5 className="font-bold text-gray-900 mb-2">Additional Certifications</h5>
                <ul className="text-gray-600 text-lg space-y-1">
                  <li>• Certified in Food Therapy</li>
                  <li>• Certified in Therapeutic Class IIIB Laser Use</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-5">
                <h5 className="font-bold text-gray-900 mb-2">Education</h5>
                <p className="text-gray-600 text-lg">Bachelor of Science with Honors, Duke University</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg">
            Dr. Jessie's comprehensive training in both traditional veterinary medicine and integrative therapies allows her to provide truly holistic care that addresses the whole animal, not just symptoms.
          </p>
        </section>

        {/* Why This Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Canine Rehabilitation Matters for Weight Loss</h2>

          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Obesity is one of the most common health conditions affecting dogs today, contributing to serious issues like arthritis, diabetes, heart disease, and reduced lifespan. Yet traditional weight loss approaches often overlook a critical component: proper rehabilitation.
            </p>

            <div className="bg-[#b48cbf]/10 border-l-4 border-[#b48cbf] rounded-r-lg p-6">
              <p className="text-gray-900 font-semibold text-lg mb-3">
                The Challenge:
              </p>
              <p className="text-gray-700 leading-relaxed">
                Overweight dogs need exercise to lose weight, but traditional exercise can be painful and even dangerous for dogs carrying extra pounds. The additional weight puts tremendous strain on joints, increases injury risk, and can make physical activity uncomfortable or impossible.
              </p>
            </div>

            <div className="bg-[#b7e1da]/10 border-l-4 border-[#b7e1da] rounded-r-lg p-6">
              <p className="text-gray-900 font-semibold text-lg mb-3">
                The Solution:
              </p>
              <p className="text-gray-700 leading-relaxed">
                Veterinary rehabilitation offers specialized techniques—like underwater treadmill therapy, therapeutic exercises, and progressive conditioning programs—that allow obese dogs to exercise safely and effectively while minimizing stress on their joints and reducing injury risk.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach at Healing Paws Center</h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            At Healing Paws Center, we implement the same evidence-based rehabilitation protocols that Dr. Jessie discusses in her article. Our comprehensive weight management program includes:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#b7e1da] rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Underwater Treadmill Therapy</h4>
              <p className="text-gray-700 text-lg">Low-impact cardiovascular exercise that burns calories while water buoyancy protects joints</p>
            </div>
            <div className="bg-white border-2 border-[#b48cbf] rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Progressive Exercise Plans</h4>
              <p className="text-gray-700 text-lg">Customized programs that start at your pet's current fitness level and gradually increase</p>
            </div>
            <div className="bg-white border-2 border-[#b48cbf] rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Nutritional Guidance</h4>
              <p className="text-gray-700 text-lg">Working with your veterinarian to optimize diet and portion control</p>
            </div>
            <div className="bg-white border-2 border-[#b7e1da] rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Ongoing Monitoring</h4>
              <p className="text-gray-700 text-lg">Regular assessments to track progress and adjust programs as needed</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-2xl p-10 my-16 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Help Your Pet Achieve a Healthy Weight?</h3>
          <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation to learn how our rehabilitation-based weight management program can help your dog lose weight safely and keep it off for good.
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
            <a
              href="#"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-bold text-lg cursor-default opacity-75"
            >
              Learn About Weight Management
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog/laser-therapy-fort-lauderdale" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Laser Therapy for Dogs</h4>
              <p className="text-gray-600 text-lg">Non-invasive, pain-free treatment for healing and pain relief.</p>
            </Link>
            <Link to="/blog/treating-kidney-disease-naturally" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Treating Kidney Disease Naturally</h4>
              <p className="text-gray-600 text-lg">Holistic approaches including acupuncture and herbal therapy.</p>
            </Link>
            <Link to="/blog/vitamin-d-levels" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Check Your Dog's Vitamin D Levels</h4>
              <p className="text-gray-600 text-lg">The overlooked key to immune function and lifelong health.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
