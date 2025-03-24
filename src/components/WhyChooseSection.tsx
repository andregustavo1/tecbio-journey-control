
import { useEffect, useRef } from 'react';
import { Scan, CheckCircle, Building, Settings2 } from 'lucide-react';

const WhyChooseSection = () => {
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

  const benefits = [
    {
      icon: <Scan size={32} className="text-tecbio-yellow" />,
      title: "Reconhecimento Facial Preciso",
      description: "Identificação biométrica sem contato físico, garantindo segurança e higiene no registro de ponto e acesso."
    },
    {
      icon: <CheckCircle size={32} className="text-tecbio-yellow" />,
      title: "Gestão Completa",
      description: "Controle de ponto, EPIs e refeitório em uma única plataforma integrada, simplificando a administração."
    },
    {
      icon: <Building size={32} className="text-tecbio-yellow" />,
      title: "Exclusivo para PJ",
      description: "Soluções desenvolvidas especificamente para atender às necessidades e demandas corporativas."
    },
    {
      icon: <Settings2 size={32} className="text-tecbio-yellow" />,
      title: "Personalização Avançada",
      description: "Adaptação às políticas e fluxos da sua empresa, com configurações específicas para cada cliente."
    }
  ];

  return (
    <section id="why-choose" className="py-24 bg-tecbio-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-tecbio-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-tecbio-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-tecbio-blue bg-tecbio-blue/10 px-4 py-1 rounded-full inline-block mb-4 reveal opacity-0">Diferenciais</span>
          <h2 className="section-title reveal opacity-0">Por Que Nos Escolher?</h2>
          <p className="text-tecbio-gray text-lg mt-4 reveal opacity-0">
            Tecnologia de ponta para gestão corporativa eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group reveal opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-tecbio-blue/5 flex items-center justify-center mb-6 group-hover:bg-tecbio-blue/10 transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-tecbio-blue text-xl font-medium mb-4">{benefit.title}</h3>
              <p className="text-tecbio-gray">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
