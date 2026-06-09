import { PlayCircle } from 'lucide-react';

export function Videos() {
  // Replace these with actual video URLs
  const videos = [
    {
      id: 1,
      title: 'Before and After Pet Acupuncture for Dogs',
      embedUrl: 'https://www.youtube.com/embed/_VgA1pEFNvw',
    },
    {
      id: 2,
      title: 'Before and After Acupuncture',
      embedUrl: 'https://www.youtube.com/embed/DCnUYXd08Rs',
    },
  ];

  return (
    <section id="videos" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-gray-900 mb-4">
            See Our Holistic Care in Action
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Watch real success stories and learn about our innovative treatment methods that help pets regain mobility, reduce pain, and improve their quality of life.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {videos.map((video) => (
            <div key={video.id} className="group">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p className="mt-3 sm:mt-4 text-gray-900 text-base sm:text-lg">{video.title}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://www.youtube.com/channel/UC9IL-VpxNXPrcSXp3XJDULw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#b48cbf] text-white px-8 py-4 rounded-full hover:bg-[#a37bae] transition-colors"
          >
            <PlayCircle className="w-5 h-5" />
            Watch More Videos
          </a>
        </div>
      </div>
    </section>
  );
}