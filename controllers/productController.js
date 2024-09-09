const Product = require("../models/productModel");
const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.create = async (req, res) => {
    const { name, color, size, price, description} = req.body;

    console.log(req.body);

    //stripe
    //

    try {
        const product = await stripe.products.create({
            name, 
            description,
             
        })
    }
}