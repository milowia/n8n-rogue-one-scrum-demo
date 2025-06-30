import { render, screen, fireEvent } from '@testing-library/react';
import AccountSettings from '../components/AccountSettings';
import * as accountService from '../services/accountService';

jest.mock('../services/accountService');

test('renders account settings', async () => {
  accountService.getAccountInfo.mockResolvedValue({ email: 'test@example.com', deliveryPreference: 'Standard' });
  render(<AccountSettings />);
  expect(await screen.findByPlaceholderText('Email')).toHaveValue('test@example.com');
});

test('updates account information', async () => {
  accountService.getAccountInfo.mockResolvedValue({ email: 'test@example.com', deliveryPreference: 'Standard' });
  accountService.updateAccountInfo.mockResolvedValue({ success: true });
  render(<AccountSettings />);
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'new@example.com' } });
  fireEvent.click(screen.getByText('Save Changes'));
  expect(await screen.findByText('Account information updated successfully.')).toBeInTheDocument();
});
