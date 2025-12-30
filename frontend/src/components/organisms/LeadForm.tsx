import React, { useState } from 'react';
import FormCard from '../molecules/FormCard';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Input from '../atoms/Input';
import information from '../data/information.json';

const { contactForm } = information;

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <FormCard 
        title={contactForm.success.title}
        description={contactForm.success.message}
        className="max-w-2xl mx-auto my-12"
      >
        <div className="text-center py-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <Text variant="p" className="text-gray-300 mb-6">
            {contactForm.success.description}
          </Text>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="primary"
            className="w-full sm:w-auto"
          >
            {contactForm.success.button}
          </Button>
        </div>
      </FormCard>
    );
  }

  return (
    <FormCard 
      title={contactForm.title}
      description={contactForm.description}
      className="max-w-2xl mx-auto my-12"
      icon={
        <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6 bg-navy-900/30 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Input
              label={contactForm.fields.name}
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
              placeholder={contactForm.fields.name}
            />
          </div>
          
          <div className="space-y-2">
            <Input
              label={contactForm.fields.email}
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
              placeholder={contactForm.fields.email}
            />
          </div>

          <div className="space-y-2">
            <Input
              label={contactForm.fields.phone}
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
              placeholder={contactForm.fields.phone}
            />
          </div>

          <div className="space-y-2">
            <Input
              label={contactForm.fields.company}
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
              placeholder={contactForm.fields.company}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            {contactForm.fields.message} <span className="text-red-500">{contactForm.requiredField}</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-navy-800/70 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-150"
            placeholder={contactForm.fields.message}
          />
        </div>

        <div className="pt-2">
          <Button 
            type="submit" 
            variant="primary"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? contactForm.submittingButton : contactForm.submitButton}
          </Button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6 pt-4 border-t border-gray-800">
          {contactForm.privacyText}
        </p>
      </form>
    </FormCard>
  );
};

export { LeadForm };
export default LeadForm;
