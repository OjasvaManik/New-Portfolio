import mongoose from 'mongoose';

const slugify = (str: string) =>
    str.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

const TechnologySchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, unique: true, index: true },
    description: { type: String, required: true },
    images: {
        normal: { type: String, default: '' },
        hover: { type: String, default: '' },
    },
});

TechnologySchema.pre('save', function (next) {
    if (!this.slug && this.title) {
        this.slug = slugify(this.title);
    }
    next();
});

export default mongoose.models.Technologies || mongoose.model('Technologies', TechnologySchema);
