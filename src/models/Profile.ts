import mongoose from 'mongoose';

const SocialImageSchema = new mongoose.Schema(
    {
        src: { type: String, default: null },
        hoverSrc: { type: String, default: null },
        alt: { type: String, default: '' },
    }
);

const SocialSchema = new mongoose.Schema(
    {
        platform: { type: String, required: true },
        url: { type: String, required: true },
        image: { type: SocialImageSchema, default: {} },
    }
);

const ProfileSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: { type: String, default: null },
    socials: [SocialSchema]
});

export default mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);