import { Header } from './Header';
import { Hero } from './Hero';
import { Stats } from './Stats';
import { Services } from './Services';
import { CTA } from './CTA';
import { AboutHP } from './AboutHP';
import { Videos } from './Videos';
import { Testimonials } from './Testimonials';
import { BlogPage } from './BlogPage';
import { Contact } from './Contact';
import { Footer } from './Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <CTA />
      <AboutHP />
      <Videos />
      <Testimonials />
      <BlogPage />
      <Contact />
      <Footer />
    </div>
  );
}