import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    email: String,
    password: String, // hashed
}, {
    timestamps: true,
});

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
