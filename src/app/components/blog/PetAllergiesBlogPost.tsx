import { Header } from '../Header';
import { Footer } from '../Footer';
import { Calendar, User, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import petAllergiesImage from '../../../imports/AdobeStock_273149021_1-scaled.png?url';

export function PetAllergiesBlogPost() {
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
              Treating Pet Allergies Naturally
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Dr. Jessica Dreyfuss, DVM, CVA, CCRT</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>December 20, 2024</span>
              </div>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <ImageWithFallback
            src={petAllergiesImage}
            alt="Pet with allergies receiving natural treatment"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
            As pet owners, watching our furry friends suffer from allergies can be heart-wrenching. Whether it's seasonal changes, food sensitivities, or environmental factors, allergies can lead to constant itching, digestive problems, and overall discomfort for your beloved companion.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            While conventional veterinary medicine often relies on medications like Apoquel and Cytopoint injections to manage symptoms, holistic approaches focus on addressing the root causes of allergies and supporting your pet's overall health naturally.
          </p>
        </section>

        {/* Understanding Allergies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Allergies in Pets</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Allergies in pets typically manifest in several ways:
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-xl p-6 border-2 border-[#b7e1da]/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#b7e1da] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Repeated Skin Issues</h4>
                  <p className="text-gray-700">
                    Skin irritations, infections, hot spots, or rashes—especially in very itchy pets who can't seem to find relief
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#b48cbf]/10 to-white rounded-xl p-6 border-2 border-[#b48cbf]/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#b48cbf] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Repeated Ear Infections</h4>
                  <p className="text-gray-700">
                    Chronic ear problems that keep coming back despite treatment
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-xl p-6 border-2 border-[#b7e1da]/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#b7e1da] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Gastrointestinal Upset</h4>
                  <p className="text-gray-700 mb-3">
                    Digestive issues that may be allergy-related
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-700 text-lg">
                      <strong>Important note:</strong> 90% of the immune system is located in the gut, making digestive health crucial for managing allergies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Holistic Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Holistic Approach to Pet Allergies</h2>
          <div className="bg-gradient-to-r from-[#b7e1da]/20 to-[#b48cbf]/20 rounded-2xl p-8 mb-8">
            <p className="text-gray-900 text-lg font-medium text-center">
              Holistic veterinary medicine treats the whole animal rather than just masking symptoms, offering a comprehensive path to lasting relief.
            </p>
          </div>

          <div className="space-y-10">
            {/* Diet and Nutrition */}
            <div className="bg-white border-2 border-[#b7e1da] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#b7e1da] rounded-full"></span>
                1. Diet and Nutrition
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Nutrition is a cornerstone of managing pet allergies. What your pet eats directly impacts their immune response and overall health.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#b7e1da]/10 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Specific Proteins</h4>
                  <p className="text-gray-700 text-lg">
                    Removing allergenic ingredients helps identify food sensitivities and reduce inflammatory responses
                  </p>
                </div>
                <div className="bg-[#b7e1da]/10 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">High-Quality Ingredients</h4>
                  <p className="text-gray-700 text-lg">
                    Avoiding fillers, artificial additives, and preservatives that can trigger allergic reactions
                  </p>
                </div>
                <div className="bg-[#b7e1da]/10 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Anti-Inflammatory Foods</h4>
                  <p className="text-gray-700 text-lg">
                    Adding ingredients with natural anti-inflammatory properties to support healing
                  </p>
                </div>
              </div>
            </div>

            {/* Supplements */}
            <div className="bg-white border-2 border-[#b48cbf] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#b48cbf] rounded-full"></span>
                2. Supplements
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Strategic supplementation supports the immune system and reduces inflammation:
              </p>
              <div className="space-y-4">
                <div className="bg-[#b48cbf]/10 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Probiotics</h4>
                  <p className="text-gray-700">
                    Support gut health, which is directly linked to immune function and allergy response
                  </p>
                </div>
                <div className="bg-[#b48cbf]/10 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Herbal Remedies</h4>
                  <p className="text-gray-700">
                    Natural herbs can soothe skin irritations and support the body's healing processes
                  </p>
                </div>
                <div className="bg-[#b48cbf]/10 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Fish Oils</h4>
                  <p className="text-gray-700">
                    Omega-3 fatty acids reduce inflammation and improve skin and coat health
                  </p>
                </div>
              </div>
            </div>

            {/* Veterinary Acupuncture */}
            <div className="bg-white border-2 border-[#b7e1da] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#b7e1da] rounded-full"></span>
                3. Veterinary Acupuncture
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Acupuncture uses fine needles placed at specific points on the body to stimulate healing and balance:
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-5 border-2 border-[#b7e1da]/30">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-[#b7e1da]">✓</span>
                    Reduce Inflammation
                  </h4>
                  <p className="text-gray-700 text-lg">
                    Improved circulation helps reduce allergic inflammation throughout the body
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border-2 border-[#b7e1da]/30">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-[#b7e1da]">✓</span>
                    Enhance Immune Function
                  </h4>
                  <p className="text-gray-700 text-lg">
                    Stimulates the body's regulatory systems to better manage allergens
                  </p>
                </div>
              </div>
            </div>

            {/* Homeopathy */}
            <div className="bg-white border-2 border-[#b48cbf] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#b48cbf] rounded-full"></span>
                4. Homeopathy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Based on the principle of "like cures like," homeopathy uses highly diluted substances to:
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-[#b48cbf]/10 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Address Specific Symptoms</h4>
                  <p className="text-gray-700 text-lg">
                    Target individual allergy symptoms such as itching or diarrhea
                  </p>
                </div>
                <div className="bg-[#b48cbf]/10 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Support Overall Health</h4>
                  <p className="text-gray-700 text-lg">
                    Boost resilience and reduce sensitivity to allergens over time
                  </p>
                </div>
              </div>
            </div>

            {/* Environmental Modifications */}
            <div className="bg-white border-2 border-[#b7e1da] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#b7e1da] rounded-full"></span>
                5. Environmental Modifications
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Reducing environmental allergens can make a significant difference. We provide personalized recommendations for minimizing your pet's exposure to allergens based on their individual sensitivities and living situation.
              </p>
            </div>

            {/* Veterinary Ozone Therapy */}
            <div className="bg-white border-2 border-[#b48cbf] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#b48cbf] rounded-full"></span>
                6. Veterinary Ozone Therapy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Ozone therapy uses ozone (O₃) molecules to promote healing and reduce allergic responses:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                  <p className="text-gray-700">Targets underlying inflammation that drives allergic reactions</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                  <p className="text-gray-700">Boosts the immune system to reduce allergic reaction severity</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                  <p className="text-gray-700">Enhances skin health with natural anti-microbial properties</p>
                </div>
              </div>
              <div className="bg-[#b48cbf]/10 rounded-lg p-5 mt-6">
                <p className="text-gray-700 text-lg">
                  <strong>Administration methods:</strong> Ozone therapy can be delivered subcutaneously, rectally, or topically, depending on your pet's specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#b7e1da]/20 via-[#b48cbf]/20 to-[#b7e1da]/20 rounded-2xl p-8 border-2 border-[#b48cbf]/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">The Path Forward</h3>
            <p className="text-gray-700 leading-relaxed text-lg text-center mb-4">
              Managing pet allergies doesn't have to be a one-dimensional process of simply suppressing symptoms with medications.
            </p>
            <p className="text-gray-900 font-semibold text-xl text-center">
              Holistic medicine offers comprehensive tools—including diet optimization, targeted supplements, acupuncture, homeopathy, environmental modifications, and ozone therapy—to help your pet find lasting relief and improve their quality of life.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-2xl p-10 my-16 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Help Your Pet Find Allergy Relief</h3>
          <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation at Healing Paws Center to explore natural treatment options that address the root causes of your pet's allergies.
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
              to="/services/integrative-holistic"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-bold text-lg"
            >
              Explore Holistic Services
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
              <p className="text-gray-600 text-lg">A natural way to heal the gut and support immune health in allergic pets.</p>
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
