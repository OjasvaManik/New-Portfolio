import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, unique: true, index: true },
    description: { type: String, required: true },
    technologies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Technologies' }],
    images: { type: [String], default: [] },
    link: { type: String, default: null },
}, {
    timestamps: true,
});

const slugify = (str: string) =>
    str.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

ProjectSchema.pre('save', function (next) {
    if (!this.slug && this.title) {
        this.slug = slugify(this.title);
    }
    next();
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
