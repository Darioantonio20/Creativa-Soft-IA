import React from 'react';
import { MainLayout } from '../templates';
import { BackgroundPattern, Button, Text } from '../atoms';
import { Section } from '../molecules';
import information from '../data/information.json';

const CareersPage: React.FC = () => {
  const navbarLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Características', href: '/#features' },
    { label: 'Sobre Nosotros', href: '/#about' },
    { label: 'Contacto', href: '/#contact' },
    { label: 'Oportunidades', href: '/oportunidades' },
  ];

  const { careers, footer } = information;

  return (
    <MainLayout navbarLinks={navbarLinks} footerLinks={footer.quickLinks}>
      <section className="relative overflow-hidden bg-navy-950 text-white pt-32 pb-20">
        <BackgroundPattern variant="hero" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Text variant="span" className="text-brand-300 tracking-[0.3em] uppercase text-sm font-semibold">
              Talento Creativa Soft-IA
            </Text>
            <Text variant="h1" className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              {careers.title}
            </Text>
            <Text variant="p" className="text-lg text-gray-300 mb-4">
              {careers.subtitle}
            </Text>
            <Text variant="p" className="text-gray-400">
              {careers.description}
            </Text>
          </div>
        </div>
      </section>

      <Section
        title="Posiciones abiertas"
        subtitle="Explora roles clave en tecnología, diseño y estrategia."
        className="bg-navy-900/30"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {careers.positions.map(position => (
            <div
              key={position.id}
              className="bg-navy-900/60 border border-brand-500/10 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <Text variant="h3" className="text-2xl font-semibold text-white">
                  {position.title}
                </Text>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-brand-500/20 text-brand-200">
                  {position.type}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-2">{position.location}</p>
              <p className="text-gray-300 mb-4">{position.summary}</p>

              <div>
                <Text variant="span" className="text-xs text-brand-300 tracking-[0.25em] uppercase mb-2 font-semibold">
                  Requisitos clave
                </Text>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {position.requirements.map(requirement => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Beneficios" className="bg-navy-950/60 backdrop-blur">
        <div className="grid md:grid-cols-2 gap-6">
          {careers.benefits.map(benefit => (
            <div
              key={benefit}
              className="p-5 bg-navy-900/40 border border-brand-500/10 rounded-xl text-white flex items-start space-x-4"
            >
              <div className="w-2 h-2 rounded-full bg-brand-400 mt-2" />
              <p className="text-gray-200">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 bg-brand-500/10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Text variant="h2" className="text-3xl font-bold text-white">
            {careers.cta.title}
          </Text>
          <Text variant="p" className="text-gray-200">
            {careers.cta.description}
          </Text>
          <Button
            variant="primary"
            className="mt-6"
            onClick={() => window.open('mailto:talento@creativasoft-ia.com', '_blank')}
          >
            {careers.cta.button}
          </Button>
        </div>
      </Section>
    </MainLayout>
  );
};

export default CareersPage;
