import { Phone, MapPin, Mail, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/logo_vidra_sem_fundo_semfundo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Informações da Empresa */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Vidraçaria Liderança" 
              className="h-16 w-auto filter brightness-0 invert"
            />
            <p className="text-gray-300">
              Vidros e Esquadrias de Alumínio com qualidade e tradição em Umuarama.
            </p>
          </div>

          {/* Contatos */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-red-500">Contatos</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-red-500" />
                <span>(44) 98415-2049 - Diego</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-red-500" />
                <span>(44) 98456-4529 - Jonathan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-red-500" />
                <span>contato@vidracarialideranca.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-red-500" />
                <span>Rua Toshie Nishiyama Sucupira, 3947 - Umuarama - PR</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-red-500">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-red-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-red-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Vidraçaria Liderança. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

