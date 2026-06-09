import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogImage1 from '../../assets/046fa0edad28fbedaea0c2127abed691dc64ae86.png?url';
import blogImage2 from '../../assets/1cabac878d7e74b47a36a049454a0d2d0a878a81.png?url';
import blogImage3 from '../../assets/2740f29b5d318c14d14b02c2c814c585118aa7e1.png?url';

const blogPosts = [
  {
    id: 1,
    title: 'Fecal Microbiome Transplants for Dogs and Cats: A Natural Way to Heal the Gut',
    excerpt: 'Discover how fecal microbiome transplantation is revolutionizing gut health treatment for pets, offering a natural solution for digestive issues and immune support.',
    date: 'January 15, 2025',
    image: blogImage1,
  },
  {
    id: 2,
    title: 'Treating Kidney Disease Naturally',
    excerpt: 'Explore holistic approaches to managing kidney disease in dogs and cats, including dietary modifications, herbal support, and integrative therapies.',
    date: 'January 10, 2025',
    image: blogImage2,
  },
  {
    id: 3,
    title: 'Why You Should Check Your Dog\'s Vitamin D Levels: The Overlooked Key to Lifelong Health',
    excerpt: 'Learn why vitamin D testing is crucial for your dog\'s long-term health and how optimal levels support immune function, bone health, and disease prevention.',
    date: 'January 5, 2025',
    image: blogImage3,
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            Latest Insights & Tips
          </h2>
          <p className="text-gray-600 text-lg">
            Stay informed with the latest news, tips, and insights on holistic pet care and wellness.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <div className="text-[#b48cbf] text-base sm:text-lg">{post.date}</div>
                <h3 className="text-gray-900 text-lg sm:text-xl line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-base sm:text-lg line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-[#b48cbf] hover:text-[#9d6fa8] transition-colors font-semibold text-base sm:text-lg group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}