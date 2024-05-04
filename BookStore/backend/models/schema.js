import mongoose from 'mongoose';
const { Schema,model } = mongoose;


//objects 
const bookSchema = new Schema(
  
{
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishYear: { type: Number, required: true },
},
{ timestamps: true}//just to show timings
);

export const db = model('Book', bookSchema); // 'Book' is the name of the collection in the database, model is used interact with db for all operations