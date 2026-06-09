import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/76b4795095657ee25ca10dfed9b5000815b1afcc.png?url';

type ServiceCategory = {
  title: string;
  href: string;
  subPages?: { title: string; href: string }[];
};

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Physical Therapy, Pain & Mobility Support',
    href: '/services/physical-therapy',
    subPages: [
      { title: 'Therapeutic Land Exercises', href: '/services/therapeutic-exercise' },
      { title: 'Underwater Treadmill (Hydrotherapy)', href: '/services/underwater-treadmill' },
    ],
  },
  {
    title: 'Integrative & Holistic Medicine',
    href: '/services/integrative-holistic',
  },
  {
    title: 'Cancer Treatment',
    href: '/services/cancer-treatment',
  },
];

const commonAilments = [
  { title: 'Arthritis/Weakness', href: '/common-ailments/arthritis' },
  { title: 'Hip/Elbow Dysplasia', href: '/common-ailments/hip-elbow-dysplasia' },
  { title: 'Senior Pets/Hindlimb Weakness', href: '/common-ailments/senior-patients' },
  { title: 'Post TPLO/TTA/CCL Surgery', href: '/common-ailments/post-tplo-tta-ccl-surgery' },
  { title: 'Degenerative Myelopathy', href: '/common-ailments/senior-neurologic' },
  { title: 'Skin Allergies', href: '/common-ailments/skin-allergies' },
  { title: 'Spinal Injury/IVDD/Herniated Discs', href: '/common-ailments/spinal-injury' },
  { title: 'CCL/ACL Tear', href: '/common-ailments/ccl-injury' },
];

