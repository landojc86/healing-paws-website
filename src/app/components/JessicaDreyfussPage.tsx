import { Mail, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import drJessicaImg from '../../imports/dr-jessie-dreyfuss-holistic-veterinarian-speaker-cropped-1000x667-1.jpg?url';

export function JessicaDreyfussPage() {
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
              Dr. Jessica Dreyfuss
            </h1>
            <p className="text-white/95 text-lg mb-2">
              Veterinarian & Founder
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
              Contact Dr. Jessica
            </a>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* Photo */}
            <div className="relative">
              <img
                src={drJessicaImg}
                alt="Dr. Jessica Dreyfuss"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Quick Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-gray-900 mb-4">Certifications & Awards</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Certified Veterinary Acupuncturist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Certified Canine Rehabilitation Therapist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Certified in Food Therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">2026 SFBW Prestigious Women Award Winner</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-gray-900 mb-4">Leadership</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Founder, Holistic Veterinary Institute</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Teaching Assistant, Chi Institute at UF</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Former Chief Veterinary Advisor, Adaptive Health</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Full Bio */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-gray-900 mb-6">About Dr. Jessica</h2>
            <div className="space-y-4 text-gray-700 text-xl leading-relaxed">
              <p>
                Dr. Jessica Dreyfuss (Dr. Jessie) has had a passion for helping animals since she was very young. She graduated with honors from Duke University with a Bachelor of Science and received her Veterinary Degree with honors from North Carolina State University College of Veterinary Medicine, which ranks #3 in the nation for veterinary schools. She pursued a Specialty Rotating Internship at Coral Springs Animal Hospital.
              </p>
              <p>
                Her professional passion for integrative veterinary medicine blends conventional and natural complementary therapies. Dr. Jessie is a Certified Veterinary Acupuncturist through the Chi Institute, and a Certified Canine Rehabilitation Therapist through the Canine Rehabilitation Institute. She is a teaching assistant at the prestigious Chi Institute at University of Florida Veterinary School.
              </p>
              <p>
                She served as a member of the 2020 Nominating Committee for the AHVMA (American Holistic Veterinary Medical Association). Additionally, her 2019 article on <a href="https://ivcjournal.com/integrative-approaches-to-pain/" target="_blank" rel="noopener noreferrer" className="text-[#b48cbf] hover:text-[#9d6fa8] underline">"4 Integrative Approaches to Pain" made the cover of Innovative Veterinary Care Journal</a>. She has also performed <a href="https://assisi.zomedica.com/rehab-and-acupuncture-veterinarian-on-assisi-loop-therapy/" target="_blank" rel="noopener noreferrer" className="text-[#b48cbf] hover:text-[#9d6fa8] underline">online expert interviews</a> with companies such as Assisi Animal Health.
              </p>
              <p>
                She has served as Chief Veterinary Advisor for Adaptive Health. She is also the founder of the <a href="https://holisticveterinaryinstitute.com" target="_blank" rel="noopener noreferrer" className="text-[#b48cbf] hover:text-[#9d6fa8] underline">Holistic Veterinary Institute</a> which offers online holistic veterinary medicine courses.
              </p>
              <p>
                She is a winner of 2026 South Florida Business & Wealth (SFBW) Prestigious Women Awards. This award honors South Florida's most influential, inspiring, and successful female leaders, whose innovations and success help drive the South Florida economy.
              </p>
              <p>
                She is also Certified in Food Therapy, and in the use of a therapeutic Class IIIB laser. She is an active member of AAVA (American Association of Veterinary Acupuncture), AARV (American Association of Rehabilitation Veterinarians), and AHVMA (American Holistic Veterinary Medical Association).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4 sm:mb-6">Ready to Schedule with Dr. Jessica?</h2>
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
