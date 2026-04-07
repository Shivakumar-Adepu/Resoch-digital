export const config = {
  runtime: 'nodejs20.x',
};

export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    environment: process.env.NODE_ENV || 'development',
    nodeVersion: process.version,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}
