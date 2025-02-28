import express from 'express';
import fetch from 'node-fetch';

const port = 3000;
const host = 'localhost';
const pokeapi = 'https://pokeapi.co/api/v2';

const app = express();

app.use('/inc', express.static('includes'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/sukupolvi/:numero', async (req, res) => {
  const numero = req.params.numero;

  try {
    const vastaus_json = await fetch(pokeapi + '/generation/' + numero);
    const vastaus = await vastaus_json.json();

    res.render('generation', { pokemons: vastaus.pokemon_species });
  } catch (err) {
    console.error(err);

    res.render('generation', { pokemons: [{name: 'Pokemoneja ei löytynyt'}] });
  }
});

app.get('/pokemon/:nimi', (req, res) => {

  res.render('pokemon');
});

app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));
