import React from 'react';
import Label from '../../atoms/Label';
import TechIcon from '../../atoms/TechIcon';

const About = () => {
  const techCategories = [
    {
      title: "UI / UX",
      technologies: [
        { name: "Figma" },
        { name: "Material Design" },
        { name: "Canva" },
        { name: "AI Art" }
      ]
    },
    {
      title: "Frontend",
      technologies: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Vue.js" },
        { name: "Tailwind CSS" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Flutter" },
        { name: "Dart" }
      ]
    },
    {
      title: "Backend / DevOps",
      technologies: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Python" },
        { name: "MongoDB" },
        { name: "CI / CD" },
        { name: "Netlify" },
        { name: "MySQL" },
        { name: "SQL" },
        { name: "Azure DevOps" },
        { name: "Java" }
      ]
    }
  ];

  const softSkills = [
    "Agile Methodology",
    "Scrum",
    "Team Communication",
    "Collaboration",
    "Problem Solving"
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <Label 
            variant="white" 
            size="4xl" 
            className="font-bold mb-4 block relative inline-block"
          >
            Sobre Nosotros
            <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-400"></div>
          </Label>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Texto descriptivo */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <Label 
              variant="white" 
              size="2xl" 
              className="font-semibold mb-6 block"
            >
              Creativa Soft-IA
            </Label>
            <Label 
              variant="secondary" 
              size="base" 
              className="leading-relaxed mb-4 block"
            >
              Somos un equipo apasionado de desarrolladores, diseñadores y expertos en IA dedicados a crear soluciones digitales innovadoras. Con años de experiencia en la industria, hemos ayudado a numerosas empresas a transformar sus operaciones y alcanzar nuevos niveles de éxito.
            </Label>
            <Label 
              variant="secondary" 
              size="base" 
              className="leading-relaxed block"
            >
              Nuestra misión es bridar el gap entre la tecnología avanzada y las necesidades empresariales reales, ofreciendo soluciones que no solo son potentes, sino también intuitivas y fáciles de usar.
            </Label>
          </div>

          {/* Imagen o elemento visual */}
          <div className="bg-gray-900 p-8 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl font-bold">CS</span>
              </div>
              <Label 
                variant="white" 
                size="lg" 
                className="font-semibold block"
              >
                Equipo Experto
              </Label>
              <Label 
                variant="secondary" 
                size="base" 
                className="block"
              >
                +10 años de experiencia combinada
              </Label>
            </div>
          </div>
        </div>

        {/* Sección de tecnologías */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Label 
              variant="white" 
              size="4xl" 
              className="font-bold mb-4 block relative inline-block"
            >
              Tecnologías y habilidades del equipo
              <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-400"></div>
            </Label>
            <Label 
              variant="secondary" 
              size="xl" 
              className="max-w-2xl mx-auto block"
            >
              Nuestro stack combina herramientas modernas con prácticas ágiles para lanzar productos con rapidez y calidad.
            </Label>
          </div>

          {/* Grid de tecnologías */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl">
                <Label 
                  variant="white" 
                  size="lg" 
                  className="font-semibold mb-6 block text-center"
                >
                  {category.title}
                </Label>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="bg-gray-800 px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors"
                    >
                      <TechIcon 
                        techName={tech.name} 
                        className="text-teal-400 text-lg" 
                      />
                      <Label 
                        variant="white" 
                        size="sm" 
                        className="font-medium"
                      >
                        {tech.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Soft Skills */}
        <div>
          <div className="text-center mb-12">
            <Label 
              variant="white" 
              size="4xl" 
              className="font-bold mb-4 block relative inline-block"
            >
              Soft Skills
              <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-400"></div>
            </Label>
            <Label 
              variant="secondary" 
              size="xl" 
              className="max-w-2xl mx-auto block"
            >
              Habilidades interpersonales y metodologías que nos permiten trabajar eficientemente en equipo
            </Label>
          </div>

          {/* Grid de Soft Skills */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 p-4 rounded-lg text-center hover:bg-teal-500/20 hover:border-teal-500/50 border border-gray-700 transition-all duration-300"
                >
                  <Label 
                    variant="white" 
                    size="base" 
                    className="font-medium block"
                  >
                    {skill}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
