import express from 'express';
import fetch from 'node-fetch';

const port = 3000;
const host = 'localhost';

const app = express();

app.use('/inc', express.static('includes'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/sukupolvi/:numero', (req, res) => {

  res.render('generation');
});

app.get('/pokemon/:nimi', (req, res) => {

  res.render('pokemon');
});

app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));
