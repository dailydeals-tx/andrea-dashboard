const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/ebay-deletion', (req, res) => {
  console.log('📬 eBay Deletion Notice:', req.body);
  res.status(200).send('Received');
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
