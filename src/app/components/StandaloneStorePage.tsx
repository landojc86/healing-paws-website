import { Header } from './Header';
import { Store } from './Store';
import { Footer } from './Footer';

export function StandaloneStorePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Store />
      <Footer />
    </div>
  );
}
