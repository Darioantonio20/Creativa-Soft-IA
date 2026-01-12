import React, { useState } from 'react';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';
import Button from '../../atoms/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Aquí iría la lógica de envío del formulario
  };

  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <Label 
            variant="white" 
            size="4xl" 
            className="font-bold mb-4 block relative inline-block"
          >
            Contacto
            <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-400"></div>
          </Label>
          <Label 
            variant="secondary" 
            size="xl" 
            className="max-w-2xl mx-auto block"
          >
            ¿Tienes un proyecto en mente? Nos encantaría saber de ti
          </Label>
        </div>

        {/* Formulario */}
        <div className="bg-gray-800 p-8 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre completo */}
              <div>
                <Label 
                  variant="white" 
                  size="base" 
                  className="font-medium mb-2 block"
                >
                  Nombre completo
                </Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Correo electrónico */}
              <div>
                <Label 
                  variant="white" 
                  size="base" 
                  className="font-medium mb-2 block"
                >
                  Correo electrónico
                </Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Teléfono */}
              <div>
                <Label 
                  variant="white" 
                  size="base" 
                  className="font-medium mb-2 block"
                >
                  Teléfono
                </Label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Empresa */}
              <div>
                <Label 
                  variant="white" 
                  size="base" 
                  className="font-medium mb-2 block"
                >
                  Empresa
                </Label>
                <Input
                  type="text"
                  name="company"
                  placeholder="Nombre de tu empresa"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <Label 
                variant="white" 
                size="base" 
                className="font-medium mb-2 block"
              >
                ¿En qué podemos ayudarte?
              </Label>
              <TextArea
                name="message"
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Botón de envío */}
            <div className="text-center">
              <Button 
                type="submit"
                variant="primary"
                size="lg"
                className="px-12"
              >
                ENVIAR MENSAJE
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
