import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createDocument } from './app/useCases/documents/createDocument';
import { listDocuments } from './app/useCases/documents/listDocuments';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
});

router.get('/documents', listDocuments);
router.post('/documents', upload.single('image'), createDocument);
