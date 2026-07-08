import { Award, Shield, Truck, Users } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: 'Blindex',
      logo: 'https://via.placeholder.com/200x100/e53e3e/ffffff?text=BLINDEX',
      description: 'Líder mundial em vidros temperados e laminados, oferecendo produtos de alta qualidade e tecnologia avançada.',
      category: 'Vidros'
    },
    {
      name: 'Reiki',
      logo: 'https://via.placeholder.com/200x100/38a169/ffffff?text=REIKI',
      description: 'Especialista em sistemas de envidraçamento para sacadas, proporcionando conforto e proteção.',
      category: 'Sistemas'
    },
    {
      name: 'Udinese',
      logo: 'https://via.placeholder.com/200x100/3182ce/ffffff?text=UDINESE',
      description: 'Referência em perfis de alumínio com design moderno e alta resistência.',
      category: 'Alumínio'
    },
    {
      name: 'ALCOA',
      logo: 'https://via.placeholder.com/200x100/805ad5/ffffff?text=ALCOA',
      description: 'Maior produtora mundial de alumínio, garantindo matéria-prima de excelência.',
      category: 'Alumínio'
    },
    {
      name: 'Cristalsete',
      logo: 'https://via.placeholder.com/200x100/dd6b20/ffffff?text=CRISTALSETE',
      description: 'Especializada em vidros especiais e soluções personalizadas para projetos únicos.',
      category: 'Vidros'
    },
    {
      name: 'Moldurarte',
      logo: 'https://via.placeholder.com/200x100/e53e3e/ffffff?text=MOLDURARTE',
      description: 'Fornecedora de ferragens e acessórios premium para esquadrias de alumínio.',
      category: 'Ferragens'
    },
    {
      name: 'Perfil',
      logo: 'https://via.placeholder.com/200x100/38a169/ffffff?text=PERFIL',
      description: 'Especialista em perfis de alumínio para diversas aplicações arquitetônicas.',
      category: 'Alumínio'
    },
    {
      name: 'Guardian Glass',
      logo: 'https://via.placeholder.com/200x100/3182ce/ffffff?text=GUARDIAN',
      description: 'Líder global em vidros de alta performance para construção civil.',
      category: 'Vidros'
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-12 h-12 text-red-600" />,
      title: "Qualidade Garantida",
      description: "Trabalhamos apenas com fornecedores certificados e reconhecidos no mercado nacional e internacional."
    },
    {
      icon: <Shield className="w-12 h-12 text-red-600" />,
      title: "Produtos Certificados",
      description: "Todos os materiais possuem certificações de qualidade e atendem às normas técnicas brasileiras."
    },
    {
      icon: <Truck className="w-12 h-12 text-red-600" />,
      title: "Logística Eficiente",
      description: "Parcerias estratégicas garantem entregas rápidas e produtos sempre disponíveis."
    },
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: "Suporte Técnico",
      description: "Nossos parceiros oferecem suporte técnico especializado para projetos complexos."
    }
  ];

  const categories = ['Todos', 'Vidros', 'Alumínio', 'Sistemas', 'Ferragens'];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Nossos Parceiros</h1>
            <p className="text-xl md:text-2xl">Trabalhamos com as melhores marcas do mercado</p>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">A Importância dos Nossos Parceiros</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Na <strong>Vidraçaria Liderança</strong>, acreditamos que a qualidade do produto final está diretamente 
              relacionada à qualidade dos materiais utilizados. Por isso, estabelecemos parcerias estratégicas 
              com os principais fornecedores do mercado nacional e internacional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossos parceiros são cuidadosamente selecionados com base em critérios rigorosos de qualidade, 
              inovação, sustentabilidade e confiabilidade. Essa seleção criteriosa nos permite oferecer aos 
              nossos clientes produtos de excelência que atendem aos mais altos padrões de qualidade e durabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios das Parcerias */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefícios das Nossas Parcerias</h2>
              <p className="text-xl text-gray-600">Como nossas parcerias beneficiam nossos clientes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-red-50 rounded-full">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Parceiros */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Conheça Nossos Parceiros</h2>
              <p className="text-xl text-gray-600">Marcas de confiança que garantem a qualidade dos nossos serviços</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                  <div className="mb-4 flex justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-16 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{partner.name}</h3>
                  <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {partner.category}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificações e Qualidade */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Certificações e Qualidade</h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Todos os nossos parceiros possuem certificações internacionais de qualidade, 
              garantindo que cada produto utilizado em nossos projetos atenda aos mais rigorosos 
              padrões de segurança e durabilidade.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">ISO 9001</div>
                <div className="text-red-100">Gestão da Qualidade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">ABNT NBR</div>
                <div className="text-red-100">Normas Brasileiras</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">INMETRO</div>
                <div className="text-red-100">Certificação Nacional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inovação e Tecnologia */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Inovação e Tecnologia</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nossos parceiros estão sempre na vanguarda da tecnologia, desenvolvendo produtos 
                  inovadores que atendem às demandas da arquitetura moderna. Isso nos permite 
                  oferecer soluções diferenciadas e de alta performance.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Investimos constantemente em capacitação e atualização técnica para trabalhar 
                  com os produtos mais avançados do mercado, garantindo que nossos clientes 
                  tenham acesso às melhores tecnologias disponíveis.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Vidros de alta performance energética
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Perfis de alumínio com isolamento térmico
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Ferragens inteligentes e automatizadas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Sistemas sustentáveis e ecológicos
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tecnologia e Inovação"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Qualidade que Você Pode Confiar
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Com parceiros de excelência e materiais de primeira qualidade, 
            garantimos que seu projeto será executado com o mais alto padrão.
          </p>
          <a
            href="/contato"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
          >
            Solicite seu Orçamento
          </a>
        </div>
      </section>
    </div>
  );
};

export default Partners;

