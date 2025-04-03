
import { useEffect, useRef } from 'react';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "WhatsApp",
      value: "(83) 92140-9278",
      link: "https://wa.me/5583921409278"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "E-mail",
      value: "contato@tecbioservices.com.br",
      link: "mailto:contato@tecbioservices.com.br"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: "Instagram",
      value: "tecbio_services",
      link: "https://instagram.com/tecbio_services"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Localização",
      value: "São Paulo/SP",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-tecbio-yellow bg-tecbio-yellow/10 px-4 py-1 rounded-full inline-block mb-4 reveal opacity-0">
                Contato
              </span>
              <h2 className="section-title reveal opacity-0">Entre em Contato</h2>
              <p className="text-tecbio-gray text-lg mt-4 mb-8 reveal opacity-0">
                Transforme a gestão de jornada da sua empresa com nossas soluções tecnológicas. Nossa equipe está pronta para atender às necessidades específicas da sua organização.
              </p>

              <div className="grid md:grid-cols-2 gap-6 reveal opacity-0">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.title !== "Localização" ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="bg-tecbio-light hover:bg-tecbio-blue/5 rounded-xl p-6 transition-all duration-300 group"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm mr-4 group-hover:bg-tecbio-blue/10 transition-colors duration-300">
                        <span className="text-tecbio-blue">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-tecbio-blue font-medium mb-1">{item.title}</h3>
                        <p className="text-tecbio-gray group-hover:text-tecbio-blue transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="relative reveal opacity-0">
              <div className="bg-gradient-to-br from-tecbio-blue to-tecbio-blue/80 rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em0wIDB2LTZoLTZ2Nmg2em0tMTggMTh2LTZoLTZ2Nmg2em0wIDBoNlY0NmgtNnY2eiIvPjwvZz48L2c+PC9zdmc+')]"></div>

                <div className="relative p-8 md:p-12">
                  <div className="text-center mb-10">
                    <h3 className="text-2xl font-semibold text-white mb-2">Como podemos ajudar?</h3>
                    <p className="text-white/80">
                      Estamos prontos para oferecer a solução ideal para sua empresa
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="text-white font-medium">Tecbio Services Ltda</h4>
                        <p className="text-white/70 text-sm">
                          Tecnologia de App Facial para controle de ponto, EPIs e refeitório
                        </p>
                      </div>

                      <div className="h-px bg-white/20"></div>

                      <div className="space-y-4">
                        <p className="text-white/90">Soluções disponíveis:</p>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/10 rounded-lg p-3 border border-white/10">
                            <p className="text-sm text-white mb-1 font-medium">App de Ponto</p>
                            <div className="w-full h-1 bg-white/20 rounded-full">
                              <div className="h-full rounded-full bg-tecbio-yellow" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3 border border-white/10">
                            <p className="text-sm text-white mb-1 font-medium">Gestão de EPIs</p>
                            <div className="w-full h-1 bg-white/20 rounded-full">
                              <div className="h-full rounded-full bg-tecbio-yellow" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3 border border-white/10">
                            <p className="text-sm text-white mb-1 font-medium">Refeitório</p>
                            <div className="w-full h-1 bg-white/20 rounded-full">
                              <div className="h-full rounded-full bg-tecbio-yellow" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3 border border-white/10">
                            <p className="text-sm text-white mb-1 font-medium">Dashboard</p>
                            <div className="w-full h-1 bg-white/20 rounded-full">
                              <div className="h-full rounded-full bg-tecbio-yellow" style={{ width: '95%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 text-center">
                        <a
                          href="https://wa.me/5583921409278"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-accent w-full"
                        >
                          Solicitar Demonstração
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-tecbio-yellow/30 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/30 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
