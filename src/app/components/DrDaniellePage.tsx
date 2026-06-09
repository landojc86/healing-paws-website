import { Mail, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import drDanielleImg from '../../imports/Dr-Danielle-Barberini-headshot.jpg?url';

export function DrDaniellePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link to="/about#team" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
              ← Back to Team
            </Link>
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Dr. Danielle Barberini
            </h1>
            <p className="text-white/95 text-lg mb-2">
              Veterinarian
            </p>
            <div className="flex items-center text-white/90 mb-8">
              <Award className="w-5 h-5 mr-2" />
              <span className="text-lg">DVM</span>
            </div>
            <a
              href="mailto:info@healingpawscenter.com"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Dr. Danielle
            </a>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* Photo */}
            <div className="relative h-[500px] md:h-[600px]">
              <img
                src={drDanielleImg}
                alt="Dr. Danielle Barberini"
                className="w-full h-full object-cover object-top rounded-lg shadow-lg"
              />
            </div>

            {/* Quick Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-gray-900 mb-4">Specializations</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Acupuncture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Neurology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Homeopathy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Ozone Therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Food Therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Regenerative Medicine</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-gray-900 mb-4">Education & Background</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">PhD in Stem Cell Research and Neurology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Researcher at UC Davis Regenerative Medicine Lab</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Full Bio */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-gray-900 mb-6">About Dr. Danielle</h2>
            <div className="space-y-4 text-gray-700 text-xl leading-relaxed">
              <p>
                Dr. Danielle Barberini graduated from Methodist University of Sao Paulo – School of Veterinary Medicine (Brazil). She did a 2 year residency in Large Animal Clinics. Then she got her Master's degree with regenerative medicine (stem cells). During that period she started as a volunteer at the Acupuncture and Pain Relief Center at Sao Paulo State University and her love for the integrative care started!
              </p>
              <p>
                She got her PhD researching stem cells and neurology and was also a researcher at University of California-Davis (Regenerative Medicine Lab). She has specialization in Acupuncture, Neurology and Homeopathy, and is Certified in Ozone therapy, Food therapy, and Regenerative medicine.
              </p>
              <p>
                She has also been the coordinator and professor for the Homeopathy, Acupuncture and Neurology specialization courses in Brazil. She has completed the requirements of the Educational Commission for Foreign Veterinary Graduates and is very excited to start providing pain relief, quality of life and integrative care to all-age patients!
              </p>
              <p>
                On her free time she enjoys outdoor activities, spending time with her dog, watching movies and dancing (as a good Brazilian!).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4 sm:mb-6">Ready to Schedule with Dr. Danielle?</h2>
          <p className="text-white/95 text-lg mb-6 sm:mb-8">
            Book an appointment today to experience comprehensive, integrative veterinary care for your pet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Appointment
            </a>
            <Link
              to="/about#team"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Back to Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
