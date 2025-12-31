import React, { useState } from 'react';
import { MainLayout } from '../templates';
import { BackgroundPattern, Button, Text, Input } from '../atoms';
import { Section } from '../molecules';
import information from '../data/information.json';

const CAREERS_ENDPOINT =
  process.env.REACT_APP_CAREERS_ENDPOINT || 'https://httpbin.org/post';

const CareersPage: React.FC = () => {
  const navbarLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Características', href: '/#features' },
    { label: 'Sobre Nosotros', href: '/#about' },
    { label: 'Contacto', href: '/#contact' },
    { label: 'Oportunidades', href: '/oportunidades' },
  ];

  const { careers, footer } = information;

  const [cvForm, setCvForm] = useState({
    fullName: '',
    email: '',
    roleInterest: '',
    cvLink: '',
    message: '',
  });
  const [cvSubmitting, setCvSubmitting] = useState(false);
  const [cvSuccess, setCvSuccess] = useState(false);
  const [cvError, setCvError] = useState<string | null>(null);

  const handleCvChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCvForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCvSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCvSubmitting(true);
    setCvError(null);

    try {
      const response = await fetch(CAREERS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cvForm),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      setCvSuccess(true);
      setCvForm({
        fullName: '',
        email: '',
        roleInterest: '',
        cvLink: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending CV:', error);
      setCvError('No pudimos enviar tu CV. Intenta nuevamente más tarde.');
    } finally {
      setCvSubmitting(false);
    }
  };

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
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-4">
            <Text variant="h2" className="text-3xl font-bold text-white">
              {careers.cta.title}
            </Text>
            <Text variant="p" className="text-gray-200">
              {careers.cta.description}
            </Text>
          </div>

          <form
            onSubmit={handleCvSubmit}
            className="bg-navy-900/50 border border-white/5 rounded-3xl p-6 space-y-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="Nombre completo"
                name="fullName"
                value={cvForm.fullName}
                onChange={handleCvChange as React.ChangeEventHandler<HTMLInputElement>}
                required
                placeholder="Tu nombre y apellidos"
              />
              <Input
                label="Correo"
                name="email"
                type="email"
                value={cvForm.email}
                onChange={handleCvChange as React.ChangeEventHandler<HTMLInputElement>}
                required
                placeholder="tuemail@ejemplo.com"
              />
              <Input
                label="Rol de interés"
                name="roleInterest"
                value={cvForm.roleInterest}
                onChange={handleCvChange as React.ChangeEventHandler<HTMLInputElement>}
                placeholder="Ej. Fullstack TS, UX Research"
              />
              <Input
                label="Link de CV / Portafolio"
                name="cvLink"
                value={cvForm.cvLink}
                onChange={handleCvChange as React.ChangeEventHandler<HTMLInputElement>}
                placeholder="https://tu-cv.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Cuéntanos sobre ti
              </label>
              <textarea
                name="message"
                rows={4}
                value={cvForm.message}
                onChange={handleCvChange}
                className="w-full px-4 py-3 bg-navy-800/70 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="Experiencia, logros o tecnologías que dominas."
              />
            </div>
            <div className="space-y-2">
              <Button type="submit" disabled={cvSubmitting} className="w-full md:w-auto">
                {cvSubmitting ? 'Enviando CV...' : careers.cta.button}
              </Button>
              {cvError && <p className="text-sm text-red-300">{cvError}</p>}
              {cvSuccess && (
                <p className="text-sm text-green-300">
                  ¡Gracias! Revisaremos tu perfil y te contactaremos pronto.
                </p>
              )}
            </div>
          </form>
        </div>
      </Section>
    </MainLayout>
  );
};

export default CareersPage;
