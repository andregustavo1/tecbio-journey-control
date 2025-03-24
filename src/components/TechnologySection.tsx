
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const TechnologySection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const technologies = [
    {
      title: "Reconhecimento Facial",
      description: "Tecnologia avançada de detecção e reconhecimento de faces com alto índice de precisão, resistente a tentativas de fraude.",
      features: ["99.8% de precisão", "Anti-spoofing", "Processamento em tempo real"],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Geolocalização",
      description: "Sistema integrado de localização para registro de ponto com validação geográfica, garantindo que o registro seja feito no local correto.",
      features: ["Cercas virtuais", "Histórico de localizações", "Mapeamento de áreas"],
      color: "from-green-500 to-green-700"
    },
    {
      title: "Biometria Multimodal",
      description: "Combinação de diferentes métodos biométricos para aumentar a segurança e a eficiência na identificação de usuários.",
      features: ["Facial + Voz", "Adaptável a condições ambientais", "Alta segurança"],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Análise de Dados",
      description: "Processamento avançado de informações para fornecer insights valiosos sobre padrões de presença, produtividade e conformidade.",
      features: ["Dashboards personalizados", "Relatórios automatizados", "Métricas de desempenho"],
      color: "from-red-500 to-red-700"
    }
  ];

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

    // Auto advance slides
    slideInterval.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % technologies.length);
    }, 5000);

    return () => {
      if (observerRef.current) {
        revealElements.forEach((el) => {
          observerRef.current?.unobserve(el);
        });
      }
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [technologies.length]);

  const goToNextSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    setActiveSlide((prev) => (prev + 1) % technologies.length);
    slideInterval.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % technologies.length);
    }, 5000);
  };

  const goToPrevSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    setActiveSlide((prev) => (prev - 1 + technologies.length) % technologies.length);
    slideInterval.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % technologies.length);
    }, 5000);
  };

  return (
    <section id="technology" className="py-24 bg-tecbio-blue text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-tecbio-yellow bg-tecbio-yellow/20 px-4 py-1 rounded-full inline-block mb-4 reveal opacity-0">Inovação</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold mb-4 text-white reveal opacity-0">Nossa Tecnologia</h2>
          <p className="text-white/80 text-lg mt-4 reveal opacity-0">
            Conheça as tecnologias avançadas que utilizamos para oferecer soluções de excelência
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Slider navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-5 z-20 hidden md:block">
            <button 
              onClick={goToPrevSlide} 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowLeft size={20} className="text-white" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-5 z-20 hidden md:block">
            <button 
              onClick={goToNextSlide} 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowRight size={20} className="text-white" />
            </button>
          </div>

          {/* Slider */}
          <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl reveal opacity-0">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {technologies.map((tech, index) => (
                <div key={index} className="w-full flex-shrink-0 p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-poppins font-semibold mb-4">{tech.title}</h3>
                      <p className="text-white/80 mb-6">{tech.description}</p>
                      <ul className="space-y-3">
                        {tech.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-tecbio-yellow"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a 
                        href="#contact" 
                        className="inline-flex items-center text-tecbio-yellow hover:text-white transition-colors duration-300 mt-8 group"
                      >
                        Conhecer Detalhes Técnicos
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                    
                    <div className="relative">
                      {/* Visual representation of the technology */}
                      <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br border border-white/10 shadow-inner relative">
                        {/* Technology visual based on type */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${tech.color}`}>
                          {/* Technology-specific visualization */}
                          {index === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              {/* Face recognition elements */}
                              <div className="relative w-48 h-48">
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/60 flex items-center justify-center">
                                  <div className="w-36 h-36 rounded-full border border-white/30"></div>
                                  
                                  {/* Face mesh points */}
                                  {Array.from({ length: 20 }).map((_, i) => {
                                    const angle = (i / 20) * Math.PI * 2;
                                    const x = Math.cos(angle) * 50 + 50;
                                    const y = Math.sin(angle) * 60 + 50;
                                    return (
                                      <div 
                                        key={i} 
                                        className="absolute w-1.5 h-1.5 bg-tecbio-yellow rounded-full"
                                        style={{ 
                                          left: `${x}%`, 
                                          top: `${y}%`,
                                          opacity: Math.random() * 0.5 + 0.5
                                        }}
                                      />
                                    );
                                  })}
                                </div>
                                
                                {/* Scanning animation */}
                                <div className="absolute inset-0 overflow-hidden rounded-full">
                                  <div 
                                    className="w-full h-1 bg-tecbio-yellow/70 absolute"
                                    style={{ 
                                      top: '50%', 
                                      animation: 'scan 1.5s ease-in-out infinite',
                                      boxShadow: '0 0 10px rgba(250, 204, 21, 0.5)'
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {index === 1 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              {/* Geolocation visualization */}
                              <div className="relative w-64 h-64">
                                {/* Map grid */}
                                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                                  {Array.from({ length: 36 }).map((_, i) => (
                                    <div key={i} className="border border-white/10"></div>
                                  ))}
                                </div>
                                
                                {/* Location marker */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                  <div className="w-4 h-4 bg-tecbio-yellow rounded-full"></div>
                                  <div className="w-12 h-12 bg-tecbio-yellow/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                                </div>
                                
                                {/* Geofence */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/40 rounded-full"></div>
                              </div>
                            </div>
                          )}
                          
                          {index === 2 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              {/* Biometrics visualization */}
                              <div className="relative w-64 h-64">
                                {/* Fingerprint pattern */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40">
                                  {Array.from({ length: 8 }).map((_, i) => (
                                    <div 
                                      key={i} 
                                      className="absolute border border-white/30 rounded-full"
                                      style={{ 
                                        width: `${100 - i * 10}%`, 
                                        height: `${100 - i * 10}%`,
                                        top: `${i * 5}%`,
                                        left: `${i * 5}%`
                                      }}
                                    ></div>
                                  ))}
                                </div>
                                
                                {/* Audio waveform */}
                                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-12 flex items-center justify-center space-x-1">
                                  {Array.from({ length: 20 }).map((_, i) => {
                                    const height = Math.sin((i / 20) * Math.PI * 4) * 0.5 + 0.5;
                                    return (
                                      <div 
                                        key={i} 
                                        className="w-1 bg-white/60"
                                        style={{ height: `${height * 100}%` }}
                                      ></div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {index === 3 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              {/* Data visualization */}
                              <div className="relative w-full h-full p-8">
                                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                                  {/* Chart elements */}
                                  <div className="bg-white/10 rounded-lg p-4 flex flex-col">
                                    <div className="w-16 h-2 bg-white/30 rounded-full mb-4"></div>
                                    <div className="flex-1 flex items-end space-x-1">
                                      {Array.from({ length: 7 }).map((_, i) => {
                                        const height = Math.random() * 0.8 + 0.2;
                                        return (
                                          <div
                                            key={i}
                                            className="flex-1 bg-tecbio-yellow/70 rounded-t-sm"
                                            style={{ height: `${height * 100}%` }}
                                          ></div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                  
                                  <div className="bg-white/10 rounded-lg p-4 flex flex-col">
                                    <div className="w-12 h-2 bg-white/30 rounded-full mb-4"></div>
                                    <div className="flex-1 flex items-center justify-center">
                                      <div className="w-24 h-24 rounded-full border-4 border-tecbio-yellow/70 relative">
                                        <div className="absolute inset-0 border-4 border-white/20 rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 0 65%)' }}></div>
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold">65%</div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="bg-white/10 rounded-lg p-4">
                                    <div className="w-14 h-2 bg-white/30 rounded-full mb-3"></div>
                                    <div className="space-y-2">
                                      {Array.from({ length: 4 }).map((_, i) => (
                                        <div key={i} className="flex items-center">
                                          <div className="w-2 h-2 rounded-full bg-white/60 mr-2"></div>
                                          <div className="w-12 h-2 bg-white/30 rounded-full mr-2"></div>
                                          <div className="flex-1 h-2 bg-white/10 rounded-full">
                                            <div className="h-full bg-tecbio-yellow/70 rounded-full" style={{ width: `${Math.random() * 100}%` }}></div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  <div className="bg-white/10 rounded-lg p-4">
                                    <div className="w-10 h-2 bg-white/30 rounded-full mb-3"></div>
                                    <div className="relative h-[calc(100%-12px)]">
                                      <div className="absolute inset-0 flex items-center justify-center">
                                        <svg className="w-full h-full" viewBox="0 0 100 100">
                                          <path 
                                            d="M10,50 Q30,20 50,50 T90,50" 
                                            fill="none" 
                                            stroke="rgba(250, 204, 21, 0.7)" 
                                            strokeWidth="2"
                                          />
                                          <path 
                                            d="M10,70 Q30,40 50,70 T90,70" 
                                            fill="none" 
                                            stroke="rgba(255, 255, 255, 0.3)" 
                                            strokeWidth="2"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Common overlay grid pattern */}
                          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em0wIDB2LTZoLTZ2Nmg2em0tMTggMTh2LTZoLTZ2Nmg2em0wIDBoNlY0NmgtNnY2eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slide indicators */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
              {technologies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeSlide ? 'bg-tecbio-yellow w-8' : 'bg-white/40'
                  }`}
                ></button>
              ))}
            </div>
          </div>
          
          {/* Mobile navigation */}
          <div className="flex justify-center mt-6 space-x-4 md:hidden">
            <button 
              onClick={goToPrevSlide} 
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
            >
              <ArrowLeft size={20} className="text-white" />
            </button>
            <button 
              onClick={goToNextSlide} 
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
            >
              <ArrowRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
