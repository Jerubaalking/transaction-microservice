const express = require('express');
const router = express.Router();
const apiKeyAuth = require('../../middlewares/apiKeyAuth');

// Dummy transaction route
router.get('/', apiKeyAuth, (req, res) => {
  res.json({ transactions: [], client: req.apiClient.name });
});

module.exports = router;
