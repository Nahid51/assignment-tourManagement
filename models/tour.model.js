import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
    location: { type: String, require: true },
    photo: { type: String, require: true },
    price: { type: Number, require: true },
    time: { type: String, require: true },
    desc: { type: String, require: true },
    viewCount: { type: Number, default: 0 },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const tourModel = mongoose.model("Tour", tourSchema);

export default tourModel;