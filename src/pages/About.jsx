import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-12 h-12 text-red-600" />,
      title: "Qualidade",
      description: "Utilizamos apenas materiais de primeira linha e técnicas avançadas para garantir a durabilidade e beleza de nossos produtos."
    },
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: "Atendimento",
      description: "Nossa equipe está sempre pronta para oferecer o melhor atendimento, desde o primeiro contato até a finalização do projeto."
    },
    {
      icon: <Target className="w-12 h-12 text-red-600" />,
      title: "Precisão",
      description: "Cada projeto é executado com máxima precisão, respeitando prazos e especificações técnicas rigorosas."
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Confiança",
      description: "Construímos relacionamentos duradouros baseados na transparência, honestidade e compromisso com nossos clientes."
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Sobre Nós</h1>
            <p className="text-xl md:text-2xl">Conheça nossa história e valores</p>
          </div>
        </div>
      </section>

      {/* História da Empresa */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Nossa História</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Equipe Vidraçaria Liderança"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A <strong>Vidraçaria Liderança</strong> nasceu da paixão por transformar ambientes através do vidro e do alumínio. 
                  Fundada em Umuarama, nossa empresa se consolidou como referência na região, oferecendo soluções inovadoras 
                  e personalizadas para projetos residenciais e comerciais.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Com anos de experiência no mercado, desenvolvemos expertise em todas as áreas do setor vidreiro, 
                  desde esquadrias de alumínio até fachadas complexas. Nossa equipe é formada por profissionais 
                  qualificados e comprometidos com a excelência em cada projeto.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Trabalhamos com as melhores marcas do mercado e investimos constantemente em tecnologia e 
                  capacitação para oferecer sempre o que há de mais moderno e eficiente em vidros e esquadrias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Missão */}
              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Oferecer soluções completas em vidros e esquadrias de alumínio, 
                  superando expectativas através da qualidade, inovação e atendimento personalizado.
                </p>
              </div>

              {/* Visão */}
              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser reconhecida como a principal referência em vidros e esquadrias na região, 
                  expandindo nossa atuação e mantendo a excelência em todos os serviços.
                </p>
              </div>

              {/* Valores */}
              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Valores</h3>
                <p className="text-gray-600 leading-relaxed">
                  Qualidade, transparência, inovação, compromisso com prazos e 
                  relacionamentos duradouros baseados na confiança mútua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Nossos Diferenciais</h2>
              <p className="text-xl text-gray-600">O que nos torna únicos no mercado</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors duration-200">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
            Pronto para Transformar seu Projeto?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar a realizar seus sonhos 
            com qualidade e profissionalismo.
          </p>
          <a
            href="/contato"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

