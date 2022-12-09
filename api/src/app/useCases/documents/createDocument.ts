import { Request, Response } from 'express';

import { Document } from '../../models/Document';

export async function createDocument(req: Request, res: Response) {
  try {

    console.log(req.body, req.file);

    const fileSrc = req.file?.filename;
    const {
      title,
      description,
    } = req.body;

    const document = await Document.create({
      title,
      description,
      fileSrc,
    });

    return res.status(201).json(document);
  } catch (error) {
    return res.sendStatus(500);
  }
}
