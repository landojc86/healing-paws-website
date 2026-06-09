import { Header } from '../Header';
import { Footer } from '../Footer';
import { Calendar, User, ArrowLeft, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import ftlMag from '../../../imports/ftl-mag-article-feb-2019-1.png?url';

export function LocalLoveBlogPost() {
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
              <Newspaper className="w-4 h-4 text-white" />
              <span className="text-white text-lg font-medium">News</span>
            </div>
            <h1 className="text-white mb-6 text-4xl sm:text-5xl leading-tight">
              Local Love for Healing Paws Center on Fort Lauderdale Magazine
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Dr. Jessie Dreyfuss, DVM, CVA, CCRT</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>March 4, 2019</span>
              </div>
              <span>3 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src={ftlMag}
            alt="Fort Lauderdale Magazine Feature"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
            We are so proud and happy to appear in the recent issue of Fort Lauderdale magazine.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            They had some very nice things to say and we are so appreciative.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Being recognized by Fort Lauderdale Magazine is a testament to our commitment to providing exceptional holistic veterinary care to the Fort Lauderdale community. We're grateful for the support of our community and our wonderful clients who make what we do possible.
          </p>
        </section>

        <section className="mb-12">
          <div className="bg-[#b7e1da]/20 rounded-lg p-8 border-l-4 border-[#b48cbf]">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Read the Full Article</h3>
            <p className="text-gray-700 text-lg mb-4">
              Check out "The Kids Are All Right" article on Fort Lauderdale Magazine's website to learn more about our holistic approach to veterinary care and what makes Healing Paws Center special.
            </p>
            <a
              href="https://www.fortlauderdalemagazine.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] font-semibold text-lg transition-colors"
            >
              Visit Fort Lauderdale Magazine →
            </a>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-2xl p-10 my-16 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Experience the Healing Paws Difference</h3>
          <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discover why Fort Lauderdale Magazine and pet owners throughout South Florida trust us with their pets' care.
          </p>
          <a
            href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-bold shadow-lg text-lg"
          >
            Book Appointment
          </a>
        </div>
      </article>

      <Footer />
    </div>
  );
}
