import { GraduationCap, Stethoscope, Heart } from "lucide-react";

const courseCategories = [
  {
    title: "For Pet Owners",
    icon: Heart,
    description: "Educational resources to help you better understand and care for your pet's rehabilitation needs.",
    courses: [
      "Understanding Your Pet's Rehabilitation Journey",
      "Home Care Techniques for Recovering Pets",
      "Senior Pet Wellness & Mobility",
      "Post-Surgical Care at Home",
    ],
    bgColor: "bg-[#b7e1da]",
    textColor: "text-gray-900",
  },
  {
    title: "For Professionals",
    icon: Stethoscope,
    description: "Advanced training courses designed for veterinary professionals seeking to expand their rehabilitation expertise.",
    courses: [
      "Introduction to Canine Rehabilitation",
      "Advanced Hydrotherapy Techniques",
      "Therapeutic Exercise Programming",
      "Pain Management Strategies",
    ],
    bgColor: "bg-[#b48cbf]",
    textColor: "text-white",
  },
  {
    title: "For Future Professionals",
    icon: GraduationCap,
    description: "Foundational courses for students and aspiring veterinary rehabilitation specialists.",
    courses: [
      "Career Paths in Veterinary Rehabilitation",
      "Fundamentals of Animal Anatomy",
      "Introduction to Physical Therapy Modalities",
      "Building Your Rehabilitation Practice",
    ],
    bgColor: "bg-[#b7e1da]",
    textColor: "text-gray-900",
  },
];

export function Courses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-gray-900 mb-6">
            Holistic Veterinary Online Courses
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Advance your expertise in veterinary rehabilitation with our comprehensive online courses. 
            Designed by certified practitioners for everyone from pet owners to veterinary professionals.
          </p>
        </div>

        {/* Course Categories - 3 in a row */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courseCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#b48cbf] transition-all hover:shadow-lg"
              >
                {/* Category Header */}
                <div className={`${category.bgColor} p-8 text-center`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-[#b48cbf]" />
                  </div>
                  <h2 className={`${category.textColor} mb-3`}>
                    {category.title}
                  </h2>
                </div>

                {/* Category Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-lg mb-6">
                    {category.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-gray-900 mb-3">
                      Available Courses:
                    </h4>
                    <ul className="space-y-2">
                      {category.courses.map((course, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 flex items-start"
                        >
                          <span className="text-[#b48cbf] mr-2 mt-1">
                            •
                          </span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-[#b48cbf] text-white py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors">
                    Explore Courses
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-gray-900 mb-4">
            Need Help Choosing a Course?
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Our education team can help you select the right courses for your needs, 
            whether you're a pet owner looking to support your pet's recovery or a 
            professional seeking to advance your career.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#b48cbf] text-white px-8 py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors"
          >
            Contact Education Team
          </a>
        </div>
      </div>
    </section>
  );
}