import { Header } from '../Header';
import { Footer } from '../Footer';
import { Calendar, User, ArrowLeft, Heart, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import vitaminD from '../../../imports/VD.jpg?url';

export function VitaminDBlogPost() {
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
            <h1 className="text-white mb-4 text-4xl sm:text-5xl leading-tight">
              Why You Should Check Your Dog's Vitamin D Levels: The Overlooked Key to Lifelong Health
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Dr. Jessica Dreyfuss, DVM, CVA, CCRT</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 5, 2025</span>
              </div>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src={vitaminD}
            alt="Why You Should Check Your Dog's Vitamin D Levels"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Vitamin D?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Most pet owners are diligent about vaccines, flea prevention, and annual checkups—but there's one critical health marker that often flies under the radar: <strong>Vitamin D levels</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            This essential nutrient plays a foundational role in immune function, skeletal health, cardiovascular wellness, and more. Yet unlike humans, <strong>dogs and cats cannot synthesize enough Vitamin D from sunlight alone</strong>—they depend on their diet and, in some cases, supplementation.
          </p>
        </section>

        {/* Why Vitamin D Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Vitamin D Matters for Pets</h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            Vitamin D (specifically, 25-hydroxyvitamin D) supports a wide range of critical biological processes:
          </p>

          <div className="space-y-8">
            {/* Immune Response */}
            <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-2xl p-8 border-2 border-[#b7e1da]/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#b7e1da] rounded-full"></span>
                Immune Response
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Vitamin D helps your pet fight infection and control inflammation. Studies show that <strong>low Vitamin D levels are linked to increased inflammation and decreased survival</strong> in critically ill dogs.
              </p>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Vitamin D acts as an <strong>immunomodulator</strong>, preventing the immune system from overreacting—a key factor in conditions like:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#b48cbf] font-bold text-xl">•</span>
                    <span>Allergies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#b48cbf] font-bold text-xl">•</span>
                    <span>Chronic dermatitis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#b48cbf] font-bold text-xl">•</span>
                    <span>Inflammatory bowel disease (IBD)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#b48cbf] font-bold text-xl">•</span>
                    <span>Autoimmune conditions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Heart & Kidney Health */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-[#b48cbf]/30 rounded-xl p-6 hover:border-[#b48cbf] transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Heart Health</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vitamin D deficiencies have been linked to cardiomyopathy and kidney disease. Lower levels are associated with a <strong>higher risk of adverse cardiac events</strong> in dogs.
                </p>
              </div>
              <div className="bg-white border-2 border-[#b7e1da]/30 rounded-xl p-6 hover:border-[#b7e1da] transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kidney Health</h3>
                <p className="text-gray-700 leading-relaxed">
                  Low Vitamin D levels are common in pets with chronic kidney disease, often contributing to secondary hyperparathyroidism.
                </p>
              </div>
            </div>

            {/* Other Functions */}
            <div className="bg-gradient-to-br from-[#b48cbf]/10 to-white rounded-2xl p-8 border-2 border-[#b48cbf]/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Critical Functions</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                  <span className="text-gray-700 text-lg">Calcium and phosphorus balance for strong bones and teeth</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                  <span className="text-gray-700 text-lg">Muscle strength and nerve function</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#b48cbf]/10 border-l-4 border-[#b48cbf] rounded-r-lg p-6 mt-8">
            <h4 className="font-bold text-gray-900 mb-3 text-lg">Silent Consequences of Low Vitamin D</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#b48cbf]">→</span>
                <span>Chronic inflammation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b48cbf]">→</span>
                <span>Weak bones or dental issues</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b48cbf]">→</span>
                <span>Increased risk of infection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b48cbf]">→</span>
                <span>Poor healing and post-surgical recovery</span>
              </li>
            </ul>
          </div>
        </section>

        {/* At-Risk Pets */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Are Some Pets at Greater Risk?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Certain pets are more likely to have suboptimal Vitamin D levels:
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#b7e1da]/20 to-[#b48cbf]/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dietary Factors</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pets eating <strong>homemade, raw, or limited-ingredient diets</strong> may not get adequate Vitamin D. But even <strong>commercial pet foods</strong> can fall short—while they meet AAFCO minimum requirements, these may not reach optimal targets for all pets.
              </p>
              <div className="bg-white/60 rounded-lg p-5">
                <p className="text-gray-900 font-semibold">
                  Important: Vitamin D levels in food do not always correlate with blood levels—testing is the only way to know for sure.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#b48cbf] transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">Chronic Conditions</h4>
                <p className="text-gray-700">Pets with kidney disease, liver disease, or <strong>cancer</strong></p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#b48cbf] transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">Aging Pets</h4>
                <p className="text-gray-700">Senior or immunocompromised animals</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#b48cbf] transition-colors sm:col-span-2">
                <h4 className="font-bold text-gray-900 mb-2">Clinical Signs</h4>
                <p className="text-gray-700">Those with frequent infections, joint issues, or low energy levels</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How is Vitamin D Tested in Pets?</h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            Testing is simple: a blood test measures <strong>serum 25-hydroxyvitamin D</strong> levels, the most accurate marker of Vitamin D status in the body.
          </p>

          <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-2xl p-8 border-2 border-[#b7e1da]/30 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">We Recommend Testing For:</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5">
                <p className="text-gray-700 leading-relaxed">Pets with unexplained fatigue, inflammation, or mobility issues</p>
              </div>
              <div className="bg-white rounded-lg p-5 border-2 border-[#b48cbf]">
                <p className="text-gray-900 font-bold text-lg flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#b48cbf]" />
                  ALL CANCER PATIENTS
                </p>
                <p className="text-gray-700 mt-2">
                  Dogs with lymphoma and other cancers have been shown to have lower Vitamin D levels. Higher levels at diagnosis are linked to <strong>longer survival times</strong>.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <p className="text-gray-700 leading-relaxed">Pets on non-standard diets (homemade, raw, or exotic proteins)</p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <p className="text-gray-700 leading-relaxed">Senior pets during routine wellness checkups</p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <p className="text-gray-700 leading-relaxed">
                  Pets recovering from injury, illness, or surgery—low levels in hospitalized dogs are linked to <strong>higher risk of death</strong>
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg">
            Test results will indicate whether your pet is deficient, insufficient, or at optimal levels, allowing for a tailored treatment plan.
          </p>
        </section>

        {/* If Deficient */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What If My Pet Is Deficient?</h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            If testing reveals low Vitamin D, we can help restore healthy levels through:
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border-2 border-[#b7e1da] rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Vet-Guided Supplementation</h4>
              <p className="text-gray-700">Safe, measured dosing tailored to your pet's needs</p>
            </div>
            <div className="bg-white border-2 border-[#b7e1da] rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Diet Adjustments</h4>
              <p className="text-gray-700">Especially important for homemade or exotic protein diets</p>
            </div>
            <div className="bg-white border-2 border-[#b7e1da] rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Re-Testing</h4>
              <p className="text-gray-700">Monitor progress to ensure safe, effective correction</p>
            </div>
            <div className="bg-white border-2 border-[#b7e1da] rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Supportive Therapies</h4>
              <p className="text-gray-700">Target inflammation, muscle strength, and immune function</p>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-900 mb-3 text-xl">Important Warning</h4>
                <p className="text-red-800 leading-relaxed text-lg">
                  Do NOT give your pet human Vitamin D supplements or over-the-counter products without veterinary guidance. <strong>Overdosing can be toxic</strong> and cause serious health complications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Line */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#b7e1da]/20 via-[#b48cbf]/20 to-[#b7e1da]/20 rounded-2xl p-8 border-2 border-[#b48cbf]/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">The Bottom Line</h3>
            <p className="text-gray-700 leading-relaxed text-lg text-center mb-4">
              Vitamin D is a vital building block for your pet's long-term health. Testing can uncover hidden imbalances before they turn into bigger problems—helping your dog or cat live a longer, stronger, healthier life.
            </p>
            <p className="text-gray-900 font-bold text-xl text-center">
              Ready to take this proactive step?
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-2xl p-10 my-16 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Schedule Your Pet's Vitamin D Screening Today</h3>
          <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
            Contact Healing Paws Center to schedule a wellness screening and discover if your pet's Vitamin D levels are optimal.
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
              to="/services"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-bold text-lg"
            >
              View All Services
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
              <p className="text-gray-600 text-lg">A natural way to heal the gut and support your pet's immune system.</p>
            </Link>
            <Link to="/blog/treating-kidney-disease-naturally" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Treating Kidney Disease Naturally</h4>
              <p className="text-gray-600 text-lg">Holistic approaches to managing kidney disease in dogs and cats.</p>
            </Link>
            <Link to="/blog" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Treating Pet Allergies Naturally</h4>
              <p className="text-gray-600 text-lg">Effective natural approaches to managing allergies and skin conditions.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
