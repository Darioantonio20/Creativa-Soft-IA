import React from 'react';
import { Navbar, Footer } from '../organisms';

interface MainLayoutProps {
  children: React.ReactNode;
  navbarTitle?: string;
  navbarLinks?: { label: string; href: string }[];
  footerLinks?: { label: string; href: string }[];
  companyName?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  navbarTitle = 'Creativa Soft-IA',
  navbarLinks = [],
  footerLinks = [],
  companyName = 'Creativa Soft-IA',
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title={navbarTitle} links={navbarLinks} />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer companyName={companyName} links={footerLinks} />
    </div>
  );
};

export default MainLayout;
