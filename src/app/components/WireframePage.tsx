import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, Users, GraduationCap, Store, ArrowLeft } from 'lucide-react';

type PageView = 'home' | 'services' | 'about' | 'courses' | 'store';

export default function WireframePage() {
  const [currentView, setCurrentView] = useState<PageView>('home');

  const pageOptions = [
    { id: 'home' as PageView, label: 'Home Page', icon: Home },
    { id: 'services' as PageView, label: 'Services Page', icon: FileText },
    { id: 'about' as PageView, label: 'About Page', icon: Users },
    { id: 'courses' as PageView, label: 'Courses Page', icon: GraduationCap },
    { id: 'store' as PageView, label: 'Store Page', icon: Store },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-semibold text-gray-900 mb-1">Healing Paws FL - Website Wireframes</h1>
              <p className="text-gray-600 text-lg">Interactive documentation of site structure and layout</p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#b48cbf] transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Site
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Selector */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">Select Page to View</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {pageOptions.map((page) => {
              const Icon = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => setCurrentView(page.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    currentView === page.id
                      ? 'border-[#b48cbf] bg-[#b48cbf]/5'
                      : 'border-gray-200 hover:border-[#b7e1da]'
                  }`}
                >
                  <Icon
                    size={24}
                    className={`mx-auto mb-2 ${
                      currentView === page.id ? 'text-[#b48cbf]' : 'text-gray-400'
                    }`}
                  />
                  <div className={`text-lg font-medium ${
                    currentView === page.id ? 'text-[#b48cbf]' : 'text-gray-700'
                  }`}>
                    {page.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Wireframe Display */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {currentView === 'home' && <HomeWireframe />}
          {currentView === 'services' && <ServicesWireframe />}
          {currentView === 'about' && <AboutWireframe />}
          {currentView === 'courses' && <CoursesWireframe />}
          {currentView === 'store' && <StoreWireframe />}
        </div>
      </div>
    </div>
  );
}

// Wireframe Components
function WireframeBox({ label, height = 'h-32', className = '', children }: { label: string; height?: string; className?: string; children?: React.ReactNode }) {
  return (
    <div className={`border-2 border-dashed border-gray-300 rounded ${height} ${className} flex items-center justify-center relative bg-gray-50`}>
      <div className="text-center px-4">
        <div className="text-gray-500 font-medium">{label}</div>
        {children}
      </div>
    </div>
  );
}

function HomeWireframe() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900 mb-6">Home Page Structure</h3>
      
      {/* Header */}
      <div className="border-2 border-gray-400 rounded p-3 bg-white">
        <div className="flex items-center justify-between">
          <div className="w-24 h-8 bg-[#b48cbf]/20 rounded flex items-center justify-center text-xs text-gray-600">Logo</div>
          <div className="flex gap-2">
            {['Home', 'Services', 'About', 'Courses', 'Library', 'Store', 'Contact'].map((item) => (
              <div key={item} className="w-16 h-6 bg-gray-200 rounded text-xs flex items-center justify-center text-gray-600">{item}</div>
            ))}
            <div className="w-32 h-6 bg-[#b48cbf]/30 rounded text-xs flex items-center justify-center text-gray-700">CTA Button</div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <WireframeBox label="Hero Section - Full Video Background" height="h-64">
        <div className="absolute left-8 top-8 text-left">
          <div className="w-48 h-6 bg-gray-400 rounded mb-2"></div>
          <div className="w-64 h-4 bg-gray-300 rounded mb-1"></div>
          <div className="w-56 h-4 bg-gray-300 rounded mb-4"></div>
          <div className="w-40 h-8 bg-[#b48cbf]/40 rounded"></div>
        </div>
      </WireframeBox>

      {/* Services Section */}
      <div className="border-2 border-dashed border-gray-300 rounded p-4 bg-gray-50">
        <div className="text-center mb-4">
          <div className="w-32 h-6 bg-gray-400 rounded mx-auto mb-2"></div>
          <div className="text-lg text-gray-500">Services Section</div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {['Therapeutic Modalities', 'Manual Therapy', 'Exercise & Rehab', 'Pain Management'].map((cat) => (
            <div key={cat} className="border border-gray-300 rounded p-3 bg-white">
              <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
              <div className="space-y-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-full h-2 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="grid grid-cols-2 gap-4">
        <WireframeBox label="About HP" height="h-48" />
        <WireframeBox label="Image/Visual" height="h-48" />
      </div>

      {/* Team Section */}
      <div className="border-2 border-dashed border-gray-300 rounded p-4 bg-gray-50">
        <div className="text-center mb-4 text-lg text-gray-500">Meet the Team</div>
        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-gray-300 rounded p-2 bg-white">
              <div className="w-full h-24 bg-gray-300 rounded mb-2"></div>
              <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
              <div className="w-2/3 h-2 bg-gray-200 rounded mx-auto"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="border-2 border-dashed border-gray-300 rounded p-4 bg-gray-50">
        <div className="text-center mb-4 text-lg text-gray-500">Testimonials</div>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-gray-300 rounded p-3 bg-white">
              <div className="space-y-2">
                <div className="w-full h-2 bg-gray-200 rounded"></div>
                <div className="w-full h-2 bg-gray-200 rounded"></div>
                <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <WireframeBox label="Video Library Section (Featured Videos + Link to YouTube)" height="h-40" />

      {/* Blog Section */}
      <WireframeBox label="Blog Section (Recent Posts)" height="h-40" />

      {/* Contact/Footer */}
      <WireframeBox label="Contact Form & Footer" height="h-32" />
    </div>
  );
}

function ServicesWireframe() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900 mb-6">Services Page Structure</h3>
      
      {/* Page Header */}
      <WireframeBox label="Page Header - Services Overview" height="h-32" />

      {/* Service Categories Grid */}
      <div className="border-2 border-dashed border-gray-300 rounded p-4 bg-gray-50">
        <div className="text-center mb-4 text-lg text-gray-500">Service Categories (4 Categories)</div>
        <div className="grid grid-cols-2 gap-4">
          {['Therapeutic Modalities', 'Manual Therapy', 'Exercise & Rehabilitation', 'Pain Management & Wellness'].map((cat) => (
            <div key={cat} className="border-2 border-gray-300 rounded p-4 bg-white">
              <div className="w-full h-5 bg-[#b48cbf]/30 rounded mb-3"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="flex-1 h-3 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <WireframeBox label="Call to Action - Book Appointment" height="h-24" />

      {/* Additional Info */}
      <div className="grid grid-cols-3 gap-4">
        <WireframeBox label="Why Choose Us" height="h-32" />
        <WireframeBox label="Our Approach" height="h-32" />
        <WireframeBox label="Success Stories" height="h-32" />
      </div>
    </div>
  );
}

function AboutWireframe() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900 mb-6">About Page Structure</h3>
      
      {/* Hero */}
      <WireframeBox label="About HP Hero Section" height="h-40" />

      {/* Mission/Vision */}
      <div className="grid grid-cols-2 gap-4">
        <WireframeBox label="Our Mission" height="h-48" />
        <WireframeBox label="Our Vision" height="h-48" />
      </div>

      {/* Full Team Grid */}
      <div className="border-2 border-dashed border-gray-300 rounded p-4 bg-gray-50">
        <div className="text-center mb-4 text-lg text-gray-500">Meet the Team (Expanded)</div>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border border-gray-300 rounded p-3 bg-white">
              <div className="w-full h-32 bg-gray-300 rounded mb-2"></div>
              <div className="w-full h-4 bg-gray-400 rounded mb-2"></div>
              <div className="w-2/3 h-3 bg-gray-200 rounded mx-auto mb-2"></div>
              <div className="space-y-1">
                <div className="w-full h-2 bg-gray-200 rounded"></div>
                <div className="w-full h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility/Equipment */}
      <WireframeBox label="Our Facility & Equipment" height="h-48" />

      {/* Certifications */}
      <WireframeBox label="Certifications & Accreditations" height="h-32" />

      {/* Testimonials Full */}
      <div className="border-2 border-dashed border-gray-300 rounded p-4 bg-gray-50">
        <div className="text-center mb-4 text-lg text-gray-500">Client Testimonials (Full List)</div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-gray-300 rounded p-4 bg-white">
              <div className="space-y-2">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="w-full h-2 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Franchise Opportunities */}
      <WireframeBox label="Franchise Opportunities Section" height="h-40" />
    </div>
  );
}

function CoursesWireframe() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900 mb-6">Courses Page Structure</h3>
      
      {/* Page Header */}
      <WireframeBox label="Courses Overview Header" height="h-32" />

      {/* Course Categories in Row */}
      <div className="border-2 border-dashed border-gray-300 rounded p-4 bg-gray-50">
        <div className="text-center mb-4 text-lg text-gray-500">3 Course Categories (Horizontal Layout)</div>
        <div className="grid grid-cols-3 gap-4">
          <div className="border-2 border-[#b7e1da] rounded p-4 bg-white">
            <div className="w-full h-6 bg-[#b7e1da]/30 rounded mb-3 flex items-center justify-center text-xs text-gray-700">
              For Pet Owners
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-gray-200 rounded p-2 bg-gray-50">
                  <div className="w-full h-3 bg-gray-300 rounded mb-1"></div>
                  <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-2 border-[#b48cbf] rounded p-4 bg-white">
            <div className="w-full h-6 bg-[#b48cbf]/30 rounded mb-3 flex items-center justify-center text-xs text-gray-700">
              For Professionals
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-gray-200 rounded p-2 bg-gray-50">
                  <div className="w-full h-3 bg-gray-300 rounded mb-1"></div>
                  <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-2 border-[#b7e1da] rounded p-4 bg-white">
            <div className="w-full h-6 bg-[#b7e1da]/30 rounded mb-3 flex items-center justify-center text-xs text-gray-700">
              For Future Professionals
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-gray-200 rounded p-2 bg-gray-50">
                  <div className="w-full h-3 bg-gray-300 rounded mb-1"></div>
                  <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course Benefits */}
      <div className="grid grid-cols-4 gap-3">
        <WireframeBox label="Expert-Led" height="h-24" className="text-xs" />
        <WireframeBox label="Certification" height="h-24" className="text-xs" />
        <WireframeBox label="Flexible" height="h-24" className="text-xs" />
        <WireframeBox label="Hands-On" height="h-24" className="text-xs" />
      </div>

      {/* Upcoming Events */}
      <WireframeBox label="Upcoming Courses & Workshops" height="h-40" />

      {/* Registration CTA */}
      <WireframeBox label="Registration & Contact Information" height="h-24" />
    </div>
  );
}

function StoreWireframe() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900 mb-6">Store Page Structure</h3>
      
      {/* Page Header */}
      <WireframeBox label="Store Header & Search/Filter Bar" height="h-24" />

      {/* Categories */}
      <div className="border-2 border-dashed border-gray-300 rounded p-3 bg-gray-50">
        <div className="flex gap-2 justify-center">
          {['All Products', 'Equipment', 'Supplements', 'Apparel', 'Books'].map((cat) => (
            <div key={cat} className="px-4 py-2 bg-white border border-gray-300 rounded text-xs text-gray-600">
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="border-2 border-dashed border-gray-300 rounded p-4 bg-gray-50">
        <div className="text-center mb-4 text-lg text-gray-500">Product Grid</div>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="border border-gray-300 rounded p-3 bg-white">
              <div className="w-full h-32 bg-gray-300 rounded mb-2"></div>
              <div className="w-full h-3 bg-gray-400 rounded mb-2"></div>
              <div className="w-2/3 h-3 bg-gray-200 rounded mb-2"></div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-4 bg-[#b48cbf]/30 rounded"></div>
                <div className="w-16 h-6 bg-[#b48cbf]/50 rounded text-xs"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured/Recommended */}
      <WireframeBox label="Featured Products" height="h-32" />

      {/* Newsletter Signup */}
      <WireframeBox label="Newsletter Signup / Store Updates" height="h-24" />
    </div>
  );
}
