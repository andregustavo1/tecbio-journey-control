import { useEffect, useRef } from 'react';
import { Search, Settings, Server, Lightbulb, PhoneCall } from 'lucide-react';

const HowItWorksSection = () => {
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

  const steps = [
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Análise de Necessidades",
      description: "Avaliação detalhada dos requisitos da empresa para identificar as soluções mais adequadas."
    },
    {
      icon: <Settings className="h-6 w-6 text-white" />,
      title: "Personalização",
      description: "Adaptação das soluções ao fluxo de trabalho específico da sua organização."
    },
    {
      icon: <Server className="h-6 w-6 text-white" />,
      title: "Implementação",
      description: "Instalação e configuração dos sistemas com mínima interrupção das operações."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      title: "Treinamento",
      description: "Capacitação da equipe para uso eficiente das ferramentas implementadas."
    },
    {
      icon: <PhoneCall className="h-6 w-6 text-white" />,
      title: "Suporte Contínuo",
      description: "Assistência técnica e atualizações para garantir o desempenho ideal das soluções."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-tecbio-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-tecbio-blue/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-tecbio-yellow/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-tecbio-blue bg-tecbio-blue/10 px-4 py-1 rounded-full inline-block mb-4 reveal opacity-0">Processo</span>
          <h2 className="section-title reveal opacity-0">Como Funciona</h2>
          <p className="text-tecbio-gray text-lg mt-4 reveal opacity-0">
            Nosso processo de implementação garante uma transição suave e eficiente
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-tecbio-blue/20 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Steps */}
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`mb-16 last:mb-0 relative reveal opacity-0 transition-all duration-500 ease-out`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`md:flex ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:gap-8 items-center`}>
                  <div className={`md:w-1/2 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`bg-tecbio-blue p-1 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${index % 2 === 0 ? 'md:mx-0' : 'md:ml-auto'}`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-medium text-tecbio-blue mb-3">{step.title}</h3>
                    <p className="text-tecbio-gray">{step.description}</p>
                  </div>
                  
                  <div className="hidden md:block md:w-1/2 mt-6 md:mt-0">
                    <div className="bg-white rounded-xl border border-tecbio-blue/10 p-6 shadow-lg relative">
                      {/* Step number */}
                      <div className="absolute -top-3 -left-3 w-10 h-10 bg-tecbio-yellow rounded-full flex items-center justify-center font-bold text-tecbio-blue">
                        {index + 1}
                      </div>
                      
                      {/* Step illustration */}
                      <div className="h-40 flex items-center justify-end">
                        {index === 0 && (
                          <div className="w-full h-full bg-tecbio-light/50 rounded-lg flex items-center justify-center">
                            <div className="w-3/4 h-3/4 grid grid-cols-2 gap-3">
                              <div className="bg-white rounded-md p-2 shadow-sm">
                                <div className="w-full h-3 bg-tecbio-blue/10 rounded-full mb-2"></div>
                                <div className="w-2/3 h-3 bg-tecbio-blue/10 rounded-full"></div>
                              </div>
                              <div className="bg-white rounded-md p-2 shadow-sm">
                                <div className="w-full h-3 bg-tecbio-blue/10 rounded-full mb-2"></div>
                                <div className="w-3/4 h-3 bg-tecbio-blue/10 rounded-full"></div>
                              </div>
                              <div className="bg-white rounded-md p-2 shadow-sm">
                                <div className="w-full h-3 bg-tecbio-blue/10 rounded-full mb-2"></div>
                                <div className="w-1/2 h-3 bg-tecbio-blue/10 rounded-full"></div>
                              </div>
                              <div className="bg-white rounded-md p-2 shadow-sm">
                                <div className="w-full h-3 bg-tecbio-blue/10 rounded-full mb-2"></div>
                                <div className="w-2/3 h-3 bg-tecbio-blue/10 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 1 && (
                          <div className="w-full h-full bg-tecbio-light/50 rounded-lg flex items-center justify-center">
                            <div className="relative w-32 h-32">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full border-2 border-tecbio-blue/30 flex items-center justify-center">
                                  <div className="w-16 h-16 rounded-full border-2 border-tecbio-blue/50 flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-tecbio-blue/20 flex items-center justify-center">
                                      <Settings className="h-6 w-6 text-tecbio-blue" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                                <div className="w-4 h-1 bg-tecbio-blue/60 rounded-full"></div>
                              </div>
                              <div className="absolute bottom-0 left-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                                <div className="w-4 h-4 rounded-full border border-tecbio-blue/60"></div>
                              </div>
                              <div className="absolute top-0 left-1/4 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center">
                                <div className="w-3 h-3 bg-tecbio-blue/40 rounded-sm"></div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 2 && (
                          <div className="w-full h-full bg-tecbio-light/50 rounded-lg flex items-center justify-center">
                            <div className="w-3/4 h-3/4 flex flex-col">
                              <div className="h-1/4 flex items-center justify-between px-4">
                                <div className="w-8 h-8 rounded-md bg-tecbio-blue flex items-center justify-center">
                                  <Server className="h-4 w-4 text-white" />
                                </div>
                                <div className="w-16 h-1 bg-tecbio-blue/30"></div>
                                <div className="w-8 h-8 rounded-md bg-white shadow-sm flex items-center justify-center">
                                  <div className="w-4 h-4 rounded-full border border-tecbio-blue/60"></div>
                                </div>
                                <div className="w-16 h-1 bg-tecbio-blue/30"></div>
                                <div className="w-8 h-8 rounded-md bg-white shadow-sm flex items-center justify-center">
                                  <div className="w-4 h-4 rounded-full border border-tecbio-blue/60"></div>
                                </div>
                              </div>
                              <div className="flex-1 bg-white rounded-lg mt-4 p-4 shadow-sm">
                                <div className="grid grid-cols-2 gap-3 h-full">
                                  <div className="bg-tecbio-blue/5 rounded-md"></div>
                                  <div className="bg-tecbio-blue/5 rounded-md"></div>
                                  <div className="bg-tecbio-blue/5 rounded-md"></div>
                                  <div className="bg-tecbio-blue/5 rounded-md"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 3 && (
                          <div className="w-full h-full bg-tecbio-light/50 rounded-lg flex items-center justify-center">
                            <div className="w-3/4 h-3/4 flex items-center justify-center">
                              <div className="relative">
                                <div className="w-32 h-20 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center">
                                  <Lightbulb className="h-6 w-6 text-tecbio-yellow mb-1" />
                                  <div className="w-16 h-2 bg-tecbio-blue/20 rounded-full"></div>
                                </div>
                                <div className="absolute -top-3 -right-3 w-16 h-16">
                                  <div className="w-full h-full relative">
                                    <div className="absolute inset-0 animate-ping">
                                      <div className="w-6 h-6 rounded-full bg-tecbio-yellow/40 absolute top-0 right-0"></div>
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-tecbio-yellow/80 absolute top-0 right-0"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 4 && (
                          <div className="w-full h-full bg-tecbio-light/50 rounded-lg flex items-center justify-center">
                            <div className="w-3/4 h-3/4 flex items-center justify-center">
                              <div className="relative">
                                <div className="flex space-x-4">
                                  <div className="w-20 h-36 bg-white rounded-xl shadow-sm flex flex-col overflow-hidden">
                                    <div className="h-6 bg-tecbio-blue flex items-center justify-center">
                                      <div className="w-10 h-1.5 bg-white/60 rounded-full"></div>
                                    </div>
                                    <div className="flex-1 p-2">
                                      <div className="w-full h-2 bg-tecbio-blue/10 rounded-full mb-2"></div>
                                      <div className="w-3/4 h-2 bg-tecbio-blue/10 rounded-full mb-2"></div>
                                      <div className="w-1/2 h-2 bg-tecbio-blue/10 rounded-full"></div>
                                      <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-tecbio-yellow flex items-center justify-center">
                                        <PhoneCall className="h-3 w-3 text-tecbio-blue" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-10 flex flex-col justify-center">
                                    <div className="h-px w-full bg-tecbio-blue/30 my-1"></div>
                                    <div className="h-px w-full bg-tecbio-blue/30 my-1"></div>
                                    <div className="h-px w-full bg-tecbio-blue/30 my-1"></div>
                                  </div>
                                  <div className="w-12 h-12 rounded-full bg-tecbio-blue/20 flex items-center justify-center self-center">
                                    <div className="w-6 h-6 rounded-full bg-tecbio-blue flex items-center justify-center">
                                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute top-12 left-1/2 w-6 h-6 bg-tecbio-blue rounded-full transform -translate-x-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
