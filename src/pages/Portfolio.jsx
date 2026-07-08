import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', name: 'Todos' },
    { id: 'residencial', name: 'Residencial' },
    { id: 'comercial', name: 'Comercial' },
    { id: 'sacadas', name: 'Sacadas' },
    { id: 'banheiros', name: 'Banheiros' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Residência Moderna',
      category: 'residencial',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Esquadrias de alumínio com vidro temperado'
    },
    {
      id: 2,
      title: 'Edifício Comercial',
      category: 'comercial',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Fachada de vidro estrutural'
    },
    {
      id: 3,
      title: 'Sacada Envidraçada',
      category: 'sacadas',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Sistema Reiki para fechamento de sacada'
    },
    {
      id: 4,
      title: 'Box Premium',
      category: 'banheiros',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Box de canto com vidro temperado'
    },
    {
      id: 5,
      title: 'Casa de Alto Padrão',
      category: 'residencial',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Portas e janelas de alumínio premium'
    },
    {
      id: 6,
      title: 'Loja Conceito',
      category: 'comercial',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Vitrine em vidro temperado'
    },
    {
      id: 7,
      title: 'Varanda Gourmet',
      category: 'sacadas',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Envidraçamento com abertura total'
    },
    {
      id: 8,
      title: 'Banheiro Luxo',
      category: 'banheiros',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Box articulado com acabamento premium'
    },
    {
      id: 9,
      title: 'Apartamento Moderno',
      category: 'residencial',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Guarda-corpo em vidro temperado'
    },
    {
      id: 10,
      title: 'Centro Empresarial',
      category: 'comercial',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Fachada cortina completa'
    },
    {
      id: 11,
      title: 'Terraço Residencial',
      category: 'sacadas',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Fechamento com vidro laminado'
    },
    {
      id: 12,
      title: 'Suíte Master',
      category: 'banheiros',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Box frontal com porta de correr'
    }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Portfólio</h1>
            <p className="text-xl md:text-2xl">Conheça nossos trabalhos realizados</p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Trabalhos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada projeto é único e desenvolvido com atenção aos detalhes, 
                utilizando materiais de primeira qualidade e técnicas avançadas.
              </p>
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>

            {/* Grid de Projetos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {filters.find(f => f.id === project.category)?.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mensagem quando não há projetos */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  Nenhum projeto encontrado para esta categoria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-red-600">500+</div>
                <div className="text-gray-600">Projetos Realizados</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-red-600">15+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-red-600">100%</div>
                <div className="text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-red-600">24h</div>
                <div className="text-gray-600">Atendimento Rápido</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Gostou do Nosso Trabalho?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e transforme seu projeto em realidade com a qualidade 
            e o profissionalismo da Vidraçaria Liderança.
          </p>
          <a
            href="/contato"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

