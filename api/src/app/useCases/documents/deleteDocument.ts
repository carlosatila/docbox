import { Request, Response } from 'express';

import { Document } from '../../models/Document';

export async function deleteDocument(req: Request, res: Response) {
  try {
    const { documentId } = req.params;

    await Document.findByIdAndDelete(documentId);

    return res.sendStatus(204);
  } catch {
    return res.status(500);
  }
}
