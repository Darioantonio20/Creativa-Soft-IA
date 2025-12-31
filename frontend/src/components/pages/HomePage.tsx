import React from 'react';
import { MainLayout } from '../templates';
import { HeroSection, FeaturesGrid } from '../organisms';
import { LeadForm } from '../organisms/LeadForm';
import { Section, AboutCard } from '../molecules';
import { BackgroundPattern, Text } from '../atoms';
import information from '../data/information.json';

type NavLink = {
  label: string;
  href: string;
};

const HomePage: React.FC = () => {
  const navbarLinks: NavLink[] = [
    { label: 'Inicio', href: '#home' },
    { label: 'Características', href: '#features' },
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'Contacto', href: '#contact' },
    { label: 'Oportunidades', href: '/oportunidades' },
    { label: 'Blog', href: '/blog' },
  ];

  const { features: featureData, about, footer } = information;

  const handleFeatureClick = (index: number) => {
    // TODO: Implement feature detail navigation or modal
    // For now, this is a placeholder for future feature interaction
  };

  return (
    <MainLayout navbarLinks={navbarLinks} footerLinks={footer.quickLinks}>
      {/* Animated Background Pattern */}
      <BackgroundPattern variant="hero" />

      {/* Hero Section */}
      <HeroSection
        onPrimaryClick={() => console.log('Primary button clicked')}
        onSecondaryClick={() => console.log('Secondary button clicked')}
      />

      {/* Features Section */}
      <Section
        title={featureData.title}
        subtitle={featureData.subtitle}
        id="features"
      >
        <FeaturesGrid features={featureData.items} onFeatureClick={handleFeatureClick} />
      </Section>

      {/* About Section */}
      <Section
        title={about.title}
        id="about"
        showDivider={true}
      >
        <div className="max-w-4xl mx-auto">
          <AboutCard>
            {about.content.map((paragraph: string, index: number) => (
              <div 
                key={index} 
                className={`animate-slide-up${index > 0 ? ' mt-6' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Text variant="p" color="gray" className="text-lg leading-relaxed">
                  {paragraph}
                </Text>
              </div>
            ))}
          </AboutCard>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section id="contact" className="py-16 md:py-24 bg-navy-900/50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <Text variant="h2" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contáctanos
            </Text>
            <Text variant="p" className="text-lg text-gray-300 max-w-2xl mx-auto">
              ¿Listo para llevar tu negocio al siguiente nivel? Déjanos tus datos y nos pondremos en contacto contigo.
            </Text>
          </div>
          
          <LeadForm />
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 to-navy-950/90"></div>
          <div className="absolute inset-0 opacity-10">
            <BackgroundPattern />
          </div>
        </div>
      </Section>
    </MainLayout>
  );
};

export default HomePage;
