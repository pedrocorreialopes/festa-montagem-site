import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Pegue e Monte</h3>
            <p>Transformando suas festas em momentos inesquecíveis.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contato</h4>
            <p>Email: contato@pegueemonte.com</p>
            <p>Telefone: (11) 1234-5678</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Pegue e Monte. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;