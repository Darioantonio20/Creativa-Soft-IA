import React from 'react';
import { MainLayout } from '../templates';
import { BackgroundPattern, Button, Text, Input } from '../atoms';
import { Section } from '../molecules';
import information from '../data/information.json';

const BlogPage: React.FC = () => {
  const { blog, footer } = information;

  const navbarLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Características', href: '/#features' },
    { label: 'Sobre Nosotros', href: '/#about' },
    { label: 'Contacto', href: '/#contact' },
    { label: 'Oportunidades', href: '/oportunidades' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <MainLayout navbarLinks={navbarLinks} footerLinks={footer.quickLinks}>
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 to-navy-900 text-white pt-32 pb-20">
        <BackgroundPattern variant="hero" />
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-2xl">
            <Text variant="h1" className="text-4xl md:text-5xl font-bold mb-4">
              {blog.hero.title}
            </Text>
            <Text variant="p" className="text-lg text-gray-300 mb-8">
              {blog.hero.subtitle}
            </Text>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">{blog.hero.ctaPrimary}</Button>
              <Button variant="outline" className="border-brand-400 text-brand-200 hover:bg-brand-500/10">
                {blog.hero.ctaSecondary}
              </Button>
            </div>
          </div>
          <div className="bg-navy-900/40 border border-brand-500/10 rounded-3xl p-6 w-full max-w-md">
            <Text variant="h3" className="text-xl font-semibold text-white mb-3">
              Conversaciones destacadas
            </Text>
            <ul className="space-y-4 text-sm text-gray-300">
              {blog.posts.slice(0, 2).map(post => (
                <li key={post.id} className="border border-white/5 rounded-xl p-3 bg-white/5">
                  <p className="font-semibold text-white">{post.author.name}</p>
                  <p className="text-xs text-gray-400 mb-2">{post.publishedAt}</p>
                  <p className="text-sm">{post.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section className="bg-navy-950/30 py-16">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-8">
            <div className="bg-navy-900/50 border border-brand-500/15 rounded-3xl p-6 shadow-xl">
              <Text variant="h3" className="text-2xl font-semibold text-white mb-1">
                Comparte algo con la comunidad
              </Text>
              <p className="text-gray-400 text-sm mb-4">Piensa en esto como tu muro estilo LinkedIn.</p>
              <textarea
                className="w-full bg-navy-800/80 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                rows={4}
                placeholder={blog.chat.placeholder}
              />
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-3 text-sm text-gray-400">
                  <span>📎 Documentos</span>
                  <span>🖼️ Imagen</span>
                  <span>🎥 Video</span>
                </div>
                <Button variant="primary" className="px-6">
                  {blog.chat.sendLabel}
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {blog.posts.map(post => (
                <article
                  key={post.id}
                  className="bg-navy-900/50 border border-white/5 rounded-3xl p-6 shadow-lg space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">{post.author.name}</p>
                      <p className="text-sm text-gray-400">{post.author.role}</p>
                    </div>
                    <span className="text-xs text-gray-500">{post.publishedAt}</span>
                  </div>
                  <Text variant="h3" className="text-xl font-semibold text-white">
                    {post.title}
                  </Text>
                  <Text variant="p" className="text-gray-200">
                    {post.content}
                  </Text>
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-brand-500/15 text-brand-200 border border-brand-500/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 pt-3 border-t border-white/5">
                    <span>💬 {post.comments.length} comentarios</span>
                    <span>👏 {post.reactions} reacciones</span>
                  </div>
                  {post.comments.length > 0 && (
                    <div className="bg-navy-800/60 border border-white/5 rounded-2xl p-4 space-y-3">
                      {post.comments.map(comment => (
                        <div key={comment.text}>
                          <p className="text-white text-sm font-semibold">{comment.author}</p>
                          <p className="text-xs text-gray-500">{comment.publishedAt}</p>
                          <p className="text-sm text-gray-200 mt-1">{comment.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-navy-900/60 border border-brand-500/15 rounded-3xl p-5">
              <Text variant="h3" className="text-xl font-semibold text-white mb-4">
                Noticias rápidas
              </Text>
              <div className="space-y-4">
                {blog.news.map(newsItem => (
                  <div key={newsItem.title} className="border border-white/5 rounded-2xl p-4 bg-white/5">
                    <p className="text-white font-semibold">{newsItem.title}</p>
                    <p className="text-sm text-gray-400 my-2">{newsItem.summary}</p>
                    <Button variant="outline" size="sm" className="w-full border-white/20 text-white">
                      {newsItem.linkText}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-900/60 border border-brand-500/15 rounded-3xl p-5 space-y-4">
              <Text variant="h3" className="text-xl font-semibold text-white">
                Mensajería rápida
              </Text>
              <p className="text-sm text-gray-400">
                Próximamente podrás abrir chats individuales y grupales para colaborar en tiempo real.
              </p>
              <Input
                placeholder="Buscar talento o equipos..."
                className="bg-navy-800/80 border-white/10"
              />
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center justify-between">
                  <span>Equipo Data & IA</span>
                  <span className="text-xs text-gray-500">En línea</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Diseño de Producto</span>
                  <span className="text-xs text-gray-500">2 nuevos mensajes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Comunidad Creativa</span>
                  <span className="text-xs text-gray-500">Hoy</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </MainLayout>
  );
};

export default BlogPage;
