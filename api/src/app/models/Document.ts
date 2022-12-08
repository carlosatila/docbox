import { model, Schema } from 'mongoose';

export const Document = model('Document', new Schema({
  title: {
    type: String,
    maxlength: 100,
    required: true,
  },
  description: {
    type: String,
    maxlength: 2000,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
}));
