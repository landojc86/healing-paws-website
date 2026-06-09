import { Header } from '../Header';
import { Footer } from '../Footer';
import { Link } from 'react-router-dom';
import { LucideIcon, CheckCircle2 } from 'lucide-react';

interface AilmentDetailProps {
  title: string;
  subtitle: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  symptoms: string[];
  treatments: string[];
  benefits: string[];
  whyChooseUs: string;
  seoTitle: string;
  seoDescription: string;
  seoCanonical: string;
  seoKeywords: string;
}

export function AilmentDetailTemplate({
  title,
  subtitle,
  description,
  Icon,
  color,
  symptoms,
  treatments,
  benefits,
  whyChooseUs,
  seoTitle,
  seoDescription,
  seoCanonical,
  seoKeywords
}: AilmentDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className={`relative ${color} mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-white mb-8 text-3xl sm:text-4xl">
              {title}
            </h1>
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

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Description */}
            <div>
              <h2 className="text-gray-900 mb-6">Understanding {title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {description}
              </p>
            </div>

            {/* Right Column - Callout */}
            <div className="bg-gradient-to-r from-[#b48cbf]/10 to-[#b7e1da]/10 border-l-4 border-[#b48cbf] rounded-lg p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#b48cbf] flex-shrink-0 sm:mt-1" />
                <div>
                  <h3 className="text-gray-900 mb-3">Comprehensive Care</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our integrative approach combines multiple therapies to address your pet's specific needs and optimize recovery outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">Common Signs & Symptoms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {symptoms.map((symptom, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#b48cbf] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{symptom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approaches Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">Our Treatment Approach</h2>
          <div className="space-y-4">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#b7e1da] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 flex-1">{treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">Benefits of Our Rehabilitation Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#b7e1da] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-6">Why Choose Healing Paws Center</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {whyChooseUs}
          </p>
          <div className="bg-gradient-to-r from-[#b48cbf] to-[#b7e1da] rounded-lg p-8 text-center">
            <h3 className="text-white mb-4">Ready to Help Your Pet Feel Better?</h3>
            <p className="text-white/90 mb-6">
              Our experienced team is here to create a personalized rehabilitation plan for your pet.
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
                to="/common-ailments"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                View All Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
