import { Award, Heart, Users } from 'lucide-react';
import aboutImage from '../../assets/907ad72fe576f705e0aa7bc62a4bb5442c79fd6e.png?url';

export function About() {
  return (
    <section id="about" className="bg-gray-50">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left Column - Full Image */}
        <div className="relative h-96 lg:h-auto">
          <img
            src={aboutImage}
            alt="Veterinary rehabilitation"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Column - Content */}
        <div className="flex items-center py-16 lg:py-20 px-8 sm:px-12 lg:px-16">
          <div className="max-w-xl space-y-6">
            <div className="inline-block bg-[#b7e1da] text-gray-900 px-4 py-2 rounded-full">
              About Us
            </div>
            <h2 className="text-gray-900">
              Dedicated to Your Pet&apos;s Recovery and Wellness
            </h2>
            <p className="text-gray-600 text-lg">
              Healing Paws offers a distinct approach to wellness — holistic veterinary care — for pet owners seeking specialists in acupuncture, physical rehabilitation, nutrition, herbal medicine, and integrative therapies.
            </p>
            <p className="text-gray-600 text-lg">
              We take a whole-body approach to your pet&apos;s wellbeing, using effective and modern therapeutic techniques to help small animals feel and function their best. Dr. Jessie, our holistic veterinarian in Fort Lauderdale, treats pain, arthritis, organ conditions, post-surgical healing, and more to support a richer, healthier life for your pet.
            </p>
            <p className="text-gray-600 text-lg">
              Our purpose: to add more life to their years and more years to their life.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#b48cbf] text-white px-8 py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}