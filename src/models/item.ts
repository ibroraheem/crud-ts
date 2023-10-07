import mongoose, { Document, Schema } from 'mongoose';

export interface IItem extends Document {
    name: string;
}

const itemSchema: Schema = new Schema({
    name: { type: String, required: true }
});

export default mongoose.model<IItem>('Item', itemSchema);
