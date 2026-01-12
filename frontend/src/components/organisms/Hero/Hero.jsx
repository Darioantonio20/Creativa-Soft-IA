import React from 'react';
import Label from '../../atoms/Label';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con patrón sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNTkgNDFIMXYxOGg1OHYtMTh6TTEgMWg1OHYzOEgxVjF6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]" />
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-400 rounded-full opacity-20 blur-xl"></div>
            <div className="relative bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-2xl">
              <Logo size="xl" />
            </div>
          </div>
        </div>

        {/* Título */}
        <h1 className="mb-6">
          <Label variant="white" size="6xl" className="block font-extrabold tracking-tight">
            CREATIVA
          </Label>
          <Label variant="primary" size="6xl" className="block font-extrabold tracking-tight">
            SOFT-IA
          </Label>
        </h1>

        {/* Subtítulo */}
        <Label variant="default" size="xl" className="max-w-2xl mx-auto mb-12 block">
          Diseñando y desarrollando soluciones digitales inteligentes que ayudan a las organizaciones a innovar y escalar
        </Label>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            href="#contacto" 
            variant="primary" 
            size="lg"
          >
            Comenzar Proyecto
          </Button>
          <Button 
            href="#servicios" 
            variant="secondary" 
            size="lg"
          >
            Ver Servicios
          </Button>
        </div>
      </div>

      {/* Efecto de partículas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-teal-400/20"
            style={{
              width: Math.random() * 10 + 2 + 'px',
              height: Math.random() * 10 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 5 + 5}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Estilos para la animación de partículas */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
