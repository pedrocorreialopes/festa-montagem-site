import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const FaleConosco = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Fale Conosco
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Informações de Contato</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <MapPin className="mr-2 text-blue-500" />
              <span>Rua das Festas, 123 - São Paulo, SP</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 text-blue-500" />
              <span>(11) 1234-5678</span>
            </li>
            <li className="flex items-center">
              <Mail className="mr-2 text-blue-500" />
              <span>contato@pegueemonte.com</span>
            </li>
          </ul>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Horário de Atendimento</h2>
          <ul className="space-y-2">
            <li>Segunda a Sexta: 9h às 18h</li>
            <li>Sábado: 9h às 13h</li>
            <li>Domingo: Fechado</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default FaleConosco;