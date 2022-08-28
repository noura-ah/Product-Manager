const mongoose = require("mongoose")

const ProductScheme = new mongoose.Schema(
    {
        title: String,
        price:Number,
        description: String,
    },
    {
        // this will create createAt and updateAt directly
        timestamps: true
    })

const Product = mongoose.model("Product", ProductScheme)

module.exports = Product