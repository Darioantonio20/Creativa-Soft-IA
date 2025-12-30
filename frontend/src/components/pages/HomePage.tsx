import React from 'react';
import { MainLayout } from '../templates';
import { HeroSection } from '../organisms';
import { FeaturesGrid } from '../organisms';
import { Section, AboutCard } from '../molecules';
import { BackgroundPattern } from '../atoms';
import { Text } from '../atoms';

const HomePage: React.FC = () => {
  const navbarLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const footerLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to transform your business processes and decision-making.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Build applications that grow with your business using modern, cloud-native technologies.',
    },
    {
      title: 'User-Centric Design',
      description: 'Create exceptional user experiences with our design-first approach and best practices.',
    },
    {
      title: 'Real-time Analytics',
      description: 'Make data-driven decisions with comprehensive analytics and reporting tools.',
    },
    {
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability to protect your data and ensure uptime.',
    },
    {
      title: '24/7 Support',
      description: 'Dedicated support team available around the clock to assist with your needs.',
    },
  ];

  const handleFeatureClick = (index: number) => {
    // TODO: Implement feature detail navigation or modal
    // For now, this is a placeholder for future feature interaction
  };

  return (
    <MainLayout navbarLinks={navbarLinks} footerLinks={footerLinks}>
      {/* Animated Background Pattern */}
      <BackgroundPattern variant="hero" />

      {/* Hero Section */}
      <HeroSection
        title="CREATIVA SOFT-IA"
        subtitle="Designing and developing intelligent digital solutions"
        description="that help organizations innovate and scale"
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
        onPrimaryClick={() => console.log('Primary button clicked')}
        onSecondaryClick={() => console.log('Secondary button clicked')}
      />

      {/* Features Section */}
      <Section
        title="Our Features"
        subtitle="Discover how our technology solutions can transform your business"
        id="features"
      >
        <FeaturesGrid features={features} onFeatureClick={handleFeatureClick} />
      </Section>

      {/* About Section */}
      <Section
        title="About Us"
        id="about"
        showDivider={true}
      >
        <div className="max-w-4xl mx-auto">
          <AboutCard>
            <div className="animate-slide-up">
              <Text variant="p" color="gray" className="text-lg leading-relaxed mb-6">
                Creativa Soft-IA is a technology company focused on designing and developing intelligent digital solutions. 
                We combine cutting-edge AI technology with modern development practices to create solutions that help 
                organizations innovate and scale effectively.
              </Text>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Text variant="p" color="gray" className="text-lg leading-relaxed">
                Our team of experts is dedicated to delivering high-quality, user-centric applications using the latest 
                technologies including React.js, TypeScript, and Tailwind CSS, following Atomic Design principles for 
                maintainable and scalable code.
              </Text>
            </div>
          </AboutCard>
        </div>
      </Section>
    </MainLayout>
  );
};

export default HomePage;
