import express from 'express';

const app = express();
const PORT = 3000;

function logger(req, res, next) {
  const start = Date.now();
  res.on('finish', () => {
    const time = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${time}ms`);
  });
  next();
}

app.use(logger);

let debounceTimeout = null;
let lastRequest = null;

function addToQueue(callback) {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }

  lastRequest = callback;

  debounceTimeout = setTimeout(() => {
    if (lastRequest) {
      lastRequest();
    }
    debounceTimeout = null;
    lastRequest = null;
  }, 300); 
}

function fakeSearch(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ results: [`You searched for: ${query}`] });
    }, 500); 
  });
}

app.get('/search', (req, res) => {
  const query = req.query.q;

  addToQueue(async () => {
    const result = await fakeSearch(query);
    res.json(result);
  });
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
