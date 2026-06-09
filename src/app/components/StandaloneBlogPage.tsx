import { Header } from './Header';
import { Footer } from './Footer';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import fecalMicrobiome from '../../imports/fecal-microbiome.jpg?url';
import kidney from '../../imports/kidney.jpg?url';
import vitaminD from '../../imports/VD.jpg?url';
import laryngeal from '../../imports/lary.jpg?url';
import laser from '../../imports/lser.jpg?url';
import featureImage from '../../imports/df-669x272.jpg?url';
import insurance from '../../imports/insurance.jpg?url';
import ftlMag from '../../imports/ftl-mag-article-feb-2019-1.png?url';
import degen from '../../imports/degen.jpg?url';
import laserInfrared from '../../imports/laser-and-infrared-imaging-lg-crop.jpg?url';
import ivdd from '../../imports/ivdd-dachshund-title-image.jpg?url';
import petAllergies from '../../imports/AdobeStock_273149021_1-scaled-1.png?url';

const blogPosts = [
  {
    title: 'Fecal Microbiome Transplants for Dogs and Cats: A Natural Way to Heal the Gut',
    excerpt: 'Discover how fecal microbiome transplantation is revolutionizing gut health treatment for pets, offering a natural solution for digestive issues and immune support.',
    author: 'HP Staff',
    date: 'January 15, 2025',
    category: 'Treatment Modalities',
    readTime: '8 min read',
    image: fecalMicrobiome,
    link: '/blog/fecal-microbiome-transplants',
  },
  {
    title: 'Treating Kidney Disease Naturally',
    excerpt: 'Explore holistic approaches to managing kidney disease in dogs and cats, including dietary modifications, herbal support, and integrative therapies.',
    author: 'HP Staff',
    date: 'January 10, 2025',
    category: 'Pet Health',
    readTime: '7 min read',
    image: kidney,
    link: '/blog/treating-kidney-disease-naturally',
  },
  {
    title: 'Why You Should Check Your Dog\'s Vitamin D Levels: The Overlooked Key to Lifelong Health',
    excerpt: 'Learn why vitamin D testing is crucial for your dog\'s long-term health and how optimal levels support immune function, bone health, and disease prevention.',
    author: 'HP Staff',
    date: 'January 5, 2025',
    category: 'Pet Health',
    readTime: '6 min read',
    image: vitaminD,
    link: '/blog/vitamin-d-levels',
  },
  {
    title: 'Treating Laryngeal Paralysis Naturally',
    excerpt: 'Natural treatment options for managing laryngeal paralysis in dogs, focusing on holistic therapies that support breathing and quality of life.',
    author: 'HP Staff',
    date: 'December 28, 2024',
    category: 'Treatment Modalities',
    readTime: '7 min read',
    image: laryngeal,
    link: '/blog/treating-laryngeal-paralysis-naturally',
  },
  {
    title: 'Treating Pet Allergies Naturally',
    excerpt: 'Effective natural approaches to managing your pet\'s allergies, from dietary changes to holistic therapies that address the root cause.',
    author: 'HP Staff',
    date: 'December 20, 2024',
    category: 'Treatment Modalities',
    readTime: '6 min read',
    image: petAllergies,
    link: '/blog/treating-pet-allergies-naturally',
  },
  {
    title: 'Laser Therapy for Dogs in Fort Lauderdale',
    excerpt: 'How Class IV laser therapy is helping Fort Lauderdale dogs recover faster from injuries, manage pain, and improve mobility without medications.',
    author: 'HP Staff',
    date: 'December 15, 2024',
    category: 'Treatment Modalities',
    readTime: '5 min read',
    image: laser,
    link: '/blog/laser-therapy-fort-lauderdale',
  },
  {
    title: 'Feature: Innovative Care Journal Article Written by Dr. Jessie',
    excerpt: 'Read Dr. Jessie\'s latest research and insights on integrative veterinary care, featured in a leading veterinary journal.',
    author: 'Dr. Jessie',
    date: 'December 10, 2024',
    category: 'Pet Health',
    readTime: '10 min read',
    image: featureImage,
    link: '/blog/innovative-care-feature',
  },
  {
    title: 'Pet Insurance for Your Dog or Cat',
    excerpt: 'A comprehensive guide to understanding pet insurance options, what to look for in coverage, and how to choose the best plan for your pet.',
    author: 'Dr. Jessie Dreyfuss, DVM, CVA, CCRT',
    date: 'April 1, 2020',
    category: 'Pet Health',
    readTime: '7 min read',
    image: insurance,
    link: '/blog/pet-insurance',
  },
  {
    title: 'Local Love for Healing Paws Center on Fort Lauderdale Magazine',
    excerpt: 'Healing Paws Center featured in Fort Lauderdale Magazine for our innovative approach to holistic veterinary care and commitment to the community.',
    author: 'Dr. Jessie',
    date: 'March 4, 2019',
    category: 'News',
    readTime: '3 min read',
    image: ftlMag,
    link: '/blog/local-love-fort-lauderdale-magazine',
  },
  {
    title: 'Degenerative Myelopathy in Dogs – What Can You Do?',
    excerpt: 'Understanding degenerative myelopathy and the holistic treatment options that can help maintain your dog\'s mobility and quality of life.',
    author: 'Dr. Jessie',
    date: 'November 20, 2024',
    category: 'Treatment Modalities',
    readTime: '8 min read',
    image: degen,
    link: '/blog/degenerative-myelopathy-in-dogs',
  },
  {
    title: 'Rehabilitation After Canine Knee Surgery',
    excerpt: 'Essential rehabilitation protocols for post-surgical recovery, helping your dog regain strength, mobility, and confidence after knee surgery.',
    author: 'Dr. Jessie',
    date: 'July 26, 2018',
    category: 'Rehabilitation',
    readTime: '7 min read',
    image: laserInfrared,
    link: '/blog/rehabilitation-after-canine-knee-surgery',
  },
  {
    title: 'Treating Intervertebral Disc Disease in Dogs Using Acupuncture',
    excerpt: 'How acupuncture provides effective pain relief and supports healing for dogs with IVDD, offering a natural alternative to surgery.',
    author: 'Dr. Jessie',
    date: 'February 13, 2018',
    category: 'Treatment Modalities',
    readTime: '9 min read',
    image: ivdd,
    link: '/blog/treating-ivdd-with-acupuncture',
  },
];

