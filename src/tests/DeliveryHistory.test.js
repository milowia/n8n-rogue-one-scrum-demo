import React from 'react';
import { render, screen } from '@testing-library/react';
import DeliveryHistory from './DeliveryHistory';

test('renders delivery history title', () => {
  render(<DeliveryHistory />);
  const titleElement = screen.getByText(/Delivery History/i);
  expect(titleElement).toBeInTheDocument();
});
