import NotificationService from '../services/NotificationService';

describe('NotificationService', () => {
  let notificationService;

  beforeEach(() => {
    notificationService = new NotificationService(new Map());
  });

  test('should send notification if user opted in', () => {
    // Mock user preference
    notificationService.userPreferences.set('user1', { optIn: true, method: 'email' });
    console.log = jest.fn();
    notificationService.sendNotification('delivery1', 'Delivered');
    expect(console.log).toHaveBeenCalledWith('Sending email notification for delivery delivery1: Delivered at');
  });

  test('should not send notification if user opted out', () => {
    // Mock user preference
    notificationService.userPreferences.set('user1', { optIn: false, method: 'email' });
    console.log = jest.fn();
    notificationService.sendNotification('delivery1', 'Delivered');
    expect(console.log).not.toHaveBeenCalled();
  });
});
