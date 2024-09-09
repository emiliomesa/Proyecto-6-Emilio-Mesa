const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../models/userModel");

exports.create = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json ({
            msg: "Hay errores en tu formulario. Intenta nuevamente.",
            error: errors.array(),
        });
    }
}

const { name, lastname, address, email, password } = req.body;

try {
    const salt
}