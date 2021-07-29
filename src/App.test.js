import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const component = render(<App />);
  const button = component.getByText('The Best Player is...');
  expect(button).toBeInTheDocument();
});
