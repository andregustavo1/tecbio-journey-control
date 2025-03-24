
import { useEffect, useRef } from 'react';
import { Clock, ShieldCheck, Utensils, BarChart3, Share2, Bell } from 'lucide-react';

const SolutionsSection = () => {
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

  const solutions = [
    {
      icon: <Clock className="h-8 w-8 text-tecbio-blue" />,
      title: "App de Controle de Ponto",
      description: "Registro de jornada com reconhecimento facial, geolocalização e validação em tempo real."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-tecbio-blue" />,
      title: "Gestão de EPIs",
      description: "Controle de distribuição, uso e validade de equipamentos de proteção individual."
    },
    {
      icon: <Utensils className="h-8 w-8 text-tecbio-blue" />,
      title: "Controle de Refeitório",
      description: "Gestão de acesso, consumo e faturamento em refeitórios corporativos."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-tecbio-blue" />,
      title: "Dashboard Gerencial",
      description: "Relatórios e análises de dados para tomada de decisão estratégica."
    },
    {
      icon: <Share2 className="h-8 w-8 text-tecbio-blue" />,
      title: "Integração com Sistemas",
      description: "Compatibilidade com sistemas de RH, ERP e folha de pagamento."
    },
    {
      icon: <Bell className="h-8 w-8 text-tecbio-blue" />,
      title: "Alertas e Notificações",
      description: "Sistema de avisos para gestores sobre irregularidades ou pendências."
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-tecbio-yellow bg-tecbio-yellow/10 px-4 py-1 rounded-full inline-block mb-4 reveal opacity-0">Produtos</span>
          <h2 className="section-title reveal opacity-0">Soluções Tecnológicas</h2>
          <p className="text-tecbio-gray text-lg mt-4 reveal opacity-0">
            Plataforma integrada para gestão completa da jornada corporativa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group relative bg-tecbio-light/50 hover:bg-white rounded-2xl p-8 transition-all duration-300 overflow-hidden reveal opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background decoration */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-tecbio-blue/5 rounded-full group-hover:bg-tecbio-blue/10 transition-all duration-300 transform group-hover:scale-125"></div>
              
              <div className="relative z-10">
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:shadow-md transition-all duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-tecbio-blue text-xl font-medium mb-4">{solution.title}</h3>
                <p className="text-tecbio-gray">{solution.description}</p>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-8 h-16 bg-tecbio-yellow/20 group-hover:bg-tecbio-yellow/40 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a href="#contact" className="btn btn-primary reveal opacity-0">
            Solicitar Demonstração
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
