const { ApiClient, ApiUsageLog } = require('../models');

module.exports = async function apiKeyAuth(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey) return res.status(401).json({ error: 'Missing API Key' });

  const client = await ApiClient.findOne({ where: { apiKey, isActive: true } });
  if (!client) return res.status(403).json({ error: 'Invalid API Key' });

  await ApiUsageLog.create({
    apiClientId: client.id,
    endpoint: req.originalUrl,
    method: req.method
  });

  req.apiClient = client;
  next();
};
