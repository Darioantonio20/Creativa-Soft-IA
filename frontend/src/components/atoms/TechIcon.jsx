import React from 'react';
import {
  FaFigma,
  FaGoogle,
  FaRobot,
  FaReact,
  FaVuejs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaCloud,
  FaCode,
  FaPaintBrush,
  FaPalette,
  FaPencilRuler,
  FaSketch
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFlutter,
  SiDart,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiMaterialdesign,
  SiAdobexd,
  SiFramer,
  SiJavascript
} from 'react-icons/si';

const TechIcon = ({ techName, className = '' }) => {
  const iconMap = {
    // UI/UX
    'Figma': <FaFigma className={className} />,
    'Material Design': <SiMaterialdesign className={className} />,
    'Canva': <FaPalette className={className} />,
    'AI Art': <FaRobot className={className} />,
    
    // Frontend
    'React': <FaReact className={className} />,
    'Next.js': <SiNextdotjs className={className} />,
    'Vue.js': <FaVuejs className={className} />,
    'Tailwind CSS': <SiTailwindcss className={className} />,
    'TypeScript': <SiTypescript className={className} />,
    'JavaScript': <SiJavascript className={className} />,
    'HTML5': <FaHtml5 className={className} />,
    'CSS3': <FaCss3Alt className={className} />,
    'Flutter': <SiFlutter className={className} />,
    'Dart': <SiDart className={className} />,
    
    // Backend/DevOps
    'Node.js': <FaNodeJs className={className} />,
    'Express.js': <SiExpress className={className} />,
    'Python': <FaPython className={className} />,
    'MongoDB': <SiMongodb className={className} />,
    'CI / CD': <FaGitAlt className={className} />,
    'Netlify': <SiNetlify className={className} />,
    'MySQL': <SiMysql className={className} />,
    'SQL': <FaDatabase className={className} />,
    'Azure DevOps': <FaCloud className={className} />,
    'Java': <FaJava className={className} />,
    'Docker': <FaDocker className={className} />,
    'AWS': <FaAws className={className} />
  };

  const defaultIcon = <FaCode className={className} />;

  return iconMap[techName] || defaultIcon;
};

export default TechIcon;