const categories = [
  'All Posts',
  'Pet Health',
  'Rehabilitation',
  'Treatment Modalities',
  'Senior Care',
  'Sports Medicine',
  'Home Care',
];

export function StandaloneBlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">Holistic Resources & Insights</h1>
            <p className="text-white/95 text-lg mb-8">
              Explore our library of expert articles on holistic pet care, rehabilitation techniques, and integrative medicine to help your pet live their healthiest, happiest life.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors text-lg ${
                  selectedCategory === category
                    ? 'bg-[#b48cbf] text-white'
                    : 'bg-white text-gray-700 hover:bg-[#b7e1da]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-12">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-[#b7e1da] h-64 sm:h-80 md:h-auto">
                <ImageWithFallback
                  src={blogPosts[0].image}
                  alt="Featured post"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 bg-[#b48cbf] text-white rounded-full text-lg">
                    Featured
                  </span>
                  <span className="text-gray-600 text-lg">{blogPosts[0].category}</span>
                </div>
                <h3 className="text-gray-900 mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 mb-4 text-gray-600 text-base">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
                <Link
                  to="/blog/fecal-microbiome-transplants"
                  className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] transition-colors font-semibold"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogPosts.slice(1).map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-[#b7e1da] h-48">
                  {post.image ? (
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#b7e1da]" />
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center text-[#b48cbf] text-lg">
                      <Tag className="w-4 h-4 mr-1" />
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-lg">{post.readTime}</span>
                  </div>
                  <h4 className="text-gray-900 mb-3 line-clamp-2">{post.title}</h4>
                  <p className="text-gray-600 text-lg mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-3 mb-4 text-gray-600 text-base border-t pt-3">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  {post.link ? (
                    <Link
                      to={post.link}
                      className="inline-flex items-center text-[#b48cbf] hover:text-[#9d6fa8] transition-colors font-semibold text-lg"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-gray-400 text-lg cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <button className="bg-[#b48cbf] text-white px-8 py-4 rounded-lg hover:bg-[#9d6fa8] transition-colors font-semibold">
              View More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-[#b7e1da] to-[#b48cbf] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Stay Updated with Expert Pet Care Tips</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest rehabilitation tips, research updates, and exclusive content delivered to your inbox monthly.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 bg-white border-2 border-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent shadow-lg placeholder:text-gray-500"
            />
            <button className="bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap font-semibold shadow-lg">
              Subscribe Now
            </button>
          </div>
          <p className="text-white/90 text-lg mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
