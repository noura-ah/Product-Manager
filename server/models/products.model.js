const mongoose = require("mongoose")

const ProductScheme = new mongoose.Schema(
    {
        title: {
            type:String,
            required:[true,'Title is required'],
            minlength:[3,"Title should be at least 3 characters"]
        },
        price:Number,
        description: String,
    },
    {
        // this will create createAt and updateAt directly
        timestamps: true
    })

const Product = mongoose.model("Product", ProductScheme)

module.exports = Product