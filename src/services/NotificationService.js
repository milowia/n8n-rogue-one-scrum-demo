class NotificationService {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }

  sendNotification(deliveryId, status) {
    const timestamp = new Date().toISOString();
    const userPreference = this.userPreferences.get(deliveryId);
    if (userPreference.optIn) {
      // Logic to send notification via preferred method
      console.log(`Sending ${userPreference.method} notification for delivery ${deliveryId}: ${status} at ${timestamp}`);
    }
  }

  updateUserPreference(userId, optIn) {
    // Logic to update user notification preference
    this.userPreferences.set(userId, { optIn });
  }
}

export default NotificationService;
