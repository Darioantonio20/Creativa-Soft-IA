import React, { useState } from 'react';
import Label from '../../atoms/Label';
import Button from '../../atoms/Button';
import ReactionButton from '../../atoms/ReactionButton';
import CommentSection from '../../molecules/CommentSection';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "El Futuro de la Inteligencia Artificial en el Desarrollo Web",
      excerpt: "Exploramos cómo las herramientas de IA están revolucionando la forma en que los desarrolladores crean aplicaciones web modernas.",
      content: "La inteligencia artificial está transformando radicalmente el desarrollo web. Desde asistentes de código que sugieren completaciones automáticas hasta herramientas que generan componentes completos, la IA se está convirtiendo en una parte indispensable del flujo de trabajo moderno. En este artículo exploramos las herramientas más innovadoras y cómo están cambiando la forma en que construimos la web del futuro.",
      author: "Carlos Rodríguez",
      date: "15 de Enero, 2026",
      readTime: "5 min lectura",
      category: "Inteligencia Artificial",
      image: "/api/placeholder/800/400",
      reactions: {
        like: 42,
        love: 18,
        laugh: 7,
        surprise: 12
      },
      comments: [
        {
          id: 1,
          author: "Ana Martínez",
          content: "Excelente artículo. Estoy usando GitHub Copilot y ha mejorado mi productividad un 40%. ¿Qué otras herramientas recomiendan?",
          date: "15 de Enero, 2026",
          likes: 5
        },
        {
          id: 2,
          author: "David López",
          content: "La IA está cambiando completamente el desarrollo. Me pregunto cómo afectará esto a los empleos junior.",
          date: "15 de Enero, 2026",
          likes: 3
        }
      ]
    },
    {
      id: 2,
      title: "Mejores Prácticas para Optimizar el Rendimiento en React",
      excerpt: "Conoce las técnicas más efectivas para mantener tus aplicaciones React rápidas y eficientes a medida que escalan.",
      content: "El rendimiento es crucial en aplicaciones React modernas. Desde el uso correcto de memoización hasta la optimización de bundles, existen múltiples técnicas que pueden marcar la diferencia. En esta guía completa exploramos las mejores prácticas para mantener tus aplicaciones React funcionando de manera óptima.",
      author: "María González",
      date: "12 de Enero, 2026",
      readTime: "8 min lectura",
      category: "Desarrollo Web",
      image: "/api/placeholder/800/400",
      reactions: {
        like: 35,
        love: 12,
        laugh: 4,
        surprise: 8
      },
      comments: []
    },
    {
      id: 3,
      title: "Diseño UX/UI: Creando Experiencias que Conectan",
      excerpt: "Aprende los principios fundamentales del diseño centrado en el usuario y cómo aplicarlos en proyectos reales.",
      content: "El buen diseño va más allá de la estética. Se trata de crear experiencias intuitivas que resuelvan problemas reales de los usuarios. Exploramos los principios fundamentales del diseño UX/UI y cómo aplicarlos para crear productos que realmente conecten con las personas.",
      author: "Ana Martínez",
      date: "10 de Enero, 2026",
      readTime: "6 min lectura",
      category: "Diseño",
      image: "/api/placeholder/800/400",
      reactions: {
        like: 28,
        love: 15,
        laugh: 3,
        surprise: 6
      },
      comments: []
    },
    {
      id: 4,
      title: "Machine Learning en Producción: Desafíos y Soluciones",
      excerpt: "Guía completa para implementar modelos de machine learning en entornos productivos de manera eficiente y segura.",
      content: "Llevar modelos de machine learning a producción presenta desafíos únicos. Desde el monitoreo hasta la actualización de modelos, existen múltiples consideraciones que debemos tener en cuenta. Esta guía cubre las mejores prácticas y herramientas para desplegar ML en producción.",
      author: "David López",
      date: "8 de Enero, 2026",
      readTime: "10 min lectura",
      category: "Data Science",
      image: "/api/placeholder/800/400",
      reactions: {
        like: 31,
        love: 9,
        laugh: 2,
        surprise: 11
      },
      comments: []
    },
    {
      id: 5,
      title: "TypeScript vs JavaScript: ¿Cuál Elegir en 2026?",
      excerpt: "Análisis comparativo detallado para ayudarte a decidir qué lenguaje usar en tu próximo proyecto.",
      content: "TypeScript ha ganado enorme popularidad, pero JavaScript sigue siendo el rey. ¿Cuál deberías elegir? Analizamos los pros y contras de cada opción, considerando factores como el tamaño del equipo, la complejidad del proyecto y los objetivos a largo plazo.",
      author: "Carlos Rodríguez",
      date: "5 de Enero, 2026",
      readTime: "7 min lectura",
      category: "Desarrollo Web",
      image: "/api/placeholder/800/400",
      reactions: {
        like: 45,
        love: 8,
        laugh: 6,
        surprise: 9
      },
      comments: []
    },
    {
      id: 6,
      title: "Cloud Computing: Tendencias que Definirán el Futuro",
      excerpt: "Las tecnologías cloud que están transformando la infraestructura TI y cómo prepararse para ellas.",
      content: "El cloud computing continúa evolucionando a un ritmo acelerado. Desde serverless hasta edge computing, exploramos las tendencias que están definiendo el futuro de la infraestructura TI y cómo las empresas pueden prepararse para adoptar estas tecnologías.",
      author: "María González",
      date: "3 de Enero, 2026",
      readTime: "9 min lectura",
      category: "Cloud",
      image: "/api/placeholder/800/400",
      reactions: {
        like: 22,
        love: 7,
        laugh: 3,
        surprise: 14
      },
      comments: []
    }
  ]);

  const handleReaction = (postId, reactionType) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? {
              ...post,
              reactions: {
                ...post.reactions,
                [reactionType]: post.reactions[reactionType] + 1
              }
            }
          : post
      )
    );
  };

  const handleAddComment = (postId, comment) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? {
              ...post,
              comments: [...post.comments, comment]
            }
          : post
      )
    );
  };

  const openPost = (post) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <section id="blog" className="min-h-screen bg-gray-900">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <button
            onClick={closePost}
            className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Volver al blog</span>
          </button>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <article className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
            {/* Article Header */}
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 h-64 relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-teal-500/20 backdrop-blur text-teal-400 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedPost.category}
                </span>
              </div>
            </div>

            <div className="p-8">
              <Label 
                variant="white" 
                size="3xl" 
                className="font-bold block mb-4"
              >
                {selectedPost.title}
              </Label>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-gray-400">
                  <span>{selectedPost.author}</span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <Label 
                  variant="secondary" 
                  size="base" 
                  className="leading-relaxed block mb-8"
                >
                  {selectedPost.content}
                </Label>
              </div>

              {/* Reactions */}
              <div className="border-t border-gray-700 pt-6 mb-8">
                <Label 
                  variant="white" 
                  size="lg" 
                  className="font-semibold mb-4 block"
                >
                  ¿Qué te pareció este artículo?
                </Label>
                <div className="flex flex-wrap gap-3">
                  <ReactionButton 
                    type="like"
                    count={selectedPost.reactions.like}
                    onClick={() => handleReaction(selectedPost.id, 'like')}
                  />
                  <ReactionButton 
                    type="love"
                    count={selectedPost.reactions.love}
                    onClick={() => handleReaction(selectedPost.id, 'love')}
                  />
                  <ReactionButton 
                    type="laugh"
                    count={selectedPost.reactions.laugh}
                    onClick={() => handleReaction(selectedPost.id, 'laugh')}
                  />
                  <ReactionButton 
                    type="surprise"
                    count={selectedPost.reactions.surprise}
                    onClick={() => handleReaction(selectedPost.id, 'surprise')}
                  />
                </div>
              </div>

              {/* Comments Section */}
              <div className="border-t border-gray-700 pt-6">
                <CommentSection 
                  comments={selectedPost.comments}
                  onAddComment={(comment) => handleAddComment(selectedPost.id, comment)}
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Label 
              variant="white" 
              size="5xl" 
              className="font-bold mb-6 block"
            >
              Nuestro Blog
            </Label>
            <Label 
              variant="secondary" 
              size="2xl" 
              className="max-w-3xl mx-auto block leading-relaxed"
            >
              Descubre las últimas tendencias, tutoriales y perspectivas sobre tecnología, desarrollo e innovación.
            </Label>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Blog Posts - Enhanced Design */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-gradient-to-br from-gray-800 to-gray-750 rounded-3xl border border-gray-600 hover:border-teal-400 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-[1.02]">
              {/* Post Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    {/* Enhanced Author Avatar */}
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800"></div>
                    </div>
                    <div>
                      <Label 
                        variant="white" 
                        size="lg" 
                        className="font-bold block"
                      >
                        {post.author}
                      </Label>
                      <div className="flex items-center space-x-3 text-sm text-gray-400">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span className="bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>

                {/* Post Content */}
                <div className="mb-6">
                  <Label 
                    variant="white" 
                    size="2xl" 
                    className="font-bold block mb-4 cursor-pointer hover:text-teal-400 transition-colors"
                    onClick={() => openPost(post)}
                  >
                    {post.title}
                  </Label>
                  <Label 
                    variant="secondary" 
                    size="lg" 
                    className="leading-relaxed block mb-4"
                  >
                    {post.excerpt}
                  </Label>
                </div>

                {/* Enhanced Post Image */}
                <div className="h-80 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 rounded-2xl mb-6 relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      <Label 
                        variant="white" 
                        size="base" 
                        className="font-medium"
                      >
                        {post.content.substring(0, 150)}...
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Full Content Preview */}
                <div className="mb-6">
                  <Label 
                    variant="secondary" 
                    size="base" 
                    className="leading-relaxed block"
                  >
                    {post.content}
                  </Label>
                  <button 
                    className="text-teal-400 hover:text-teal-300 font-semibold mt-3 flex items-center space-x-2 transition-colors"
                    onClick={() => openPost(post)}
                  >
                    <span>Leer artículo completo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Enhanced Engagement Bar */}
              <div className="border-t border-gray-700 bg-gray-800/50 backdrop-blur-sm px-8 py-6">
                <div className="flex items-center justify-between mb-4">
                  {/* Enhanced Reactions */}
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-3">
                      {Object.entries(post.reactions).map(([type, count]) => (
                        <div key={type} className="bg-gray-700 rounded-full p-3 border-2 border-gray-600 hover:border-teal-400 transition-colors">
                          <ReactionButton type={type} count={count} className="scale-90" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-300 font-medium">
                      {Object.values(post.reactions).reduce((a, b) => a + b, 0)} reacciones
                    </span>
                  </div>

                  {/* Comments Count */}
                  <div className="flex items-center space-x-2 text-gray-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{post.comments.length} comentarios</span>
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-6">
                    <button 
                      className="flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-all duration-300 hover:bg-gray-700 px-4 py-2 rounded-lg"
                      onClick={() => openPost(post)}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      <span className="font-medium">Reaccionar</span>
                    </button>
                    <button 
                      className="flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-all duration-300 hover:bg-gray-700 px-4 py-2 rounded-lg"
                      onClick={() => openPost(post)}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Comentar</span>
                    </button>
                    <button className="flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-all duration-300 hover:bg-gray-700 px-4 py-2 rounded-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      <span className="font-medium">Compartir</span>
                    </button>
                  </div>
                  <button className="text-gray-400 hover:text-teal-400 transition-all duration-300 hover:bg-gray-700 p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
