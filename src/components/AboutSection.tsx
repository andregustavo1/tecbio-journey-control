
import { useEffect, useRef } from 'react';
import { Shield, Smartphone, Settings, HeadphonesIcon } from 'lucide-react';

const AboutSection = () => {
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

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-tecbio-blue" />,
      title: 'Tecnologia facial avançada',
      description: 'Reconhecimento biométrico preciso e seguro para controle de acesso.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-tecbio-blue" />,
      title: 'Aplicativo multiplataforma',
      description: 'Soluções compatíveis com diversos dispositivos e sistemas operacionais.'
    },
    {
      icon: <Settings className="w-6 h-6 text-tecbio-blue" />,
      title: 'Soluções corporativas personalizadas',
      description: 'Adaptamos nossas ferramentas às necessidades específicas de cada empresa.'
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-tecbio-blue" />,
      title: 'Suporte técnico especializado',
      description: 'Equipe dedicada para garantir o funcionamento contínuo das soluções.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-tecbio-yellow bg-tecbio-yellow/10 px-4 py-1 rounded-full reveal opacity-0">Sobre nós</span>
            <h2 className="section-title mt-4 reveal opacity-0">Sobre a Tecbio Services</h2>
            <p className="text-tecbio-gray text-lg leading-relaxed mt-6 reveal opacity-0">
              A Tecbio Services é especialista no desenvolvimento de soluções tecnológicas para gestão e controle de jornada corporativa. Focamos exclusivamente no atendimento a pessoas jurídicas, oferecendo ferramentas que otimizam processos, aumentam a segurança e reduzem custos operacionais.
            </p>
            <p className="text-tecbio-gray text-lg leading-relaxed mt-4 reveal opacity-0">
              Nossa tecnologia de reconhecimento facial garante precisão, confiabilidade e praticidade no controle de ponto e acesso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-tecbio-light rounded-xl p-6 transition-all duration-300 hover:shadow-lg reveal opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-tecbio-blue text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-tecbio-gray text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative reveal opacity-0">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[3/4] bg-gradient-to-br from-tecbio-blue to-blue-800 relative overflow-hidden">
                {/* Interface elements */}
                <div className="absolute inset-6 bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                  {/* App header */}
                  <div className="h-14 bg-white/10 backdrop-blur-sm flex items-center justify-between px-4 border-b border-white/10">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-tecbio-yellow flex items-center justify-center">
                        <span className="text-xs font-bold text-tecbio-blue">TB</span>
                      </div>
                      <span className="ml-2 text-white text-sm font-medium">Dashboard</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <div className="w-4 h-0.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {/* Cards */}
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                          <div className="w-full h-1.5 bg-white/20 rounded-full mb-3">
                            <div 
                              className="h-full bg-tecbio-yellow rounded-full" 
                              style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                            ></div>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full mb-1"></div>
                          <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Charts */}
                    <div className="mt-4 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <div className="w-24 h-2 bg-white/10 rounded-full"></div>
                        <div className="w-16 h-5 bg-white/10 rounded-full"></div>
                      </div>
                      <div className="h-32 flex items-end justify-between">
                        {[38, 65, 45, 80, 64, 72, 55].map((height, i) => (
                          <div key={i} className="w-[8%] bg-gradient-to-t from-tecbio-yellow/80 to-tecbio-yellow/30 rounded-t-sm" style={{ height: `${height}%` }}></div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-2">
                        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                          <div key={day} className="w-[8%] text-center">
                            <div className="w-full h-1 bg-white/10 rounded-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* User list */}
                    <div className="mt-4">
                      {[1, 2, 3].map((user) => (
                        <div key={user} className="flex items-center p-3 border-b border-white/5">
                          <div className="w-8 h-8 rounded-full bg-white/10"></div>
                          <div className="ml-3">
                            <div className="w-24 h-2 bg-white/20 rounded-full"></div>
                            <div className="w-16 h-1.5 bg-white/10 rounded-full mt-1"></div>
                          </div>
                          <div className="ml-auto w-12 h-5 rounded-full bg-white/5 border border-white/10"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Interface decoration */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-tecbio-yellow/30 rounded-full blur-xl"></div>
                <div className="absolute top-8 -left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 w-12 h-96 bg-tecbio-yellow/20 blur-3xl rotate-12"></div>
            <div className="absolute -bottom-6 left-12 w-32 h-32 rounded-full bg-tecbio-blue/20 blur-2xl"></div>
            <div className="absolute -z-10 top-0 -left-6 w-24 h-24 rounded-full border-8 border-tecbio-light"></div>
            <div className="absolute -z-10 bottom-12 right-0 w-16 h-16 rounded-full border-4 border-tecbio-yellow/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
