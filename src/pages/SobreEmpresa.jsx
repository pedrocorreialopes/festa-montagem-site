import React from 'react';
import { motion } from 'framer-motion';

const SobreEmpresa = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Sobre a Pegue e Monte
      </motion.h1>
      <div className="max-w-3xl mx-auto">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg mb-6"
        >
          A Pegue e Monte é uma empresa especializada em serviços de decoração e organização de festas e eventos. Fundada em 2010, nossa missão é transformar momentos especiais em experiências inesquecíveis.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg mb-6"
        >
          Com uma equipe de profissionais altamente qualificados e criativos, oferecemos soluções personalizadas para atender às necessidades e desejos de cada cliente. Nosso compromisso com a excelência e a atenção aos detalhes nos tornou referência no mercado de eventos.
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-2xl font-semibold mb-4"
        >
          Nossos Serviços
        </motion.h2>
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="list-disc list-inside mb-6"
        >
          <li>Decoração temática para festas</li>
          <li>Montagem de cenários e ambientes</li>
          <li>Aluguel de móveis e acessórios</li>
          <li>Planejamento e organização de eventos</li>
          <li>Buffet personalizado</li>
        </motion.ul>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-lg"
        >
          Na Pegue e Monte, acreditamos que cada evento é único e merece um toque especial. Estamos prontos para tornar seu sonho realidade e criar memórias que durarão para sempre.
        </motion.p>
      </div>
    </div>
  );
};

export default SobreEmpresa;