const notificationMiddleware = (req, res, next) => {
  // Middleware to check user notification preferences
  const userId = req.body.userId;
  // Logic to check if user opted in
  next();
};

export default notificationMiddleware;
