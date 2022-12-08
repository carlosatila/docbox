import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { router } from './router';
import config from './config';

mongoose.connect(config.mongoUrl)
  .then(() => {
    const app = express();

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(cors(config.cors));
    app.use(express.json());
    app.use(router);

    app.listen(config.port, () => {
      console.log(`🚀 Server is running on ${config.url}`);
    });
  })
  .catch(() => console.log('😒 Fail loading application'));
