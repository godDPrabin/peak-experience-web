import { useState } from 'react';
import {
  Mountain,
  Snowflake,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  ArrowRight,
  Compass,
  Sparkles,
  Tent,
  Utensils,
  Hotel,
  Camera,
  Menu,
  X as XIcon,
} from 'lucide-react';
import { JotformModal } from '@/components/JotformModal';
import { Lightbox } from '@/components/Lightbox';

import header from '@/assets/sparsa/hero.jpg';
import img1 from '@/assets/sparsa/img1.jpg';
import img2 from '@/assets/sparsa/img2.jpg';
import img3 from '@/assets/sparsa/img3.jpg';
import img4 from '@/assets/sparsa/img4.jpg';
import agency from '@/assets/sparsa/agency.jpg';
import logo from '@/assets/sparsa/logoo.png';

import g1 from '@/assets/gallery/pic1.jpeg';
import g2 from '@/assets/gallery/pic2.jpeg';
import g3 from '@/assets/gallery/pic3.jpeg';
import g4 from '@/assets/gallery/pic4.jpeg';
import g5 from '@/assets/gallery/pic5.jpeg';
import g6 from '@/assets/gallery/pic6.jpeg';
import g7 from '@/assets/gallery/pic7.jpeg';
import g8 from '@/assets/gallery/pic8.jpeg';
import g9 from '@/assets/gallery/pic9.jpeg';
import g10 from '@/assets/gallery/pic10.jpeg';
import g11 from '@/assets/gallery/pic11.jpeg';
import g12 from '@/assets/gallery/pic12.jpeg';
import g13 from '@/assets/gallery/pic13.jpeg';
import g14 from '@/assets/gallery/pic14.jpeg';
import g15 from '@/assets/gallery/pic15.jpeg';
import g16 from '@/assets/gallery/pic16.jpeg';
import g17 from '@/assets/gallery/pic17.jpeg';
import g18 from '@/assets/gallery/pic18.jpeg';
import g19 from '@/assets/gallery/pic19.jpeg';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryImages = [
    g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19,
  ];
  const lightboxImages = galleryImages.map((src, i) => ({ src, alt: `Gallery image ${i + 1}` }));

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Peak Experience" className="h-10 w-10" />
              <span className="text-xl font-bold">Peak Experience</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#services" className="text-sm text-gray-300 hover:text-white transition">
                Services
              </a>
              <a href="#gallery" className="text-sm text-gray-300 hover:text-white transition">
                Gallery
              </a>
              <a href="#contact" className="text-sm text-gray-300 hover:text-white transition">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <XIcon size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-800 mt-4">
              <a
                href="#services"
                className="block py-2 text-sm text-gray-300 hover:text-white transition"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="block py-2 text-sm text-gray-300 hover:text-white transition"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block py-2 text-sm text-gray-300 hover:text-white transition"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <img
          src={header}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80" />

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain size={24} className="text-blue-400" />
            <span className="text-blue-400 font-semibold">Adventure Awaits</span>
            <Mountain size={24} className="text-blue-400" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your Peak Experience
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Immerse yourself in the beauty of nature with our exclusive adventure packages
          </p>

          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 mx-auto transition"
          >
            Start Your Journey
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Tent, title: 'Camping', desc: 'Experience nature like never before' },
              { icon: Utensils, title: 'Dining', desc: 'Local cuisine with mountain views' },
              { icon: Hotel, title: 'Lodging', desc: 'Comfortable luxury accommodations' },
            ].map((service) => (
              <div key={service.title} className="bg-slate-900 p-8 rounded-lg hover:bg-slate-850 transition">
                <service.icon size={40} className="text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className="relative overflow-hidden rounded-lg h-64 hover:opacity-80 transition"
              >
                <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/0 transition" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <MapPin size={16} /> Location
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} /> info@peakexperience.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#services" className="text-gray-400 hover:text-white transition block">
                  Services
                </a>
                <a href="#gallery" className="text-gray-400 hover:text-white transition block">
                  Gallery
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Peak Experience. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <JotformModal open={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <Lightbox
        images={lightboxImages}
        index={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onIndex={setSelectedIndex}
      />
    </div>
  );
};

export default App;
