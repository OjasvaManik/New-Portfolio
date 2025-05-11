import mongoose from 'mongoose';

const CertificateSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: Date, default: Date.now },
}, {
    timestamps: true,
})

export default mongoose.models.Certificates || mongoose.model('Certificates', CertificateSchema);