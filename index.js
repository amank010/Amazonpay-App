const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
  console.log(`Visitor IP: ${ip}`);
  res.send('Your visit has been logged.');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
