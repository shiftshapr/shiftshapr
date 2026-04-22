require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = Number(process.env.PORT) || 4011;
const SITE_NAME = process.env.SITE_NAME || 'shiftshapr';

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

const api = express.Router();
api.get('/health', (req, res) => {
  res.json({ ok: true, site: SITE_NAME, ts: new Date().toISOString() });
});
app.use('/api', api);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.status(404).send('Not found');
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`[${SITE_NAME}] listening on http://127.0.0.1:${PORT}`);
});
