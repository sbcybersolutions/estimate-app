// server/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Test endpoint
app.get('/', (req, res) => {
  res.send('Estimate backend is running!');
});

// Save quote (placeholder)
app.post('/api/quotes', (req, res) => {
  const quote = req.body;
  console.log('Received quote:', quote);
  res.status(201).json({ message: 'Quote received', quote });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
