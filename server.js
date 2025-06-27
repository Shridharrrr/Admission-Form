const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

let submissions = []; // In-memory storage

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/admission', (req, res) => {
  res.sendFile(path.resolve('views/form.html'));
});

app.post('/admission', (req, res) => {
  const { fullName, email, phone, course } = req.body;
  submissions.push({ fullName, email, phone, course });

  res.send(`
    <h2>Thank you, ${fullName}!</h2>
    <p>You’ve successfully applied for the <strong>${course}</strong> program.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/admission`);
});
