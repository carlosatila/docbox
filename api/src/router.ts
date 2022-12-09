import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';
import mime from 'mime-types';

import { createDocument } from './app/useCases/documents/createDocument';
import { listDocuments } from './app/useCases/documents/listDocuments';
import config from './config';

export const router = Router();

const upload = multer({
  fileFilter: function (req, file, callback) {
    const fileExtension = String(mime.extension(file.mimetype));

    if(config.extensions.includes(fileExtension)) {
      return callback(new Error('Tipo de arquivo não permitido.'));
    }

    callback(null, true);
  },
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
router.post('/documents', upload.single('document'), createDocument);
