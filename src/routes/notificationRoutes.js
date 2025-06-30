import express from 'express';
import NotificationService from '../services/NotificationService';

const router = express.Router();
const notificationService = new NotificationService(new Map()); // Placeholder for user preferences

router.post('/opt-in', (req, res) => {
  const { userId } = req.body;
  notificationService.updateUserPreference(userId, true);
  res.send('User opted in for notifications.');
});

router.post('/opt-out', (req, res) => {
  const { userId } = req.body;
  notificationService.updateUserPreference(userId, false);
  res.send('User opted out of notifications.');
});

export default router;
