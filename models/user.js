import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre:   { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'Email es necesario'] },
    pass: { type: String, required: [true, 'Pass es necesaria'] },
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

export default User;