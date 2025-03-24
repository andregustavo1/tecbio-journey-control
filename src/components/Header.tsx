
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? 'backdrop-blur-xl bg-white/80 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="z-50">
          <h1 className={`text-2xl font-poppins font-bold ${
            scrolled ? 'text-tecbio-blue' : 'text-white'
          }`}>
            <span className="text-tecbio-yellow">Tec</span>bio
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
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
            href="#contact" 
            className={`btn ${
              scrolled ? 'btn-primary text-white' : 'glass-dark hover:bg-white/20 text-white'
            }`}
          >
            Solicitar Demonstração
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className={scrolled ? 'text-tecbio-blue' : 'text-white'} />
          ) : (
            <Menu size={24} className={scrolled ? 'text-tecbio-blue' : 'text-white'} />
          )}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-40 bg-tecbio-blue/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col items-center justify-center h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-xl py-3 hover:text-tecbio-yellow transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn btn-accent mt-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicitar Demonstração
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
