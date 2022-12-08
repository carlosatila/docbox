import { Request, Response } from 'express';

import { Document } from '../../models/Document';

export async function createDocument(req: Request, res: Response) {
  try {
    const imageSrc = req.file?.filename;
    const {
      title,
      description,
    } = req.body;

    const document = await Document.create({
      title,
      description,
      imageSrc,
    });

    return res.status(201).json(document);
  } catch (error) {
    return res.sendStatus(500);
  }
}
