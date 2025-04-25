const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();
const port = 3000;

// serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// signup route
app.post('/api/signup', async (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password || !role) return res.json({ error: 'All fields required' });
  try {
    const hash = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)';
    db.query(sql, [username, hash, role], (err) => {
      if (err) return res.json({ error: 'Username already exists' });
      res.json({ success: true });
    });
  } catch {
    res.json({ error: 'Server error' });
  }
});

// login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], async (err, results) => {
    if (err || results.length === 0) return res.json({ error: 'Invalid username or password' });
    const user = results[0];
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.json({ error: 'Invalid username or password' });
    res.json({ username: user.username, role: user.role });
  });
});

// fallback to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log(`Server running http://localhost:${port}`));