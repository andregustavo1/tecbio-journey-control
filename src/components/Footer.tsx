
import { Mail, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const links = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Por que nos escolher', href: '#why-choose' },
    { name: 'Soluções', href: '#solutions' },
    { name: 'Tecnologia', href: '#technology' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <footer className="bg-tecbio-blue/95 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptLTE4IDE4di02aC02djZoNnptMCAwaDZWNDZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-7 gap-12 pb-10 border-b border-white/10">
          <div className="md:col-span-3">
            <h1 className="text-2xl font-poppins font-bold mb-4">
              <span className="text-tecbio-yellow">Tec</span>bio
            </h1>
            <p className="text-white/70 mb-6 max-w-md">
              Soluções tecnológicas inovadoras para controle de jornada corporativa. Oferecemos aplicativos de ponto com reconhecimento facial, gestão de EPIs e controle de refeitório.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:contato@tecbioservices.com.br"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/tecbio_services"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-6">Links rápidos</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-6">Soluções</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#solutions"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  App de Controle de Ponto
                </a>
              </li>
              <li>
                <a 
                  href="#solutions"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Gestão de EPIs
                </a>
              </li>
              <li>
                <a 
                  href="#solutions"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Controle de Refeitório
                </a>
              </li>
              <li>
                <a 
                  href="#solutions"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Dashboard Gerencial
                </a>
              </li>
              <li>
                <a 
                  href="#solutions"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Integração com Sistemas
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Tecbio Services Ltda. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded-full text-sm"
          >
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
