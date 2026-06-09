import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { Activity, Check } from 'lucide-react';

export function InflammatoryScreeningPage() {
  const whyItMatters = [
    'Detects systemic inflammation in pets with cancer',
    'Helps monitor treatment response over time',
    'Identifies early changes before clinical symptoms worsen',
    'Supports data-driven, personalized veterinary care',
    'Allows for proactive adjustments to your pet\'s treatment plan'
  ];

  const whatWeMeasure = [
    {
      title: 'C-reactive protein (CRP)',
      description: 'a key marker of systemic inflammation'
    },
    {
      title: 'Additional cancer-related bloodwork trends',
      description: null
    },
    {
      title: 'Relevant immune and inflammatory indicators',
      description: null
    },
    {
      title: 'Ongoing lab value comparisons over time',
      description: null
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              See the <span className="italic text-[#fca5a5]">inflammation</span> before it speaks
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Comprehensive inflammatory marker testing to monitor cancer progression, detect early changes, and support data-driven treatment decisions for your pet.
            </p>
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">Why Inflammatory Marker Testing Matters in Pet Cancer Care</h2>

          <div className="grid grid-cols-1 gap-4">
            {whyItMatters.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 rounded-lg p-5">
                <div className="w-6 h-6 bg-[#b48cbf] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Measure Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">WHAT WE MEASURE</h2>
          <p className="text-gray-700 text-lg mb-8">
            At Healing Paws Center, we evaluate <strong>inflammatory markers in dogs and cats</strong>, including:
          </p>

          <div className="grid grid-cols-1 gap-4">
            {whatWeMeasure.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#dc2626]">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#b48cbf] rounded-full flex-shrink-0 mt-2" />
                  <div>
                    <p className="text-gray-900 font-semibold">
                      {item.title}
                      {item.description && (
                        <span className="text-gray-700 font-normal"> — {item.description}</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-gradient-to-br from-[#b7e1da]/10 to-[#b48cbf]/10 rounded-lg p-8 border-l-4 border-[#dc2626]">
            <p className="text-gray-700 leading-relaxed text-lg">
              Inflammatory marker testing is an essential tool in our integrative cancer care program. By tracking these values over time, we can see how your pet is responding to treatment and adjust their care plan as needed — often catching changes before they become visible problems.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Stay Ahead of Your Pet's Cancer Care</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Early detection through inflammatory screening can make all the difference in your pet's treatment outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Appointment
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
