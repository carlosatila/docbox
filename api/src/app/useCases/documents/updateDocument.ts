import { Request, Response } from 'express';

import { Document } from '../../models/Document';

export async function updateDocument(req: Request, res: Response) {
  try {
    const { documentId } = req.params;
    const fileSrc = req.file?.filename;
    const {
      title,
      description,
    } = req.body;

    const exists = await Document.find({ title });

    if (exists) {
      return res.status(400).json({
        error: true,
        message: 'Já existe um documento com esse Título',
      });
    }

    await Document.findByIdAndUpdate(
      documentId,
      {
        title,
        description,
        fileSrc
      }
    );

    return res.sendStatus(204);
  } catch {
    return res.status(500);
  }
}
