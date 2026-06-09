import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to start your pet&apos;s journey to recovery? Contact us today to schedule a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b48cbf]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b48cbf]"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b48cbf]"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b48cbf]"
                  required
                />
              </div>

              <div>
                <label htmlFor="petName" className="block text-gray-700 mb-2">
                  Pet&apos;s Name
                </label>
                <input
                  type="text"
                  id="petName"
                  name="petName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b48cbf]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b48cbf]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#b48cbf] text-white px-8 py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#b7e1da] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600 text-lg">
                  854 East Oakland Park Blvd.<br />
                  Ft. Lauderdale, FL 33334
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#b7e1da] rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Phone</h3>
                <a href="tel:+19549558888" className="text-gray-600 text-lg hover:text-[#b48cbf] transition-colors">
                  (954) 955-8888
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#b7e1da] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600 text-lg">info@healingpawsfl.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#b7e1da] rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Hours</h3>
                <p className="text-gray-600 text-lg">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-500">Map Integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}