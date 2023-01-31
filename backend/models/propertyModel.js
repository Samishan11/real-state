const mongoose = require('mongoose')

const property = mongoose.model("Property", {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    address: { type: {}, require: true },
    lat: { type: String },
    lng: { type: String },
    property_type: { type: String, require: true },
    category: { type: String, required: true },
    price: { type: Number },
    payment_type: { type: String },
    rooms: { type: [] },
    features: { type: [] },
    top_features: { type: [] },
    rules: { type: {} },
    images: { type: [] },
    total_ratings: {type: Number, default: 0},
    rating: {type: Number, default: 0},
    available: {type: Boolean, default: true},
    reports: {type: Number, default: 0},
    created_date: {type: Date, default: new Date()},
    is_deleted: {type: Boolean, default: false}
})

module.exports = property;