import { Heart, Award, Target, Users, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import drDanielleImg from '../../imports/Dr-Danielle-Barberini-headshot.jpg?url';
import drJessicaImg from '../../imports/dr-jessie-dreyfuss-holistic-veterinarian-speaker-cropped-1000x667-1.jpg?url';
import ccrpLogo from '../../imports/CCRP_LOGO___web-e1752564116503.png?url';
import chiInstituteLogo from '../../imports/Chi_Institute_Logo.png?url';

const teamMembers = [
  {
    name: 'Dr. Danielle Barberini',
    title: 'Veterinarian',
    credentials: 'DVM',
    bio: 'Dr. Danielle holds a PhD in stem cell research and neurology, and was a researcher at UC Davis Regenerative Medicine Lab. She specializes in Acupuncture, Neurology, and Homeopathy, with certifications in Ozone Therapy, Food Therapy, and Regenerative Medicine. She has served as coordinator and professor for specialty veterinary courses in Brazil.',
    email: 'info@healingpawscenter.com',
    image: drDanielleImg,
    expandedBio: 'Dr. Danielle Barberini graduated from Methodist University of Sao Paulo – School of Veterinary Medicine (Brazil). She did a 2 year residency in Large Animal Clinics. Then she got her Master\'s degree with regenerative medicine (stem cells). During that period she started as a volunteer at the Acupuncture and Pain Relief Center at Sao Paulo State University and her love for the integrative care started! She got her PhD researching stem cells and neurology and was also a researcher at University of California-Davis (Regenerative Medicine Lab). She has specialization in Acupuncture, Neurology and Homeopathy, and is Certified in Ozone therapy, Food therapy, and Regenerative medicine. She has also been the coordinator and professor for the Homeopathy, Acupuncture and Neurology specialization courses in Brazil. She has completed the requirements of the Educational Commission for Foreign Veterinary Graduates and is very excited to start providing pain relief, quality of life and integrative care to all-age patients! On her free time she enjoys outdoor activities, spending time with her dog, watching movies and dancing (as a good Brazilian!).',
  },
  {
    name: 'Dr. Jessica Dreyfuss',
    title: 'Veterinarian',
    credentials: 'DVM',
    bio: 'Dr. Jessie is a Certified Veterinary Acupuncturist, Certified Canine Rehabilitation Therapist, and founder of the Holistic Veterinary Institute. Her integrative pain management work has been featured on the cover of Innovative Veterinary Care Journal, and she\'s a 2026 South Florida Business & Wealth Prestigious Women Award winner.',
    email: 'info@healingpawscenter.com',
    image: drJessicaImg,
    expandedBio: 'Dr. Jessica Dreyfuss (Dr. Jessie) has had a passion for helping animals since she was very young. She graduated with honors from Duke University with a Bachelor of Science and received her Veterinary Degree with honors from North Carolina State University College of Veterinary Medicine, which ranks #3 in the nation for veterinary schools. She pursued a Specialty Rotating Internship at Coral Springs Animal Hospital. Her professional passion for integrative veterinary medicine blends conventional and natural complementary therapies. Dr. Jessie is a Certified Veterinary Acupuncturist through the Chi Institute, and a Certified Canine Rehabilitation Therapist through the Canine Rehabilitation Institute. She is a teaching assistant at the prestigious Chi Institute at University of Florida Veterinary School. She served as a member of the 2020 Nominating Committee for the AHVMA (American Holistic Veterinary Medical Association). Additionally, her 2019 article on <a href="https://ivcjournal.com/integrative-approaches-to-pain/" target="_blank" rel="noopener noreferrer" class="text-[#b48cbf] hover:text-[#9d6fa8] underline">"4 Integrative Approaches to Pain" made the cover of Innovative Veterinary Care Journal</a>. She has also performed <a href="https://assisi.zomedica.com/rehab-and-acupuncture-veterinarian-on-assisi-loop-therapy/" target="_blank" rel="noopener noreferrer" class="text-[#b48cbf] hover:text-[#9d6fa8] underline">online expert interviews</a> with companies such as Assisi Animal Health. She has served as Chief Veterinary Advisor for Adaptive Health. She is also the founder of the <a href="https://holisticveterinaryinstitute.com" target="_blank" rel="noopener noreferrer" class="text-[#b48cbf] hover:text-[#9d6fa8] underline">Holistic Veterinary Institute</a> which offers online holistic veterinary medicine courses. She is a winner of 2026 South Florida Business & Wealth (SFBW) Prestigious Women Awards. This award honors South Florida\'s most influential, inspiring, and successful female leaders, whose innovations and success help drive the South Florida economy. She is also Certified in Food Therapy, and in the use of a therapeutic Class IIIB laser. She is an active member of AAVA (American Association of Veterinary Acupuncture), AARV (American Association of Rehabilitation Veterinarians), and AHVMA (American Holistic Veterinary Medical Association).',
  },
];

export function StandaloneAboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Banner Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Where <span className="italic font-light">Holistic</span> Meets Exceptional.
            </h1>
            <p className="text-white/95 text-lg mb-8">
              South Florida's premier destination for preventative, integrative, and longevity-focused veterinary medicine — because your pet deserves more than a routine visit.
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

      {/* Two Column Section - Image Left, Text Right */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative h-96 lg:h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&h=600&fit=crop"
                alt="Holistic veterinary care"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column - Text */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                At Healing Paws Center, we offer something truly unique in South Florida — comprehensive holistic veterinary care designed for pet owners who want MORE for their animals.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our veterinarians have completed EXTENSIVE post-doctoral specialty training in pet acupuncture, veterinary rehabilitation, homeopathy, physical therapy, animal nutrition, herbal medicine, and holistic veterinary care — we specialize in integrative expertise that's rare in South Florida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Background Section */}
      <section
        className="relative py-20 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=1600&h=900&fit=crop)',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white text-xl md:text-2xl leading-relaxed">
            We dedicate our practice exclusively to preventative, holistic, and longevity-focused veterinary medicine, so every tool, technique, and treatment plan we offer is rooted in helping your pet feel better, move better, and live longer.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Core Values */}
          <div className="mb-20">
            <p className="text-gray-500 uppercase tracking-wide text-lg text-center mb-2">what we believe</p>
            <h2 className="text-gray-900 text-center mb-12">Three Pillars of Exceptional Care</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b7e1da] rounded-full mb-4">
                  <Heart className="w-8 h-8 text-[#b48cbf]" />
                </div>
                <h3 className="text-gray-900 mb-3">Preventative First</h3>
                <p className="text-gray-600 text-lg">
                  The best time to support your pet's health is before they get sick. We invest in proactive wellness, early intervention, and building biological resilience from the inside out.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b7e1da] rounded-full mb-4">
                  <Award className="w-8 h-8 text-[#b48cbf]" />
                </div>
                <h3 className="text-gray-900 mb-3">Whole-Body Thinking</h3>
                <p className="text-gray-600 text-lg">
                  We evaluate every patient holistically — considering their entire medical history, lifestyle, nutrition, and emotional wellbeing — then build a multi-modal plan that addresses root causes.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b7e1da] rounded-full mb-4">
                  <Target className="w-8 h-8 text-[#b48cbf]" />
                </div>
                <h3 className="text-gray-900 mb-3">Longevity as a Goal</h3>
                <p className="text-gray-600 text-lg">
                  We don't measure success by the absence of disease — we measure it by quality of life, vitality, and years added. Our therapies are chosen with your pet's long-term flourishing in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section
        className="relative py-20 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600&h=900&fit=crop)',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 uppercase tracking-wide text-lg mb-4">Our Mission</p>
          <h1 className="text-white mb-6 text-3xl sm:text-4xl">Add more life to their years, and more years to their life.</h1>
          <p className="text-white text-xl md:text-2xl leading-relaxed">
            Your pet doesn't just deserve to survive. They deserve to thrive — and that's exactly what every single member of the Healing Paws team wakes up to do every day.
          </p>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-gray-900 mb-6">Meet Our Team</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our dedicated team of certified rehabilitation professionals is committed to providing the highest quality care for your pet. Each member brings specialized expertise and a genuine passion for animal wellness.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Photo */}
                <div className="bg-[#b7e1da] h-64 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-${1580489944761 + index}-${index}?w=400&h=300&fit=crop`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#b48cbf] mb-2">{member.title}</p>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="text-lg">{member.credentials}</span>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6">{member.bio}</p>

                  <div className="flex flex-col gap-3">
                    <Link
                      to={member.name === 'Dr. Danielle Barberini' ? '/team/dr-danielle-barberini' : '/team/dr-jessica-dreyfuss'}
                      className="inline-flex items-center justify-center bg-[#b48cbf] text-white px-6 py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors font-semibold"
                    >
                      Learn More About {member.name.split(' ')[1]}
                    </Link>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center justify-center text-[#b48cbf] hover:text-[#9d6fa8] transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join Our Team CTA */}
          <div className="mt-16 bg-[#b48cbf] rounded-lg p-8 text-center text-white">
            <h2 className="text-white mb-4">Join Our Team</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              We're always looking for passionate, dedicated professionals to join our team. If you're committed to excellence in animal rehabilitation, we'd love to hear from you.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-white text-[#b48cbf] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Career Opportunities
            </a>
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">Certifications & Affiliations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <img
                src={ccrpLogo}
                alt="Certified Canine Rehabilitation Practitioners (CCRP)"
                className="w-full h-auto max-w-xs"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={chiInstituteLogo}
                alt="Chi Institute"
                className="w-full h-auto max-w-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Section - Image Left, Text Right - Full Width */}
      <section className="bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          {/* Left Column - Image */}
          <div className="relative h-96 lg:h-[600px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop"
              alt="Integrative veterinary care"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Text */}
          <div className="px-8 sm:px-12 lg:px-16 py-12 space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              What we do offer is something most traditional veterinary offices simply can't — the time, training, and integrative therapies to go deeper.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We proudly partner with your primary veterinarian, working as an extension of your pet's care team to layer holistic alternative therapies alongside their existing treatment plan.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our goal has always been the same: add more life to their years, and more years to their life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Start Your Pet's Journey to Recovery?</h2>
          <p className="text-white/95 text-lg mb-8">
            Contact us today to learn more about our services and how we can help your furry friend live their best life.
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
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}