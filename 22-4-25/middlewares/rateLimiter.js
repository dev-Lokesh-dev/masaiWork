import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 60,
  message: 'Too many requests, please try again later.',
});
