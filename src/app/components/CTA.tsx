import { Phone, Calendar } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-12 sm:py-20 bg-[#b7e1da]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-gray-900 mb-6 sm:mb-8">
          Have a question about holistic vet care?
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="tel:+19549558888"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-800 transition-colors text-base sm:text-base w-full sm:w-auto justify-center"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Call Us Now
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#b48cbf] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#a37bae] transition-colors text-base sm:text-base w-full sm:w-auto justify-center"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            BOOK NOW
          </a>
        </div>
      </div>
    </section>
  );
}
