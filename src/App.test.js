import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the retreat branding and booking information', () => {
  render(<App />);
  expect(screen.getByText(/CFE Eco Stay/i)).toBeInTheDocument();
  expect(screen.getByText(/Stay with Nature/i)).toBeInTheDocument();
  expect(screen.getByText(/Book Your Stay/i)).toBeInTheDocument();
});
