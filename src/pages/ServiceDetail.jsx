import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const servicesData = {
    'esquadrias-aluminio': {
      name: 'Esquadrias de Alumínio',
      banner: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80',
      description: 'Nossas esquadrias de alumínio combinam design moderno, funcionalidade superior e durabilidade excepcional. Utilizamos perfis de alta qualidade e técnicas avançadas de fabricação para garantir produtos que atendem às mais rigorosas exigências técnicas e estéticas.',
      features: [
        'Perfis de alumínio de alta qualidade',
        'Vidros temperados e laminados',
        'Ferragens importadas de primeira linha',
        'Acabamento em diversas cores',
        'Isolamento térmico e acústico',
        'Garantia de qualidade'
      ],
      models: [
        {
          name: 'Janelas de Correr',
          description: 'Ideais para ambientes que precisam de praticidade e economia de espaço.',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Janelas Basculantes',
          description: 'Perfeitas para ventilação controlada e segurança.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Portas de Alumínio',
          description: 'Resistentes e elegantes para entrada principal ou áreas de serviço.',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ]
    },
    'box-banheiro': {
      name: 'Box para Banheiro',
      banner: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80',
      description: 'Nossos boxes para banheiro são fabricados com vidro temperado de alta qualidade e ferragens premium. Oferecemos soluções personalizadas que combinam funcionalidade, segurança e design elegante para transformar seu banheiro.',
      features: [
        'Vidro temperado 8mm de espessura',
        'Ferragens em aço inoxidável',
        'Perfis de alumínio anodizado',
        'Vedação com borrachas de qualidade',
        'Instalação profissional',
        'Garantia contra defeitos de fabricação'
      ],
      models: [
        {
          name: 'Box de Canto',
          description: 'Aproveitamento máximo do espaço com design funcional.',
          image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Box Frontal',
          description: 'Solução clássica e elegante para banheiros tradicionais.',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Box Articulado',
          description: 'Máxima praticidade com abertura diferenciada.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ]
    },
    'envidracamento-reiki': {
      name: 'Envidraçamento Reiki',
      banner: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80',
      description: 'O sistema Reiki oferece a solução perfeita para fechamento de sacadas e varandas, proporcionando proteção contra intempéries sem perder a vista e a luminosidade. Nossos envidraçamentos são projetados para máximo conforto e durabilidade.',
      features: [
        'Sistema Reiki original',
        'Vidro laminado de segurança',
        'Perfis de alumínio resistentes',
        'Proteção UV',
        'Isolamento acústico',
        'Fácil manutenção'
      ],
      models: [
        {
          name: 'Fechamento Total',
          description: 'Proteção completa com máxima transparência.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Fechamento Parcial',
          description: 'Flexibilidade para diferentes necessidades.',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Sistema Articulado',
          description: 'Abertura total para máxima ventilação.',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ]
    },
    'fachadas-vidro': {
      name: 'Fachadas de Vidro',
      banner: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80',
      description: 'Nossas fachadas de vidro transformam a arquitetura de qualquer edifício, oferecendo modernidade, elegância e eficiência energética. Utilizamos tecnologia de ponta e materiais premium para criar fachadas que impressionam e protegem.',
      features: [
        'Vidro refletivo de alta performance',
        'Estrutura metálica robusta',
        'Isolamento térmico superior',
        'Design personalizado',
        'Resistência a intempéries',
        'Manutenção simplificada'
      ],
      models: [
        {
          name: 'Fachada Cortina',
          description: 'Sistema contínuo de vidro para máximo impacto visual.',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Fachada Estrutural',
          description: 'Integração perfeita entre estrutura e vedação.',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Fachada Ventilada',
          description: 'Eficiência energética com ventilação natural.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ]
    },
    'espelhos-decorativos': {
      name: 'Espelhos Decorativos',
      banner: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80',
      description: 'Nossos espelhos decorativos são produzidos sob medida para atender às suas necessidades específicas. Combinamos técnicas tradicionais com tecnologia moderna para criar peças únicas que valorizam qualquer ambiente.',
      features: [
        'Espelhos de alta qualidade',
        'Cortes personalizados',
        'Bisotê e lapidação',
        'Espelhos coloridos disponíveis',
        'Instalação segura',
        'Acabamento perfeito'
      ],
      models: [
        {
          name: 'Espelhos Bisotados',
          description: 'Elegância clássica com acabamento refinado.',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Espelhos Coloridos',
          description: 'Modernidade e personalidade para sua decoração.',
          image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Formas Personalizadas',
          description: 'Criatividade sem limites para projetos únicos.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ]
    },
    'guarda-corpos': {
      name: 'Guarda-Corpos',
      banner: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80',
      description: 'Nossos guarda-corpos combinam segurança máxima com design minimalista. Fabricados com vidro temperado e estruturas em aço inoxidável, oferecem proteção sem comprometer a estética do ambiente.',
      features: [
        'Vidro temperado 10mm',
        'Estrutura em aço inoxidável',
        'Design minimalista',
        'Segurança certificada',
        'Resistência a intempéries',
        'Instalação profissional'
      ],
      models: [
        {
          name: 'Guarda-Corpo Linear',
          description: 'Design clean e moderno para qualquer ambiente.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Guarda-Corpo Curvo',
          description: 'Elegância e sofisticação para projetos especiais.',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Guarda-Corpo com Corrimão',
          description: 'Funcionalidade adicional com design integrado.',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ]
    },
    'portas-vidro': {
      name: 'Portas de Vidro',
      banner: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80',
      description: 'Nossas portas de vidro temperado oferecem elegância e modernidade para qualquer ambiente. Com ferragens premium e vidro de alta qualidade, proporcionam durabilidade e beleza incomparáveis.',
      features: [
        'Vidro temperado de segurança',
        'Ferragens importadas',
        'Múltiplas opções de abertura',
        'Acabamento premium',
        'Isolamento acústico',
        'Facilidade de manutenção'
      ],
      models: [
        {
          name: 'Porta de Abrir',
          description: 'Clássica e funcional para diversos ambientes.',
          image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Porta de Correr',
          description: 'Economia de espaço com design moderno.',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Porta Pivotante',
          description: 'Sofisticação e imponência para entradas principais.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ]
    },
    'manutencao-reparos': {
      name: 'Manutenção e Reparos',
      banner: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80',
      description: 'Oferecemos serviços completos de manutenção e reparo para manter seus vidros e esquadrias sempre em perfeito estado. Nossa equipe especializada garante soluções rápidas e eficientes.',
      features: [
        'Diagnóstico profissional',
        'Peças originais',
        'Técnicos especializados',
        'Atendimento rápido',
        'Garantia dos serviços',
        'Manutenção preventiva'
      ],
      models: [
        {
          name: 'Troca de Vidros',
          description: 'Substituição rápida e segura de vidros danificados.',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Ajuste de Ferragens',
          description: 'Regulagem e substituição de ferragens.',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Manutenção Preventiva',
          description: 'Cuidados regulares para maior durabilidade.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ]
    }
  };

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Serviço não encontrado</h1>
        <Link to="/servicos" className="text-red-600 hover:text-red-700">
          Voltar para Serviços
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Banner */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `url(${service.banner})`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.name}</h1>
            <Link
              to="/servicos"
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-200"
            >
              <ArrowLeft className="mr-2" size={20} />
              Voltar para Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Descrição e Características */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre o Serviço</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{service.description}</p>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Entre em Contato</h3>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/5544984152049"
                      className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-200"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      WhatsApp Diego: (44) 98415-2049
                    </a>
                    <a
                      href="https://wa.me/5544994564529"
                      className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-200"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      WhatsApp Jonathan: (44) 99456-4529
                    </a>
                    <a
                      href="tel:+5544984152049"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    >
                      <Phone className="mr-2" size={20} />
                      Telefone: (44) 98415-2049
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Características Principais</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelos/Tipos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Modelos Disponíveis</h2>
              <p className="text-xl text-gray-600">Conheça as opções que oferecemos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.models.map((model, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{model.name}</h3>
                    <p className="text-gray-600">{model.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Galeria de Trabalhos</h2>
              <p className="text-xl text-gray-600">Veja alguns de nossos projetos realizados</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.gallery.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt={`Projeto ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interessado neste Serviço?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco agora mesmo e receba um orçamento personalizado para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5544984152049"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp Diego
            </a>
            <a
              href="https://wa.me/5544994564529"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp Jonathan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

