import { ShoppingCart, Star, Tag, Filter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    name: 'Therapeutic Dog Bed - Orthopedic Support',
    category: 'Wellness Products',
    price: 89.99,
    rating: 4.8,
    reviews: 124,
    description: 'Premium orthopedic bed with memory foam support for dogs with arthritis and joint issues.',
    popular: true,
  },
  {
    name: 'Hydrotherapy Life Vest',
    category: 'Exercise Equipment',
    price: 49.99,
    rating: 4.9,
    reviews: 87,
    description: 'Professional-grade flotation vest for safe aquatic therapy sessions.',
    popular: true,
  },
  {
    name: 'Balance Disc Set (2-Pack)',
    category: 'Exercise Equipment',
    price: 34.99,
    rating: 4.7,
    reviews: 156,
    description: 'Inflatable balance discs for proprioception training and core strengthening.',
    popular: false,
  },
  {
    name: 'Cold Therapy Wrap',
    category: 'Pain Management',
    price: 29.99,
    rating: 4.6,
    reviews: 93,
    description: 'Reusable cold therapy wrap for targeted pain relief and inflammation reduction.',
    popular: false,
  },
  {
    name: 'Resistance Band Kit',
    category: 'Exercise Equipment',
    price: 24.99,
    rating: 4.5,
    reviews: 68,
    description: 'Set of three resistance bands with adjustable attachments for strength training.',
    popular: false,
  },
  {
    name: 'Joint Support Supplement (60 days)',
    category: 'Supplements',
    price: 44.99,
    rating: 4.9,
    reviews: 201,
    description: 'Veterinary-formulated glucosamine and chondroitin supplement for joint health.',
    popular: true,
  },
  {
    name: 'Non-Slip Yoga Mat for Dogs',
    category: 'Exercise Equipment',
    price: 39.99,
    rating: 4.7,
    reviews: 112,
    description: 'Extra-grip mat designed for safe therapeutic exercise sessions.',
    popular: false,
  },
  {
    name: 'Massage Therapy Glove',
    category: 'Wellness Products',
    price: 19.99,
    rating: 4.4,
    reviews: 78,
    description: 'Textured massage glove for at-home manual therapy and relaxation.',
    popular: false,
  },
  {
    name: 'Elevated Food Bowl Set',
    category: 'Wellness Products',
    price: 54.99,
    rating: 4.6,
    reviews: 89,
    description: 'Adjustable height bowls to reduce neck strain during meals.',
    popular: false,
  },
  {
    name: 'Rehabilitation Exercise Guide Book',
    category: 'Educational',
    price: 29.99,
    rating: 5.0,
    reviews: 142,
    description: 'Comprehensive guide with illustrated exercises for home rehabilitation programs.',
    popular: false,
  },
  {
    name: 'Traction Booties (Set of 4)',
    category: 'Mobility Aids',
    price: 34.99,
    rating: 4.3,
    reviews: 67,
    description: 'Anti-slip booties to improve traction on slippery surfaces.',
    popular: false,
  },
  {
    name: 'Heat Therapy Pack',
    category: 'Pain Management',
    price: 26.99,
    rating: 4.5,
    reviews: 95,
    description: 'Microwave-safe heat pack for soothing warmth and muscle relaxation.',
    popular: false,
  },
];

const categories = [
  'All Products',
  'Exercise Equipment',
  'Wellness Products',
  'Pain Management',
  'Supplements',
  'Mobility Aids',
  'Educational',
];

export function Store() {
  return (
    <section id="store" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-gray-900 mb-4 sm:mb-6">Rehabilitation Products Store</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
            Professional-grade rehabilitation products and wellness supplies recommended by our certified practitioners. Support your pet's recovery journey at home.
          </p>
        </div>

        {/* Category Filter & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-3 sm:px-4 py-2 rounded-full transition-colors text-base sm:text-base ${
                  index === 0
                    ? 'bg-[#b48cbf] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#b7e1da]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-gray-600 flex-shrink-0" />
            <select className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b48cbf] text-base sm:text-base flex-1 md:flex-initial">
              <option>Sort by: Popular</option>
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Top Rated</option>
            </select>
          </div>
        </div>

        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-[#b7e1da] to-[#b48cbf] rounded-lg p-6 sm:p-8 mb-8 sm:mb-12 text-center text-white">
          <h2 className="text-white mb-2 sm:mb-3 text-xl sm:text-2xl lg:text-3xl">Free Shipping on Orders Over $75</h2>
          <p className="mb-0 text-base sm:text-base">Plus, get 10% off your first order with code: FIRSTORDER10</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#b48cbf] transition-all hover:shadow-lg group">
              {/* Product Image */}
              <div className="relative bg-gray-100 h-48">
                {product.popular && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block px-2 sm:px-3 py-1 bg-[#b48cbf] text-white rounded-full text-xs sm:text-base">
                      Popular
                    </span>
                  </div>
                )}
                <ImageWithFallback 
                  src={`https://images.unsplash.com/photo-${1560807707019 + index}-${index}?w=300&h=200&fit=crop`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#b48cbf] text-xs sm:text-base">{product.category}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-xs sm:text-base text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-gray-900 mb-2 line-clamp-2 text-base sm:text-base">{product.name}</h3>
                <p className="text-gray-600 text-xs sm:text-base mb-3 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-900 font-semibold text-base sm:text-lg">${product.price}</span>
                  <span className="text-gray-500 text-xs sm:text-base">({product.reviews} reviews)</span>
                </div>

                <button className="w-full bg-[#b48cbf] text-white py-2 sm:py-2.5 rounded-lg hover:bg-[#9d6fa8] transition-colors flex items-center justify-center gap-2 text-base sm:text-base">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Categories Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#b7e1da] rounded-full mb-4">
              <Tag className="w-6 h-6 text-[#b48cbf]" />
            </div>
            <h3 className="text-gray-900 mb-2 text-base sm:text-lg">Quality Guaranteed</h3>
            <p className="text-gray-600 text-base sm:text-base">All products are professionally tested and approved by our rehabilitation team.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#b7e1da] rounded-full mb-4">
              <ShoppingCart className="w-6 h-6 text-[#b48cbf]" />
            </div>
            <h3 className="text-gray-900 mb-2 text-base sm:text-lg">Easy Returns</h3>
            <p className="text-gray-600 text-base sm:text-base">30-day return policy on all products with free return shipping.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#b7e1da] rounded-full mb-4">
              <Star className="w-6 h-6 text-[#b48cbf]" />
            </div>
            <h3 className="text-gray-900 mb-2 text-base sm:text-lg">Expert Recommendations</h3>
            <p className="text-gray-600 text-base sm:text-base">Curated selection recommended by our certified rehabilitation practitioners.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#b48cbf] rounded-lg p-6 sm:p-8 text-center text-white">
          <h2 className="text-white mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl">Not Sure What You Need?</h2>
          <p className="mb-4 sm:mb-6 max-w-2xl mx-auto text-base sm:text-base">
            Our team can recommend the best products for your pet's specific rehabilitation needs. Schedule a consultation or contact us for personalized product recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-block bg-white text-[#b48cbf] px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-base sm:text-base font-semibold"
            >
              Contact Us
            </a>
            <a 
              href="#contact"
              className="inline-block border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-white hover:text-[#b48cbf] transition-colors text-base sm:text-base font-semibold"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}