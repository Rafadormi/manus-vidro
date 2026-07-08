import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'esquadrias-aluminio',
      name: 'Esquadrias de Alumínio',
      description: 'Janelas, portas e estruturas em alumínio de alta qualidade com design moderno e funcionalidade superior.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Janelas de Correr', 'Janelas Basculantes', 'Portas de Alumínio', 'Estruturas Personalizadas']
    },
    {
      id: 'box-banheiro',
      name: 'Box para Banheiro',
      description: 'Boxes personalizados com vidro temperado e acabamento premium para seu banheiro.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Box de Canto', 'Box Frontal', 'Box Articulado', 'Vidro Temperado']
    },
    {
      id: 'envidracamento-reiki',
      name: 'Envidraçamento Reiki',
      description: 'Fechamento de sacadas e varandas com sistema Reiki, proporcionando proteção e conforto.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Sistema Reiki', 'Vidro Laminado', 'Fechamento Total', 'Proteção UV']
    },
    {
      id: 'fachadas-vidro',
      name: 'Fachadas de Vidro',
      description: 'Fachadas modernas e elegantes que valorizam a arquitetura do seu projeto.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Fachada Cortina', 'Vidro Refletivo', 'Estrutura Metálica', 'Design Personalizado']
    },
    {
      id: 'espelhos-decorativos',
      name: 'Espelhos Decorativos',
      description: 'Espelhos sob medida para decoração e funcionalidade em diversos ambientes.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Espelhos Bisotados', 'Espelhos Coloridos', 'Formas Personalizadas', 'Instalação Profissional']
    },
    {
      id: 'guarda-corpos',
      name: 'Guarda-Corpos',
      description: 'Proteção e elegância para escadas, sacadas e mezaninos com design moderno.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Vidro Temperado', 'Estrutura em Inox', 'Design Minimalista', 'Segurança Garantida']
    },
    {
      id: 'portas-vidro',
      name: 'Portas de Vidro',
      description: 'Portas de vidro temperado para ambientes modernos e sofisticados.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Porta de Abrir', 'Porta de Correr', 'Vidro Temperado', 'Ferragens Premium']
    },
    {
      id: 'manutencao-reparos',
      name: 'Manutenção e Reparos',
      description: 'Serviços especializados de manutenção e reparo para seus vidros e esquadrias.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Troca de Vidros', 'Ajuste de Ferragens', 'Vedação', 'Manutenção Preventiva']
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Nossos Serviços</h1>
            <p className="text-xl md:text-2xl">Soluções completas em vidros e esquadrias</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Conheça Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de serviços especializados em vidros e esquadrias de alumínio, 
              sempre com a qualidade e o profissionalismo que você merece.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Principais características:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={`/servicos/${service.id}`}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors duration-200"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Precisa de um Orçamento?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado para seu projeto. 
            Nossa equipe está pronta para atendê-lo!
          </p>
          <Link
            to="/contato"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

