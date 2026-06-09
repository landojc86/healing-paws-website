import { Heart, BookOpen } from 'lucide-react';
import handshakeIcon from '../../assets/e5cc3d93994d4d7dc342792fc57517a76adf1cc1.png?url';

export function Stats() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {/* Integrative Care */}
          <div className="text-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 bg-[#b7e1da] rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-gray-900" />
            </div>
            <h3 className="text-gray-900 mb-3 sm:mb-4">Integrative Care</h3>
            <p className="text-gray-600 text-lg">
              As holistic veterinarians, our goal is to treat the whole pet. We advocate that the BEST health care is integrative treatment.
            </p>
          </div>

          {/* Working Together */}
          <div className="text-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 bg-[#b7e1da] rounded-full flex items-center justify-center p-5 sm:p-6">
              <img src={handshakeIcon} alt="Handshake" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-gray-900 mb-3 sm:mb-4">Working Together</h3>
            <p className="text-gray-600 text-lg">
              We work closely with your veterinarian to complement the traditional, full range of care needed for your pet.
            </p>
          </div>

          {/* Our Story */}
          <div className="text-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 bg-[#b7e1da] rounded-full flex items-center justify-center">
              <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-gray-900" />
            </div>
            <h3 className="text-gray-900 mb-3 sm:mb-4">Our Story</h3>
            <p className="text-gray-600 text-lg">
              Healing Paws was born from Dr. Dreyfuss&apos; own journey to treat her dog Duke when he was diagnosed with a rare condition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}