import React from 'react';
import Label from '../../atoms/Label';
import Button from '../../atoms/Button';

const Opportunities = () => {
  const opportunities = [
    {
      title: "Desarrollador Frontend Senior",
      type: "Tiempo Completo",
      location: "Remoto",
      description: "Buscamos un desarrollador frontend experimentado con React, TypeScript y Tailwind CSS para liderar nuestros proyectos de interfaz de usuario.",
      requirements: [
        "5+ años de experiencia con React",
        "Dominio de TypeScript",
        "Experiencia con Tailwind CSS",
        "Conocimientos de UI/UX"
      ]
    },
    {
      title: "Especialista en Machine Learning",
      type: "Tiempo Completo",
      location: "Híbrido",
      description: "Únete a nuestro equipo de IA para desarrollar soluciones de machine learning innovadoras que impacten negocios.",
      requirements: [
        "Experiencia con Python y TensorFlow",
        "Conocimientos de Deep Learning",
        "Background en matemáticas aplicadas",
        "Inglés avanzado"
      ]
    },
    {
      title: "Diseñador UX/UI",
      type: "Medio Tiempo",
      location: "Remoto",
      description: "Buscamos un diseñador creativo apasionado por crear experiencias de usuario excepcionales para productos digitales.",
      requirements: [
        "Portafolio sólido",
        "Dominio de Figma y Adobe XD",
        "Conocimientos de diseño responsivo",
        "Experiencia con metodologías ágiles"
      ]
    }
  ];

  return (
    <section id="oportunidades" className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Label 
              variant="white" 
              size="5xl" 
              className="font-bold mb-6 block"
            >
              Únete a Nuestro Equipo
            </Label>
            <Label 
              variant="secondary" 
              size="2xl" 
              className="max-w-3xl mx-auto block leading-relaxed"
            >
              Descubre oportunidades profesionales donde podrás crecer, innovar y hacer una diferencia real en el mundo de la tecnología.
            </Label>
          </div>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-[1.02]">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <Label 
                      variant="white" 
                      size="2xl" 
                      className="font-bold block mb-2"
                    >
                      {opportunity.title}
                    </Label>
                    <div className="flex gap-3">
                      <span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-medium">
                        {opportunity.type}
                      </span>
                      <span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-medium">
                        {opportunity.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="mb-6">
                  <Label 
                    variant="secondary" 
                    size="base" 
                    className="leading-relaxed block"
                  >
                    {opportunity.description}
                  </Label>
                </div>

                <div className="mb-6">
                  <Label 
                    variant="white" 
                    size="lg" 
                    className="font-semibold mb-4 block"
                  >
                    Requisitos clave:
                  </Label>
                  <ul className="space-y-3">
                    {opportunity.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <Label 
                          variant="secondary" 
                          size="base" 
                          className="leading-relaxed"
                        >
                          {req}
                        </Label>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  href="#contacto"
                  variant="primary"
                  size="lg"
                  className="w-full py-3"
                >
                  Postular a esta posición
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <Label 
              variant="white" 
              size="3xl" 
              className="font-bold mb-4 block"
            >
              ¿No encuentras tu rol ideal?
            </Label>
            <Label 
              variant="secondary" 
              size="xl" 
              className="mb-8 block max-w-2xl mx-auto"
            >
              Nos encantaría conocerte. Envíanos tu perfil y cuéntanos cómo puedes contribuir a nuestro equipo.
            </Label>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="#contacto"
                variant="primary"
                size="lg"
                className="px-8"
              >
                Contactar RRHH
              </Button>
              <Button 
                href="#contacto"
                variant="secondary"
                size="lg"
                className="px-8"
              >
                Envíanos tu CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
