import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { MainLayout } from '../templates';
import { BackgroundPattern, Button, Text, Input } from '../atoms';
import { Section } from '../molecules';
import information from '../data/information.json';

type BlogPostData = (typeof information.blog.posts)[number];
type BlogCommentData = BlogPostData['comments'][number];
type AttachmentKey = 'docs' | 'image' | 'video';

type InteractivePost = Omit<BlogPostData, 'comments'> & {
  comments: BlogCommentData[];
  reactions: number;
  commentDraft: string;
  attachments?: string[];
};

const BlogPage: React.FC = () => {
  const { blog, footer } = information;
  const [posts, setPosts] = useState<InteractivePost[]>(() =>
    blog.posts.map(post => ({
      ...post,
      comments: post.comments ?? [],
      reactions: post.reactions ?? 0,
      commentDraft: '',
    }))
  );

  const [composerText, setComposerText] = useState('');
  const [composerError, setComposerError] = useState<string | null>(null);
  const [attachments, setAttachments] = useState<Record<AttachmentKey, string | null>>({
    docs: null,
    image: null,
    video: null,
  });

  const docInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const commentRefs = useRef<Record<string, HTMLTextAreaElement | null>>({});

  const navbarLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Características', href: '/#features' },
    { label: 'Sobre Nosotros', href: '/#about' },
    { label: 'Contacto', href: '/#contact' },
    { label: 'Oportunidades', href: '/oportunidades' },
    { label: 'Blog', href: '/blog' },
  ];

  const handleAttachmentClick = (type: AttachmentKey) => {
    const ref =
      type === 'docs' ? docInputRef : type === 'image' ? imageInputRef : videoInputRef;
    ref.current?.click();
  };

  const handleAttachmentChange = (type: AttachmentKey, files: FileList | null) => {
    if (!files || files.length === 0) return;
    setAttachments(prev => ({ ...prev, [type]: files[0].name }));
  };

  const resetAttachmentInputs = () => {
    [docInputRef, imageInputRef, videoInputRef].forEach(ref => {
      if (ref.current) {
        ref.current.value = '';
      }
    });
  };

  const handleShareUpdate = () => {
    const selectedAttachments = Object.values(attachments).filter(Boolean) as string[];

    if (!composerText.trim() && selectedAttachments.length === 0) {
      setComposerError('Comparte un mensaje o adjunta al menos un archivo.');
      return;
    }

    const newPost: InteractivePost = {
      id: `update-${Date.now()}`,
      author: { name: 'Tú', role: 'Colaborador en Creativa Soft-IA' },
      title: 'Nueva actualización',
      content: composerText.trim() || 'Actualización con archivos adjuntos.',
      tags: ['Comunidad'],
      publishedAt: 'Justo ahora',
      reactions: 0,
      comments: [],
      commentDraft: '',
      attachments: selectedAttachments,
    };

    setPosts(prev => [newPost, ...prev]);
    setComposerText('');
    setComposerError(null);
    setAttachments({ docs: null, image: null, video: null });
    resetAttachmentInputs();
  };

  const handleReact = (postId: string) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === postId ? { ...post, reactions: post.reactions + 1 } : post
      )
    );
  };

  const handleCommentDraftChange = (postId: string, value: string) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === postId ? { ...post, commentDraft: value } : post
      )
    );
  };

  const handleCommentSubmit = (postId: string) => {
    setPosts(prev =>
      prev.map(post => {
        if (post.id !== postId || !post.commentDraft.trim()) return post;

        const newComment: BlogCommentData = {
          author: 'Tú',
          text: post.commentDraft.trim(),
          publishedAt: 'Justo ahora',
        };

        return {
          ...post,
          comments: [...post.comments, newComment],
          commentDraft: '',
        };
      })
    );
  };

  const handleFocusComments = (postId: string) => {
    commentRefs.current[postId]?.focus();
  };

  const composerButtons: { key: AttachmentKey; label: string; icon: string; accent: string }[] = [
    { key: 'docs', label: 'Documentos', icon: 'solar:paperclip-2-line-duotone', accent: 'from-brand-400 to-brand-600' },
    { key: 'image', label: 'Imagen', icon: 'solar:image-bold-duotone', accent: 'from-emerald-400 to-teal-500' },
    { key: 'video', label: 'Video', icon: 'solar:clapperboard-text-bold-duotone', accent: 'from-fuchsia-400 to-purple-500' },
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
              <Button >{blog.hero.ctaPrimary}</Button>
              <Button className="border-brand-400 text-brand-200 hover:bg-brand-500/10">
                {blog.hero.ctaSecondary}
              </Button>
            </div>
          </div>
          <div className="bg-navy-900/40 border border-brand-500/10 rounded-3xl p-6 w-full max-w-md">
            <Text variant="h3" className="text-xl font-semibold text-white mb-3">
              Conversaciones destacadas
            </Text>
            <ul className="space-y-4 text-sm text-gray-300">
              {posts.slice(0, 2).map(post => (
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
            <div className="bg-navy-900/50 border border-brand-500/15 rounded-3xl p-6 shadow-xl space-y-4">
              <Text variant="h3" className="text-2xl font-semibold text-white mb-1">
                Comparte algo con la comunidad
              </Text>
              <p className="text-gray-400 text-sm mb-4">Piensa en esto como tu muro estilo LinkedIn.</p>
              <textarea
                className="w-full bg-navy-800/80 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                rows={4}
                placeholder={blog.chat.placeholder}
                value={composerText}
                onChange={e => setComposerText(e.target.value)}
              />
              <div className="flex justify-between items-center flex-wrap gap-3">
                <div className="flex gap-3 flex-wrap text-sm text-gray-400">
                  {composerButtons.map(btn => (
                    <button
                      key={btn.key}
                      type="button"
                      onClick={() => handleAttachmentClick(btn.key)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-200 backdrop-blur ${
                        attachments[btn.key]
                          ? `border-brand-300 text-white bg-gradient-to-r ${btn.accent}`
                          : 'border-white/15 bg-white/5 text-gray-300 hover:border-brand-300'
                      }`}
                    >
                      <Icon icon={btn.icon} className="text-lg" />
                      <span className="font-medium">{attachments[btn.key] || btn.label}</span>
                    </button>
                  ))}
                </div>
                <Button className="px-6" onClick={handleShareUpdate}>
                  {blog.chat.sendLabel}
                </Button>
              </div>
              {composerError && (
                <p className="text-sm text-red-300">{composerError}</p>
              )}
              <input
                ref={docInputRef}
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx,.ppt,.pptx"
                onChange={e => handleAttachmentChange('docs', e.target.files)}
              />
              <input
                ref={imageInputRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={e => handleAttachmentChange('image', e.target.files)}
              />
              <input
                ref={videoInputRef}
                type="file"
                className="hidden"
                accept="video/*"
                onChange={e => handleAttachmentChange('video', e.target.files)}
              />
            </div>

            <div className="space-y-6">
              {posts.map(post => (
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
                  {post.attachments?.length ? (
                    <div className="flex flex-wrap gap-2 text-xs text-brand-200">
                      {post.attachments.map(file => (
                        <span
                          key={file}
                          className="px-2 py-1 bg-white/5 rounded-full border border-brand-500/20"
                        >
                          📎 {file}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <div className="flex items-center justify-between text-sm text-gray-300 pt-3 border-t border-white/5">
                    <button
                      type="button"
                      className="hover:text-brand-200 transition-colors flex items-center gap-2"
                      onClick={() => handleFocusComments(post.id)}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-brand-200">
                        <Icon icon="solar:chat-round-bold-duotone" className="text-lg" />
                      </span>
                      <span className="font-medium">{post.comments.length} comentarios</span>
                    </button>
                    <button
                      type="button"
                      className="hover:text-brand-200 transition-colors flex items-center gap-2"
                      onClick={() => handleReact(post.id)}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-pink-200">
                        <Icon icon="solar:hand-heart-bold-duotone" className="text-lg" />
                      </span>
                      <span className="font-medium">{post.reactions} reacciones</span>
                    </button>
                  </div>
                  {post.comments.length > 0 && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
                      {post.comments.map(comment => (
                        <div
                          key={comment.text}
                          className="bg-navy-950/40 rounded-2xl p-3 shadow-inner border border-white/5"
                        >
                          <p className="text-white text-sm font-semibold">{comment.author}</p>
                          <p className="text-xs text-gray-500 mb-1">{comment.publishedAt}</p>
                          <p className="text-sm text-gray-200">{comment.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="space-y-2">
                    <textarea
                      ref={el => {
                        commentRefs.current[post.id] = el;
                      }}
                      value={post.commentDraft}
                      onChange={e => handleCommentDraftChange(post.id, e.target.value)}
                      placeholder="Comparte un comentario..."
                      className="w-full px-4 py-3 bg-navy-800/70 border border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-500 text-sm text-white placeholder-gray-500"
                      rows={2}
                    />
                    <div className="flex justify-end">
                      <Button className="px-4 py-2" onClick={() => handleCommentSubmit(post.id)}>
                        Comentar
                      </Button>
                    </div>
                  </div>
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
                    <Button className="w-full border-white/20 text-white">
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
