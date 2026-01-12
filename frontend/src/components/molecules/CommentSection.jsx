import React, { useState } from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const CommentSection = ({ comments = [], onAddComment }) => {
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() && authorName.trim()) {
      onAddComment({
        id: Date.now(),
        author: authorName,
        content: newComment,
        date: new Date().toLocaleDateString('es-ES', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        }),
        likes: 0
      });
      setNewComment('');
      setAuthorName('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Comment Form */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <Label 
          variant="white" 
          size="lg" 
          className="font-semibold mb-4 block"
        >
          Deja un comentario
        </Label>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Tu nombre"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Escribe tu comentario..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
              rows={4}
              required
            />
          </div>
          <Button 
            type="submit"
            variant="primary"
            size="base"
          >
            Publicar comentario
          </Button>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <Label 
                    variant="white" 
                    size="base" 
                    className="font-semibold block"
                  >
                    {comment.author}
                  </Label>
                  <Label 
                    variant="secondary" 
                    size="sm" 
                    className="text-gray-400"
                  >
                    {comment.date}
                  </Label>
                </div>
                <button className="text-gray-400 hover:text-teal-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </button>
              </div>
              <Label 
                variant="secondary" 
                size="base" 
                className="leading-relaxed block mb-3"
              >
                {comment.content}
              </Label>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  <span className="text-sm">{comment.likes}</span>
                </button>
                <button className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Responder
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <Label 
              variant="secondary" 
              size="base" 
              className="text-gray-400"
            >
              No hay comentarios aún. ¡Sé el primero en comentar!
            </Label>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
