
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); 


app.get('/api/intern', (req, res) => {
  res.json({
    name: 'Ranbir Seth',
    referralCode: 'ranbir2025',
    totalDonations: 7200
  });
});


app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: 'Alice', referralCode: 'alice2025', totalDonations: 10500 },
    { name: 'Ranbir', referralCode: 'ranbir2025', totalDonations: 7200 },
    { name: 'John', referralCode: 'john2025', totalDonations: 4900 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
