import React from 'react';
import { MainLayout } from '../templates';
import { FeaturesGrid } from '../organisms';
import { Text, Button } from '../atoms';

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
    console.log(`Feature ${index} clicked`);
  };

  return (
    <MainLayout navbarLinks={navbarLinks} footerLinks={footerLinks}>
      {/* Hero Section */}
      <section className="text-center py-16" id="home">
        <Text variant="h1" className="mb-4">
          Welcome to Creativa Soft-IA
        </Text>
        <Text variant="h4" className="mb-8 text-gray-600">
          Designing and developing intelligent digital solutions that help organizations innovate and scale
        </Text>
        <div className="flex justify-center space-x-4">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16" id="features">
        <div className="text-center mb-12">
          <Text variant="h2" className="mb-4">
            Our Features
          </Text>
          <Text variant="p" className="max-w-2xl mx-auto">
            Discover how our technology solutions can transform your business
          </Text>
        </div>
        <FeaturesGrid features={features} onFeatureClick={handleFeatureClick} />
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50 -mx-4 px-4" id="about">
        <div className="max-w-3xl mx-auto text-center">
          <Text variant="h2" className="mb-4">
            About Us
          </Text>
          <Text variant="p" className="mb-4">
            Creativa Soft-IA is a technology company focused on designing and developing intelligent digital solutions. 
            We combine cutting-edge AI technology with modern development practices to create solutions that help 
            organizations innovate and scale effectively.
          </Text>
          <Text variant="p">
            Our team of experts is dedicated to delivering high-quality, user-centric applications using the latest 
            technologies including React.js, TypeScript, and Tailwind CSS, following Atomic Design principles for 
            maintainable and scalable code.
          </Text>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
