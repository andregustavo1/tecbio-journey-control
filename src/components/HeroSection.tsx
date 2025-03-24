
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;
    const mockup = mockupRef.current;

    if (title) title.classList.add('animate-fade-in');
    
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-in');
    }, 300);
    
    setTimeout(() => {
      if (button) button.classList.add('animate-fade-in');
    }, 600);

    setTimeout(() => {
      if (mockup) mockup.classList.add('animate-scale-up');
    }, 900);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20 pb-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-tecbio-blue to-tecbio-blue/80 z-0"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptLTE4IDE4di02aC02djZoNnptMCAwaDZWNDZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 z-0"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-white">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold opacity-0"
          >
            Controle de Jornada com Biometria Facial Avançada
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl mt-6 opacity-0 text-white/90"
          >
            Gerenciamento de Ponto, EPIs e Refeitório para Empresas
          </p>
          <a 
            ref={buttonRef}
            href="#solutions" 
            className="btn btn-accent mt-8 opacity-0"
          >
            Conheça Nossas Soluções
          </a>
        </div>
        
        <div 
          ref={mockupRef}
          className="opacity-0 relative"
        >
          <div className="relative mx-auto w-full max-w-md">
            {/* Phone mockup */}
            <div className="relative mx-auto w-64 h-[500px] bg-black rounded-[36px] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
              
              {/* Screen content */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tecbio-blue to-blue-900">
                  <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em0wIDB2LTZoLTZ2Nmg2em0tMTggMTh2LTZoLTZ2Nmg2em0wIDBoNlY0NmgtNnY2eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
                </div>
                
                {/* App interface */}
                <div className="absolute inset-0 flex flex-col">
                  {/* Status bar */}
                  <div className="h-7 bg-black/20 flex justify-between items-center px-4">
                    <span className="text-white text-xs">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="flex-1 flex flex-col p-4">
                    <div className="text-white text-xl font-medium mb-6">Tecbio App</div>
                    
                    {/* Face recognition interface */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="w-40 h-40 rounded-full border-2 border-dashed border-white/60 flex items-center justify-center relative mb-6">
                        <div className="absolute inset-2 rounded-full border border-white/30"></div>
                        <div className="absolute inset-3 rounded-full overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
                          <div className="h-full w-full bg-white/5"></div>
                        </div>
                        
                        {/* Scanning animation */}
                        <div className="absolute inset-0 overflow-hidden rounded-full">
                          <div className="w-full h-1 bg-tecbio-yellow/70 absolute top-1/2 animate-[scanline_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animation: 'scan 1.5s ease-in-out infinite' }}></div>
                        </div>
                      </div>
                      
                      <div className="text-white/90 text-xs mb-2">Posicione seu rosto</div>
                      <div className="text-white/70 text-[10px] max-w-[180px] text-center">
                        Mantenha o rosto centralizado e aguarde o reconhecimento
                      </div>
                    </div>
                    
                    {/* Bottom nav */}
                    <div className="h-14 mt-4 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-around">
                      <div className="w-10 h-10 rounded-full bg-tecbio-yellow/20 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-sm bg-white"></div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full border border-white"></div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-sm border border-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                <div className="w-40 h-6 bg-black rounded-b-2xl"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-tecbio-yellow/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ChevronDown className="text-white h-6 w-6" />
      </div>
    </section>
  );
};

export default HeroSection;
