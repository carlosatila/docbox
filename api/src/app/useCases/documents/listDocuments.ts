import { Request, Response } from 'express';

import { Document } from '../../models/Document';

export async function listDocuments(req: Request, res: Response) {
  try {
    const documents = await Document.find();
    return res.json(documents);
  } catch {
    return res.sendStatus(500);
  }
}
