import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

const MAX_SIZE = parseInt(process.env.MAX_SIZE_MB || '2') * 1024 * 1024;
const uploadDir = path.join(__dirname, '..', 'uploads');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${crypto.randomUUID()}${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = ['image/png', 'image/jpeg'];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(new Error('Invalid file type'));
};

const upload = multer({
  storage,
  limits: { fileSize: MAX_SIZE },
  fileFilter
}).single('image');

router.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(422).json({ error: err.message });
    const fileUrl = `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`;
    res.json({ url: fileUrl });
  });
});

router.get('/storage', (req, res) => {
  let total = 0;
  if (fs.existsSync(uploadDir)) {
    for (const file of fs.readdirSync(uploadDir)) {
      const { size } = fs.statSync(path.join(uploadDir, file));
      total += size;
    }
  }
  res.json({ totalBytes: total });
});

export default router;
