
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        revealElements.forEach((el) => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-tecbio-blue">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-tecbio-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-60 -left-20 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptLTE4IDE4di02aC02djZoNnptMCAwaDZWNDZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold mb-6 reveal opacity-0">
            Pronto para Revolucionar o Controle de Jornada?
          </h2>
          <p className="text-xl text-white/80 mb-10 reveal opacity-0" style={{ animationDelay: '100ms' }}>
            Solicite uma demonstração e conheça nossas soluções em ação
          </p>
          
          <a 
            href="https://wa.me/5583921409278?text=Olá,%20gostaria%20de%20agendar%20uma%20demonstração%20das%20soluções%20da%20Tecbio%20Services"
            target="_blank"
            rel="noreferrer"
            className="btn btn-accent text-lg px-8 py-4 reveal opacity-0 group"
            style={{ animationDelay: '200ms' }}
          >
            Agendar Demonstração
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          {/* Decorative elements */}
          <div className="mt-16 grid grid-cols-5 gap-6 reveal opacity-0" style={{ animationDelay: '300ms' }}>
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white/30 rounded-full" 
                  style={{ 
                    width: `${15 + Math.random() * 85}%`,
                    transition: 'width 1.5s ease-in-out'
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
