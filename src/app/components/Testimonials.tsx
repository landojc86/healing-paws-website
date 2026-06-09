import { Star } from 'lucide-react';
import bgImage from '../../assets/a404bbfacde36632c7c70a48d0bf4bd7056141d5.png?url';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    pet: 'Max (Golden Retriever)',
    text: 'After Max\'s ACL surgery, the team at Healing Paws FL helped him regain his mobility and confidence. The hydrotherapy sessions were incredible, and the staff was so patient and caring.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    pet: 'Luna (German Shepherd)',
    text: 'Luna was suffering from arthritis and could barely walk. Thanks to the laser therapy and exercise programs, she\'s running and playing like a puppy again. We\'re so grateful!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    pet: 'Cooper (Labrador)',
    text: 'The personalized care and attention Cooper received during his recovery was outstanding. The staff kept us informed every step of the way and treated him like family.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-12 sm:py-20 relative bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#b7e1da]/40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-gray-900 mb-4">
            What Pet Parents Say
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience with Healing Paws FL.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#b48cbf] text-[#b48cbf]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-gray-200">
                <div className="text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500">{testimonial.pet}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}