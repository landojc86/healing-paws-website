import { Header } from '../Header';
import { Footer } from '../Footer';
import { Calendar, User, ArrowLeft, Heart, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import insurance from '../../../imports/insurance.jpg?url';

export function PetInsuranceBlogPost() {
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
              Pet Insurance for Your Dog or Cat
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Dr. Jessie Dreyfuss, DVM, CVA, CCRT</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>April 1, 2020</span>
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
            src={insurance}
            alt="Pet Insurance Guide"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is pet insurance?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Pet insurance policies include deductibles, copayments, and premiums. Unlike human medical insurance, <strong>it is a reimbursement model</strong> – meaning YOU pay out of pocket up front to your veterinarian, and then the insurance company pays YOU back.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Cost depends on breed, age, veterinary care costs in your area, and your chosen plan.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Is pet insurance the same as a medical plan?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            No. The key difference: <strong>you can take pet insurance ANYWHERE YOU GO – TO ANY HOSPITAL AND TO ANY STATE.</strong> Medical/wellness plans typically cannot.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            For example, at 2 A.M. emergency visits when your regular vet is closed, pet insurance coverage follows you.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Is it worth it to have pet insurance?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            It depends! If you have significant savings (noting car accident treatment ranges from $1,200 to over $5,000), insurance may be unnecessary.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            As a holistic veterinarian, I will not own a pet without insurance, knowing the costs of CT/MRI scans, specialists, and cancer surgery. I never want to refuse care due to cost.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the best pet insurance?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            It depends! I recommend calling every company you're considering.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Top factors when evaluating:</h3>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">No annual limits/caps</h4>
                <p className="text-gray-700 text-lg">Some companies have yearly ceilings. My dog cost over $10,000 one year; I only paid about $1,000 with unlimited coverage.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">No breed-specific exclusions</h4>
                <p className="text-gray-700 text-lg">Pets shouldn't lose coverage for genetic conditions.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Holistic care coverage</h4>
                <p className="text-gray-700 text-lg">Coverage for alternative, rehabilitative, and complementary treatments.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Fast claim payouts</h4>
                <p className="text-gray-700 text-lg">Important since you pay upfront and wait for reimbursement.</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            I prefer plans covering accidents and illnesses maximally, accepting basic costs like flea/tick prevention and vaccinations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Note: Almost all companies exclude pre-existing conditions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is super awesome for pet insurance to have?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            A "Pre-approval Service" (found with Trupanion) allows submitting procedure estimates and knowing reimbursement amounts within hours, versus waiting weeks for evaluation and payment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How do I get affordable pet insurance?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Review www.petinsurancereview.com and call companies with prepared questions. Request written policies and examine limitations and exceptions carefully.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-2xl p-10 my-16 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Questions About Your Pet's Care?</h3>
          <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss the best healthcare options for your pet.
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
