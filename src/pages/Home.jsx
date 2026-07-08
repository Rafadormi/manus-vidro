import { ArrowRight, Phone, Mail, MapPin, Star, Users, Award, Clock, Eye, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Importando as imagens
import esquadriasImg from '../assets/esquadrias-aluminio.jpg';
import boxBanheiroImg from '../assets/box-banheiro.jpg';
import fachadeVidroImg from '../assets/fachada-vidro.jpg';
import guardaCorpoImg from '../assets/guarda-corpo.jpg';
import portaVidroImg from '../assets/porta-vidro.jpg';
import espelhoDecorativoImg from '../assets/espelho-decorativo.jpg';
import heroImg from '../assets/vidracaria-lideranca-hero-new.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerSlides = [
    {
      image: heroImg,
      title: 'Vidraçaria Liderança',
      subtitle: 'Refletindo Qualidade, Construindo Confiança',
      description: 'Especialistas em vidros e esquadrias de alumínio com mais de 10 anos de experiência no mercado.'
    },
    {
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80',
      title: 'Esquadrias de Alumínio',
      subtitle: 'Design Moderno e Funcionalidade',
      description: 'Janelas e portas de alumínio com a mais alta qualidade e durabilidade.'
    },
    {
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80',
      title: 'Box para Banheiro',
      subtitle: 'Elegância e Segurança',
      description: 'Boxes personalizados com vidro temperado e acabamento premium.'
    }
  ];

  const glassTypes = [
    {
      name: 'Vidro Temperado',
      description: 'Resistência 5x maior que o vidro comum, segurança garantida',
      icon: <Shield className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      name: 'Vidro Laminado',
      description: 'Proteção acústica e térmica, ideal para fachadas',
      icon: <Eye className="w-8 h-8" />,
      color: 'bg-green-500'
    },
    {
      name: 'Vidro Refletivo',
      description: 'Controle solar e privacidade, design moderno',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'bg-purple-500'
    }
  ];

  const services = [
    {
      id: 'esquadrias-aluminio',
      name: 'Esquadrias de Alumínio',
      description: 'Janelas, portas e estruturas em alumínio de alta qualidade',
      image: esquadriasImg,
      icon: '🏠'
    },
    {
      id: 'box-banheiro',
      name: 'Box para Banheiro',
      description: 'Boxes personalizados com vidro temperado e acabamento premium',
      image: boxBanheiroImg,
      icon: '🚿'
    },
    {
      id: 'envidracamento-reiki',
      name: 'Envidraçamento Reiki',
      description: 'Fechamento de sacadas e varandas com sistema Reiki',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '🏢'
    },
    {
      id: 'fachadas-vidro',
      name: 'Fachadas de Vidro',
      description: 'Fachadas modernas e elegantes para seu projeto',
      image: fachadeVidroImg,
      icon: '🏗️'
    },
    {
      id: 'espelhos-decorativos',
      name: 'Espelhos Decorativos',
      description: 'Espelhos sob medida para decoração e funcionalidade',
      image: espelhoDecorativoImg,
      icon: '✨'
    },
    {
      id: 'guarda-corpos',
      name: 'Guarda-Corpos',
      description: 'Proteção e elegância para escadas e sacadas',
      image: guardaCorpoImg,
      icon: '🛡️'
    },
    {
      id: 'portas-vidro',
      name: 'Portas de Vidro',
      description: 'Portas de vidro temperado para ambientes modernos',
      image: portaVidroImg,
      icon: '🚪'
    },
    {
      id: 'manutencao-reparos',
      name: 'Manutenção e Reparos',
      description: 'Serviços de manutenção e reparo para seus vidros',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '🔧'
    }
  ];

  const partners = [
    { name: 'Blindex', logo: 'https://via.placeholder.com/150x80/e53e3e/ffffff?text=BLINDEX' },
    { name: 'Cristal Sete', logo: 'https://via.placeholder.com/150x80/3b82f6/ffffff?text=CRISTAL+SETE' },
    { name: 'Moldurarte', logo: 'https://via.placeholder.com/150x80/10b981/ffffff?text=MOLDURARTE' },
    { name: 'UDinese', logo: 'https://via.placeholder.com/150x80/f59e0b/ffffff?text=UDINESE' },
    { name: 'Perfil', logo: 'https://via.placeholder.com/150x80/8b5cf6/ffffff?text=PERFIL' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  return (
    <div className="overflow-hidden">
      {/* Banner Rotativo - Design mais fluido */}
      <section className="relative h-screen overflow-hidden">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
            <div className="relative h-full flex items-center justify-center text-center text-white px-4">
              <div className="max-w-5xl mx-auto space-y-6">
                <h1 className="text-4xl md:text-7xl font-light mb-6 tracking-wide animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-3xl mb-4 font-light opacity-90 animate-fade-in-delay">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-80 leading-relaxed animate-fade-in-delay-2">
                  {slide.description}
                </p>
                <Link
                  to="/contato"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-4 rounded-full text-lg font-light border border-white/30 transition-all duration-300 animate-fade-in-delay-3 hover:scale-105"
                >
                  Entre em Contato
                  <ArrowRight className="ml-3" size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Controles mais elegantes */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30"
        >
          →
        </button>

        {/* Indicadores mais elegantes */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Seção Tipos de Vidro - Nova seção destacada */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-6">Tipos de Vidro</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Conheça nossa linha completa de vidros especializados para cada necessidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {glassTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 ${type.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {type.icon}
                </div>
                <h3 className="text-2xl font-light text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {type.name}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Serviços - Design mais clean */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-gray-800 mb-6">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Soluções completas em vidros e esquadrias de alumínio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={`/servicos/${service.id}`}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-2xl">{service.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/servicos"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-light transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Ver Todos os Serviços
              <ArrowRight className="ml-3" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Diferenciais - Design mais fluido */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-gray-800 mb-6">Por que escolher a Vidraçaria Liderança?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Mais de uma década de experiência e milhares de clientes satisfeitos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-light text-gray-800 mb-4">Experiência no Mercado</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Mais de 10 anos atendendo clientes com excelência e qualidade comprovada.
              </p>
            </div>

            <div className="text-center p-8 group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-light text-gray-800 mb-4">Equipe Especializada</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Profissionais qualificados e experientes para garantir o melhor resultado.
              </p>
            </div>

            <div className="text-center p-8 group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-light text-gray-800 mb-4">Materiais de Qualidade</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Utilizamos apenas materiais premium de fornecedores reconhecidos no mercado.
              </p>
            </div>

            <div className="text-center p-8 group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-light text-gray-800 mb-4">Atendimento Personalizado</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Cada projeto é único e recebe nossa atenção especial do início ao fim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Parceiros - Design mais clean */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-gray-800 mb-6">Nossos Parceiros</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Trabalhamos com as melhores marcas do mercado para garantir qualidade superior
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-red-200"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/parceiros"
              className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-10 py-4 rounded-full font-light transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Conheça Todos os Parceiros
              <ArrowRight className="ml-3" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Design mais fluido */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-light text-white mb-8">
            Pronto para seu Projeto?
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Entre em contato conosco e receba um orçamento personalizado para seu projeto. 
            Nossa equipe está pronta para transformar suas ideias em realidade!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contato"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full font-light hover:bg-white/20 transition-all duration-300 border border-white/30 hover:scale-105"
            >
              <Mail className="mr-3" size={20} />
              Solicitar Orçamento
            </Link>
            <a
              href="https://wa.me/5544984152049"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-light transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="mr-3" size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

