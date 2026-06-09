import { Heart, Award, Users } from 'lucide-react';

export function AboutHP() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-gray-900 mb-4 sm:mb-6">About Healing Paws Center</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg sm:text-lg">
            Dedicated to providing exceptional holistic care & wellness services for your beloved pets through compassionate care and evidence-based treatment approaches.
          </p>
        </div>

        {/* Why Choose Us Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20">
          {/* Left Column - Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#b7e1da] rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Certified Professionals</h3>
                <p className="text-gray-600 text-lg">Our doctors bring advanced post-doctoral training in acupuncture, physical therapy, nutrition, herbal medicine, and holistic veterinary care.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#b7e1da] rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Personalized Care</h3>
                <p className="text-gray-600 text-lg">We understand that every pet is different, which is why each holistic care plan is tailored to your pet's condition, needs, and wellness goals. We focus exclusively on integrative therapies — not routine veterinary services or surgery. Working alongside your primary veterinarian, we enhance your pet's existing treatment plan with natural, holistic support designed to support their unique path to healing.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#b7e1da] rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Compassionate Approach</h3>
                <p className="text-gray-600 text-lg">We care for every pet with patience, gentleness, and respect. Our calm, supportive environment helps your pet feel secure and comfortable throughout their wellness journey.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Why Choose Us */}
          <div className="bg-[#b7e1da]/30 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-gray-900">Why Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 text-lg">State-of-the-art holistic care equipment and facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Evidence-based treatment protocols backed by research</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Comprehensive post-treatment care and home exercise programs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Collaboration with your veterinarian for integrated care</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Proven track record of successful wellness outcomes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b48cbf] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Flexible scheduling and convenient location in Florida</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
