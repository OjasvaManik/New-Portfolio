import mongoose from 'mongoose';

const slugify = (str: string) =>
    str.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

const CertificateSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, unique: true, index: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: Date, default: Date.now },
    issuer: { type: String, required: true },
}, {
    timestamps: true,
});

CertificateSchema.pre('save', function(next) {
    if (!this.slug || this.isModified('title')) {
        this.slug = slugify(this.title);
    }
    next();
});

CertificateSchema.post('save', function(doc) {
    console.log('Saved document with slug:', doc.slug);
});

export default mongoose.models.Certificates || mongoose.model('Certificates', CertificateSchema);