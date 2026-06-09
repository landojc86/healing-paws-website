import { Header } from '../Header';
import { Footer } from '../Footer';
import { Calendar, User, ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import laryngeal from '../../../imports/lary.jpg?url';

export function LaryngealParalysisBlogPost() {
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
              Treating Laryngeal Paralysis Naturally
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>HP Staff</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>December 28, 2024</span>
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
            src={laryngeal}
            alt="Treating Laryngeal Paralysis Naturally in Dogs"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-[#b7e1da]/10 border-l-4 border-[#b7e1da] rounded-r-lg p-6 mb-8">
            <p className="text-gray-900 text-xl font-medium italic">
              "My dog's bark is gone and he breathes really loudly. Is it laryngeal paralysis 'lar par'? How do I know?"
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            If you've noticed your dog experiencing heavy panting and breathing difficulties, or if their bark has changed or disappeared entirely, they may be suffering from laryngeal paralysis. This serious condition requires attention, but the good news is that natural treatment options are available at Healing Paws Center in Fort Lauderdale.
          </p>
        </section>

        {/* What is Laryngeal Paralysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Laryngeal Paralysis?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            The laryngeal muscles control the larynx, which plays a crucial role in protecting your dog's airway by helping to close the trachea during swallowing. When the nerves that control these muscles weaken, the larynx cannot function properly.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            When the larynx becomes weakened or paralyzed, breathing becomes increasingly difficult. This condition can also affect your dog's ability to eat and drink safely, as the protective mechanism that prevents food and water from entering the airway is compromised.
          </p>
        </section>

        {/* Signs and Symptoms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Signs of Laryngeal Paralysis</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-xl p-6 border-2 border-[#b7e1da]/30 hover:border-[#b7e1da] transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold text-2xl">•</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Coughing</h4>
                  <p className="text-gray-600 text-lg">Frequent or persistent coughing episodes</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#b48cbf]/10 to-white rounded-xl p-6 border-2 border-[#b48cbf]/30 hover:border-[#b48cbf] transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-[#b7e1da] font-bold text-2xl">•</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Noisy Breathing</h4>
                  <p className="text-gray-600 text-lg">Very loud breathing or heavy panting</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-xl p-6 border-2 border-[#b7e1da]/30 hover:border-[#b7e1da] transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-[#b48cbf] font-bold text-2xl">•</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Eating & Drinking Issues</h4>
                  <p className="text-gray-600 text-lg">Trouble swallowing food and water</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#b48cbf]/10 to-white rounded-xl p-6 border-2 border-[#b48cbf]/30 hover:border-[#b48cbf] transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-[#b7e1da] font-bold text-2xl">•</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Voice Changes</h4>
                  <p className="text-gray-600 text-lg">Change in barking or complete loss of bark</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 mt-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-900 mb-2">Emergency Warning Sign</h4>
                <p className="text-red-800 leading-relaxed">
                  <strong>Breathing issues</strong> – you may even see your pet turn blue due to respiratory distress. If this occurs, seek emergency veterinary care immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Natural Treatment Methods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Natural Ways to Treat Dog Laryngeal Paralysis</h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            At Healing Paws Center, we offer holistic treatment approaches that can help manage and improve laryngeal paralysis symptoms naturally:
          </p>

          <div className="space-y-8">
            {/* Acupuncture */}
            <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-2xl p-8 border-2 border-[#b7e1da]/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#b7e1da] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Veterinary Acupuncture</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                    Acupuncture works by reactivating the laryngeal nerves, helping to restore proper function to the affected muscles. This approach has been supported by research and clinical results.
                  </p>
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Dr. Jessie is certified in veterinary acupuncture</strong> and teaches at the prestigious Chi Institute, bringing extensive expertise to your pet's treatment.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Research supports the use of acupuncture for nerve-related conditions, making it an evidence-based approach to managing laryngeal paralysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Herbal Therapies */}
            <div className="bg-gradient-to-br from-[#b48cbf]/10 to-white rounded-2xl p-8 border-2 border-[#b48cbf]/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#b48cbf] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Herbal Therapies</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Chinese herbal treatments work synergistically with acupuncture to support nerve function and overall health.
                  </p>
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed">
                      These herbal formulas support the acupuncture treatments and may allow for spacing out appointments while maintaining therapeutic benefits. They provide ongoing support between acupuncture sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weight Loss */}
            <div className="bg-gradient-to-br from-[#b7e1da]/10 to-white rounded-2xl p-8 border-2 border-[#b7e1da]/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#b7e1da] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Weight Loss</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Maintaining a healthy weight is crucial for dogs with laryngeal paralysis.
                  </p>
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Weight reduction significantly lessens the burden on the larynx, making breathing easier and reducing respiratory stress.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Beyond respiratory benefits, achieving a healthy weight improves your pet's overall health, mobility, and quality of life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Dogs Develop It */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Dogs Develop Laryngeal Paralysis?</h2>
          <div className="bg-gradient-to-r from-[#b48cbf]/20 to-[#b7e1da]/20 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Laryngeal paralysis is most commonly seen in:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-5 text-center">
                <p className="font-bold text-gray-900">Labrador Retrievers</p>
              </div>
              <div className="bg-white rounded-lg p-5 text-center">
                <p className="font-bold text-gray-900">Golden Retrievers</p>
              </div>
              <div className="bg-white rounded-lg p-5 text-center">
                <p className="font-bold text-gray-900">Other Large Breeds</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Testing for Dog Laryngeal Paralysis</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Proper diagnosis is essential for creating an effective treatment plan. Testing for laryngeal paralysis may include:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#b7e1da] rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Basic Diagnostics</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#b7e1da] font-bold text-xl">•</span>
                  <span>Blood tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b7e1da] font-bold text-xl">•</span>
                  <span>X-rays</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b7e1da] font-bold text-xl">•</span>
                  <span>Sedated laryngeal examination</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border-2 border-[#b48cbf] rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Advanced Diagnostics</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#b48cbf] font-bold text-xl">•</span>
                  <span>CT scans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b48cbf] font-bold text-xl">•</span>
                  <span>MRI scans</span>
                </li>
              </ul>
              <p className="text-gray-600 text-lg mt-3 italic">May be recommended based on individual cases</p>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] rounded-2xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">Bodhi's Success Story</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <p className="text-white/95 text-lg leading-relaxed mb-6">
                Bodhi came to Healing Paws Center when his owner noticed his bark was completely gone and his panting had become very loud and concerning.
              </p>
              <p className="text-white/95 text-lg leading-relaxed mb-6">
                After just three acupuncture treatments combined with herbal therapies, Bodhi's owner reported remarkable progress:
              </p>
              <div className="bg-white/20 rounded-lg p-6 border-l-4 border-white">
                <p className="text-white text-xl font-medium italic">
                  "I just wanted to let you know that Bodhi tried to bark today! He's getting his bark back!"
                </p>
              </div>
              <p className="text-white/95 text-lg leading-relaxed mt-6">
                Bodhi's story demonstrates the potential for natural therapies to help restore function and improve quality of life for dogs with laryngeal paralysis.
              </p>
            </div>
          </div>
        </section>

        {/* Recommendation */}
        <section className="mb-12">
          <div className="bg-[#b48cbf]/10 border-l-4 border-[#b48cbf] rounded-r-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Recommendation</h3>
            <p className="text-gray-900 text-lg font-semibold">
              We recommend starting acupuncture and other natural treatments <span className="text-[#b48cbf]">as soon as possible</span> after diagnosis to achieve the best outcomes for your pet.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-2xl p-10 my-16 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Help Your Dog Breathe Easier</h3>
          <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
            If your dog is showing signs of laryngeal paralysis, schedule a consultation at Healing Paws Center to explore natural treatment options.
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
            <Link to="/blog/treating-kidney-disease-naturally" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Treating Kidney Disease Naturally</h4>
              <p className="text-gray-600 text-lg">Holistic approaches to managing kidney disease with acupuncture and herbal therapy.</p>
            </Link>
            <Link to="/blog" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Degenerative Myelopathy in Dogs</h4>
              <p className="text-gray-600 text-lg">Natural treatment options for managing this progressive neurological condition.</p>
            </Link>
            <Link to="/blog/fecal-microbiome-transplants" className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b48cbf] transition-colors">Fecal Microbiome Transplants</h4>
              <p className="text-gray-600 text-lg">A natural way to heal the gut and support your pet's immune system.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
