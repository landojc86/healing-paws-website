import { Header } from '../Header';
import { Footer } from '../Footer';
import { Calendar, User, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import fecalMicrobiome from '../../../imports/fecal-microbiome.jpg?url';

export function FecalMicrobiomeBlogPost() {
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
              Fecal Microbiome Transplants for Dogs and Cats: A Natural Way to Heal the Gut
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>HP Staff</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 15, 2025</span>
              </div>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src={fecalMicrobiome}
            alt="Fecal Microbiome Transplants for Dogs and Cats"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
            If your dog or cat is suffering from chronic digestive issues, allergies, or even anxiety, there's a cutting-edge natural therapy that's transforming veterinary care: <strong>fecal microbiome transplantation (FMT)</strong>. At Healing Paws Center in Fort Lauderdale, we're using this innovative approach to help pets restore their gut health and overall wellbeing.
          </p>
        </div>

        {/* What Is FMT */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is a Fecal Microbiome Transplant?</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Fecal microbiome transplantation involves transferring healthy, filtered gut bacteria from a carefully screened donor animal into the digestive system of a sick or imbalanced pet.
          </p>
          <div className="bg-[#b7e1da]/10 border-l-4 border-[#b7e1da] rounded-r-lg p-6 my-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              At Healing Paws Center, we use a unique combination of <strong>capsules, enemas, and ozone therapy</strong>. The entire process takes approximately 30 minutes and <strong>requires no anesthesia</strong>, making it safe and stress-free for your pet.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            FMT works by repopulating the gut with healthy bacteria, restoring balance to the microbiome and supporting your pet's natural healing abilities.
          </p>
        </section>

        {/* Why Gut Health Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Gut Health Matters for Pets</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            The gut is the foundation of your pet's health. It plays a central role in:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#b7e1da] transition-colors">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#b48cbf] rounded-full"></span>
                Immune System Function
              </h3>
              <p className="text-gray-600 text-lg">Over 70% of the immune system lives in the gut</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#b7e1da] transition-colors">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#b48cbf] rounded-full"></span>
                Inflammation Regulation
              </h3>
              <p className="text-gray-600 text-lg">Especially critical for cancer patients</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#b7e1da] transition-colors">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#b48cbf] rounded-full"></span>
                Skin Health & Allergies
              </h3>
              <p className="text-gray-600 text-lg">Many skin issues originate in the gut</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#b7e1da] transition-colors">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#b48cbf] rounded-full"></span>
                Mental Health
              </h3>
              <p className="text-gray-600 text-lg">The gut-brain axis influences mood and behavior</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            A disrupted gut microbiome (dysbiosis) has been linked to IBD, allergies, chronic diarrhea, and even behavioral changes in pets.
          </p>
        </section>

        {/* Conditions FMT Helps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conditions FMT May Help in Dogs and Cats</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            FMT has shown remarkable results for pets struggling with:
          </p>
          <div className="bg-gradient-to-br from-[#b7e1da]/20 to-[#b48cbf]/20 rounded-2xl p-8 mb-6">
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                <span>Chronic diarrhea and chronic vomiting (IBD)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                <span>Skin allergies or yeast overgrowth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                <span>Antibiotic-associated GI issues</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                <span>Excessive gas or bloating</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                <span>Cancer support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold mt-1">✓</span>
                <span>Recurring infections (e.g., Clostridium perfringens)</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#b48cbf]/10 border-l-4 border-[#b48cbf] rounded-r-lg p-6">
            <p className="text-gray-900 font-semibold text-lg">
              A 2020 study showed dogs with chronic enteropathy receiving FMT had improved stool consistency and decreased clinical symptoms <span className="text-[#b48cbf]">WITHIN DAYS!</span>
            </p>
          </div>
        </section>

        {/* Safety */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Is FMT Safe for Pets?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            <strong>Yes!</strong> When performed by a qualified veterinarian using carefully screened donors, FMT is safe and well-tolerated by most pets.
          </p>
          <div className="bg-white border-2 border-[#b7e1da] rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">At Healing Paws Center, our donor animals are:</h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[#b7e1da] font-bold text-xl">•</span>
                <span>Healthy, vaccinated, and parasite-free</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b7e1da] font-bold text-xl">•</span>
                <span>Fed high-quality diets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b7e1da] font-bold text-xl">•</span>
                <span>Tested for pathogens like parvovirus, Giardia, Salmonella, and Clostridium spp.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of FMT in Pets</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Restores Gut Balance</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                FMT corrects dysbiosis caused by antibiotics, chronic illness, or stress by reintroducing a diverse community of beneficial bacteria that work together to restore harmony in your pet's digestive system.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Reduces Chronic Digestive Issues</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Many pets experience dramatically improved stool consistency, reduced gas and bloating, and calmed inflammation after FMT treatment, often seeing results within days.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Supports Allergy and Skin Health</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Gut imbalance is a root contributor to skin allergies and immune reactivity. By addressing the source in the gut, FMT can help improve skin conditions and reduce allergic responses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Boosts Immune Function</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                A diverse microbiome enhances immune tolerance and reduces systemic inflammation. Research in human oncology has shown that FMT can help turn non-responders into responders to immunotherapies.
              </p>
              <div className="bg-[#b7e1da]/10 rounded-lg p-6">
                <p className="text-gray-700 text-lg">
                  Recent studies show that dogs undergoing CHOP chemotherapy for lymphoma developed significant gut dysbiosis linked with post-chemotherapy GI disturbances, highlighting the importance of gut health during cancer treatment.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">5. Improves Mood and Behavior</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Gut bacteria produce neurotransmitters like serotonin, influencing your pet's mood through the gut-brain axis. Many pet owners report calmer, happier pets following FMT treatment.
              </p>
            </div>
          </div>
        </section>

        {/* FMT vs Probiotics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Does FMT Compare to Probiotics?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            While probiotics contain limited microbial strains, FMT delivers a diverse, living microbial community more reflective of natural gut health.
          </p>
          <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 rounded-2xl p-8">
            <p className="text-gray-900 text-xl font-medium italic text-center">
              "Probiotics are like planting a handful of seeds. FMT is like transplanting a thriving, mature garden."
            </p>
          </div>
        </section>

        {/* Who Should Consider */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Is FMT Right for Your Pet?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            FMT may be especially beneficial for pets who have tried special diets, supplements, or medications with limited success. It's particularly valuable for:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-[#b48cbf] transition-colors">
              <p className="text-gray-700">Recurrent GI or skin issues</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-[#b48cbf] transition-colors">
              <p className="text-gray-700">Post-antibiotic recovery</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-[#b48cbf] transition-colors">
              <p className="text-gray-700">Food sensitivities or IBD</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-[#b48cbf] transition-colors">
              <p className="text-gray-700">Cancer patients</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-[#b48cbf] transition-colors sm:col-span-2">
              <p className="text-gray-700">Behavioral issues tied to gut imbalance</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-2xl p-10 my-16 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Interested in FMT for Your Pet?</h3>
          <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation at Healing Paws Center to learn if fecal microbiome transplantation is the right natural solution for your dog or cat's health challenges.
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
              to="/services/fmbrt"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-bold text-lg"
            >
              Learn More About FMBRT
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Treating Kidney Disease Naturally</h4>
              <p className="text-gray-600 text-lg">Holistic approaches to managing kidney disease in pets with dietary modifications and integrative therapies.</p>
            </Link>
            <Link to="/blog" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Treating Pet Allergies Naturally</h4>
              <p className="text-gray-600 text-lg">Effective natural approaches to managing your pet's allergies and addressing root causes.</p>
            </Link>
            <Link to="/blog" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Why Check Your Dog's Vitamin D Levels</h4>
              <p className="text-gray-600 text-lg">The overlooked key to lifelong health and disease prevention in dogs.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
