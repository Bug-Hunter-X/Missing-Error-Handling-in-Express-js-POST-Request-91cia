const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: 'Missing request body' });
  }
  const user = req.body;
  console.log('Received user:', user);
  res.status(201).send();
});
app.listen(3000, () => console.log('Server listening on port 3000'));