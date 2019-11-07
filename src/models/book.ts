import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

interface Author extends Document {
  name: string;
  email: number;
}

interface Book extends Document {
  title: string;
  authors: Author[];
  publishedDate: number;
  price: number;
  tags: string[];
  createdAt: number;
}

const Author = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const Book = new Schema({
  title: { type: String, required: true },
  authors: { type: [Author], required: false },
  publishedDate: { type: Date, required: false },
  price: { type: Number, required: false },
  tags: { type: [String], required: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AuthorModal = mongoose.model<Author>('Author', Author);

const a = new AuthorModal({ name: 'yong' });
console.log('authmodal', a);

export default mongoose.model<Author | Book>('Book', Book);
