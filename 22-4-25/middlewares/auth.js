const SECRET_TOKEN = 'mysecrettoken';

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];
  if (token !== SECRET_TOKEN) {
    return res.status(403).json({ message: 'wrong token' });
  }

  next();
};
