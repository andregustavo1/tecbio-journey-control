import { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Por que nos escolher', href: '#why-choose' },
    { name: 'Soluções', href: '#solutions' },
    { name: 'Tecnologia', href: '#technology' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-xl bg-white/80 py-5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="z-50">
          <img 
            src="/lovable-uploads/5519dab1-7625-45b8-bd17-fff92f56d7b5.png" 
            alt="Tecbio Logo" 
            className="h-13" /* Changed from h-15 to h-13 (slightly larger than original h-12) */
          />
        </a>

        {/* Navigation - Visible on all screen sizes */}
        <nav className="flex items-center space-x-8">
          {!isMobile && navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm transition-colors duration-300 ${
                scrolled ? 'text-tecbio-blue hover:text-tecbio-yellow' : 'text-white hover:text-tecbio-yellow'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5583921409278" 
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary text-white"
          >
            Contate-nos
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
