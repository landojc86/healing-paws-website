import { Header } from './Header';
import { Courses } from './Courses';
import { Footer } from './Footer';

export function StandaloneCoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Courses />
      </div>
      <Footer />
    </div>
  );
}
