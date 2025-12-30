import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to Creativa Soft-IA/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders features section', () => {
  render(<App />);
  const featuresHeading = screen.getByText(/Our Features/i);
  expect(featuresHeading).toBeInTheDocument();
});

test('renders navbar with company name', () => {
  render(<App />);
  const navbarTitle = screen.getAllByText(/Creativa Soft-IA/i)[0];
  expect(navbarTitle).toBeInTheDocument();
});
