export function Hero() {
  const vimeoEmbedUrl = "https://player.vimeo.com/video/1199618151?background=1&autoplay=1&muted=1&loop=1&autopause=0&playsinline=1";

  return (
    <section id="home" className="relative h-screen min-h-[500px] sm:min-h-[600px] flex items-center overflow-hidden pt-[140px] bg-gradient-to-br from-[#b7e1da] to-[#b48cbf]">
      {/* Hero Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-br from-[#b7e1da] to-[#b48cbf]">
        <iframe
          src={vimeoEmbedUrl}
          title="Healing Paws hero video"
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
          allow="autoplay; fullscreen; picture-in-picture"
          loading="eager"
        />
      </div>

      {/* Readability Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/35" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/50 via-black/25 to-transparent" />

      {/* Content Overlay - Left Justified */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-white">
              Premier, Holistic Care for Your Pet
            </h1>
            <p className="text-white/95 text-lg">
              Holistic vet care for pet lovers seeking experts in pet acupuncture, physical therapy, nutrition, herbal medicine, and integrative therapies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#b48cbf] text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-[#9d6fa8] transition-colors text-base sm:text-base font-semibold"
              >
                Book Appointment
              </a>
              <a
                href="/services.html"
                className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-base sm:text-base font-semibold"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
