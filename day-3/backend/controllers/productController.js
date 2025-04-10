import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  const { category, minPrice, maxPrice, rating, page = 1, limit = 10, sortBy = 'name' } = req.query;

  const filter = {};
  if (category) filter.category = category;
  if (rating) filter.rating = { $gte: Number(rating) };
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }

  const skip = (page - 1) * limit;

  const products = await Product.find(filter)
    .sort({ [sortBy]: 1 })
    .skip(skip)
    .limit(Number(limit));

  res.json({ page, products });
};
