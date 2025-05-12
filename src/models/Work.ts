import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        slug: { type: String, unique: true, index: true },
        description: { type: String, required: true },
        post: { type: String, required: true },
        from: { type: Date, default: Date.now },
        to: { type: Date, default: null },
    },
    {
        timestamps: true,
    }
);

const slugify = (str: string) =>
    str.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");

WorkSchema.pre("save", function (next) {
    if (!this.slug && this.name) {
        this.slug = slugify(this.name);
    }
    next();
});

export default mongoose.models.Work || mongoose.model("Work", WorkSchema);