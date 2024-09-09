const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: "",
    },
    lastname: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;