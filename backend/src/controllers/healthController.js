export const getHealth = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Bodh Setu API is healthy and running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
};