const aboutItems = [
  { title: 'Meet the Team', href: '/about#team', isRoute: true, isExternal: false },
  { title: 'Courses', href: 'https://holisticveterinaryinstitute.com/', isRoute: false, isExternal: true },
  { title: 'Blog', href: '/blog', isRoute: true, isExternal: false },
  { title: 'Franchise Opportunities', href: '#franchise', isRoute: false, isExternal: false },
  { title: 'Contact Us', href: '#contact', isRoute: false, isExternal: false },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showCommonAilmentsDropdown, setShowCommonAilmentsDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const navItems = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'Services', href: '/services', isRoute: true },
    { label: 'Common Ailments', href: '/common-ailments', isRoute: true },
    { label: 'Videos', href: '/videos', isRoute: true },
    { label: 'Store', href: '/store', isRoute: true },
    { label: 'About', href: '#about', isRoute: false },
  ];

  return (
    <>
      {/* Mobile Top CTA - Fixed Above Header */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#b48cbf] py-3 px-4 md:hidden">
        <a
          href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-white text-[#b48cbf] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-base w-full max-w-7xl mx-auto"
        >
          BOOK NOW
        </a>
      </div>
      <header className="fixed top-[60px] md:top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-[#b48cbf]">
              <img src={logo} alt="Healing Paws FL" className="h-10" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-[#b48cbf] hover:text-[#b7e1da] transition-colors font-semibold"
            >
              Home
            </Link>
            <div
              className="relative py-6 -my-6"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <Link
                to="/services"
                className="text-[#b48cbf] hover:text-[#b7e1da] transition-colors font-semibold"
              >
                Services
              </Link>
            </div>
            <div
              className="relative py-6 -my-6"
              onMouseEnter={() => setShowCommonAilmentsDropdown(true)}
              onMouseLeave={() => setShowCommonAilmentsDropdown(false)}
            >
              <Link
                to="/common-ailments"
                className="text-[#b48cbf] hover:text-[#b7e1da] transition-colors font-semibold"
              >
                Common Ailments
              </Link>
            </div>
            <Link
              to="/videos"
              className="text-[#b48cbf] hover:text-[#b7e1da] transition-colors font-semibold"
            >
              Videos
            </Link>
            <a
              href="https://healingpawsstore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b48cbf] hover:text-[#b7e1da] transition-colors font-semibold"
            >
              Store
            </a>
            <div
              className="relative py-6 -my-6"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <a
                href="#about"
                className="text-[#b48cbf] hover:text-[#b7e1da] transition-colors font-semibold"
              >
                About
              </a>
            </div>
            <a
              href="#contact"
              className="bg-[#b48cbf] text-white px-6 py-2 rounded-lg hover:bg-[#9d6fa8] transition-colors"
            >
              BOOK NOW
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <Link
              to="/"
              className="block py-3 text-gray-700 hover:text-[#b48cbf] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Services Expandable */}
            <div className="py-3">
              <button
                onClick={() => {
                  setShowServicesDropdown(!showServicesDropdown);
                  setShowCommonAilmentsDropdown(false);
                  setShowAboutDropdown(false);
                }}
                className="w-full text-left text-gray-700 hover:text-[#b48cbf] transition-colors flex justify-between items-center"
              >
                Services
                <span className={`transform transition-transform ${showServicesDropdown ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {showServicesDropdown && (
                <div className="mt-2 ml-4 space-y-2">
                  {serviceCategories.map((category, index) => (
                    <div key={index}>
                      <Link
                        to={category.href}
                        className="block py-2 text-gray-600 hover:text-[#b48cbf] transition-colors text-base font-semibold"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category.title}
                      </Link>
                      {category.subPages && (
                        <div className="ml-4 space-y-1 mt-1">
                          {category.subPages.map((subPage, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subPage.href}
                              className="block py-1 text-gray-500 hover:text-[#b48cbf] transition-colors text-xs"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subPage.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Link
                    to="/services"
                    className="block py-2 text-[#b48cbf] hover:text-[#9d6fa8] font-semibold transition-colors text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Common Ailments Expandable */}
            <div className="py-3">
              <button
                onClick={() => {
                  setShowCommonAilmentsDropdown(!showCommonAilmentsDropdown);
                  setShowServicesDropdown(false);
                  setShowAboutDropdown(false);
                }}
                className="w-full text-left text-gray-700 hover:text-[#b48cbf] transition-colors flex justify-between items-center"
              >
                Common Ailments
                <span className={`transform transition-transform ${showCommonAilmentsDropdown ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {showCommonAilmentsDropdown && (
                <div className="mt-2 ml-4 space-y-2">
                  {commonAilments.map((ailment, index) => (
                    <Link
                      key={index}
                      to={ailment.href}
                      className="block py-2 text-gray-600 hover:text-[#b48cbf] transition-colors text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {ailment.title}
                    </Link>
                  ))}
                  <Link
                    to="/common-ailments"
                    className="block py-2 text-[#b48cbf] hover:text-[#9d6fa8] font-semibold transition-colors text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Common Ailments
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/videos"
              className="block py-3 text-gray-700 hover:text-[#b48cbf] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Videos
            </Link>

            <a
              href="https://healingpawsstore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 text-gray-700 hover:text-[#b48cbf] transition-colors"
            >
              Store
            </a>

            {/* Mobile About Expandable */}
            <div className="py-3">
              <button
                onClick={() => {
                  setShowAboutDropdown(!showAboutDropdown);
                  setShowServicesDropdown(false);
                  setShowCommonAilmentsDropdown(false);
                }}
                className="w-full text-left text-gray-700 hover:text-[#b48cbf] transition-colors flex justify-between items-center"
              >
                About
                <span className={`transform transition-transform ${showAboutDropdown ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {showAboutDropdown && (
                <div className="mt-2 ml-4 space-y-2">
                  {aboutItems.map((item, index) => (
                    <div key={index}>
                      {item.isRoute ? (
                        <Link
                          to={item.href}
                          className="block py-2 text-gray-600 hover:text-[#b48cbf] transition-colors text-base"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="block py-2 text-gray-600 hover:text-[#b48cbf] transition-colors text-base"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </a>
                      )}
                    </div>
                  ))}
                  <Link
                    to="/about"
                    className="block py-2 text-[#b48cbf] hover:text-[#9d6fa8] font-semibold transition-colors text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Learn More About Us
                  </Link>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="block mt-4 text-center bg-[#b48cbf] text-white px-6 py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              BOOK NOW
            </a>
          </nav>
        )}
      </div>

      {/* Full-Width Services Dropdown */}
      {showServicesDropdown && (
        <div
          className="absolute left-0 right-0 bg-white shadow-lg border-t border-gray-200"
          onMouseEnter={() => setShowServicesDropdown(true)}
          onMouseLeave={() => setShowServicesDropdown(false)}
          style={{ top: 'calc(100% - 1px)' }}
        >
          <div className="px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <Link
                    to={category.href}
                    className="text-gray-900 hover:text-[#b48cbf] transition-colors font-semibold block mb-2"
                  >
                    {category.title}
                  </Link>
                  {category.subPages && (
                    <div className="ml-4 space-y-1 mt-2">
                      {category.subPages.map((subPage, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subPage.href}
                          className="text-gray-600 hover:text-[#b48cbf] transition-colors text-base block"
                        >
                          {subPage.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-4 border-t border-gray-200">
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-[#b48cbf] text-white px-6 py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors font-semibold"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Full-Width Common Ailments Dropdown */}
      {showCommonAilmentsDropdown && (
        <div
          className="absolute left-0 right-0 bg-white shadow-lg border-t border-gray-200"
          onMouseEnter={() => setShowCommonAilmentsDropdown(true)}
          onMouseLeave={() => setShowCommonAilmentsDropdown(false)}
          style={{ top: 'calc(100% - 1px)' }}
        >
          <div className="px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 max-w-5xl mx-auto">
              {commonAilments.map((ailment, index) => (
                <Link
                  key={index}
                  to={ailment.href}
                  className="text-gray-900 hover:text-[#b48cbf] transition-colors"
                >
                  {ailment.title}
                </Link>
              ))}
            </div>
            <div className="flex justify-center pt-4 border-t border-gray-200">
              <Link
                to="/common-ailments"
                className="inline-flex items-center justify-center bg-[#b48cbf] text-white px-6 py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors font-semibold"
              >
                View All Common Ailments
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Full-Width About Dropdown */}
      {showAboutDropdown && (
        <div
          className="absolute left-0 right-0 bg-white shadow-lg border-t border-gray-200"
          onMouseEnter={() => setShowAboutDropdown(true)}
          onMouseLeave={() => setShowAboutDropdown(false)}
          style={{ top: 'calc(100% - 1px)' }}
        >
          <div className="px-8 py-8">
            <div className="max-w-4xl mb-6">
              <ul className="space-y-2">
                {aboutItems.map((item, index) => (
                  <li key={index}>
                    {item.isRoute ? (
                      <Link
                        to={item.href}
                        className="text-gray-600 hover:text-[#b48cbf] transition-colors"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <a href={item.href} className="text-gray-600 hover:text-[#b48cbf] transition-colors">
                        {item.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center pt-4 border-t border-gray-200">
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-[#b48cbf] text-white px-6 py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors font-semibold"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      )}
      </header>
    </>
  );
}