import express from 'express';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = 3000;



const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 100,
  message: 'Too many requests, try again in an hour.',
});
app.use(limiter);

const debounceWindow = 300; 
let searchTimeout = null;
let pendingSearches = [];

app.get('/search', (req, res) => {
  const query = req.query.q;

  pendingSearches.push({ res, query });

  if (searchTimeout) clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    const last = pendingSearches[pendingSearches.length - 1];

    const result = {
      result: `You searched for: "${last.query}"`,
    };


    last.res.json(result);


    for (let i = 0; i < pendingSearches.length - 1; i++) {
      pendingSearches[i].res.json({ result: null });
    }


    pendingSearches = [];
    searchTimeout = null;
  }, debounceWindow);
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
