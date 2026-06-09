import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/76b4795095657ee25ca10dfed9b5000815b1afcc.png?url';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Healing Paws FL" className="h-10" />
            <p className="text-gray-400">
              Holistic veterinary care and integrative wellness services dedicated to your pet&apos;s health.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/healingpawscenter954/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#b48cbf] rounded-full flex items-center justify-center hover:bg-[#9d6fa8] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/healingpawscenter954/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#b48cbf] rounded-full flex items-center justify-center hover:bg-[#9d6fa8] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC9IL-VpxNXPrcSXp3XJDULw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#b48cbf] rounded-full flex items-center justify-center hover:bg-[#9d6fa8] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@healingpawscenter954"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#b48cbf] rounded-full flex items-center justify-center hover:bg-[#9d6fa8] transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#b7e1da] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#b7e1da] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#b7e1da] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-[#b7e1da] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#b7e1da] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Therapeutic Modalities</li>
              <li className="text-gray-400">Manual Therapy</li>
              <li className="text-gray-400">Exercise & Rehabilitation</li>
              <li className="text-gray-400">Pain Management</li>
              <li className="text-gray-400">Wellness Programs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#b7e1da]" />
                <span>854 East Oakland Park Blvd.<br />Ft. Lauderdale, FL 33334</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#b7e1da]" />
                <a href="tel:+19549558888" className="hover:text-[#b7e1da] transition-colors">
                  (954) 955-8888
                </a>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#b7e1da]" />
                <span>info@healingpawsfl.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Healing Paws FL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}