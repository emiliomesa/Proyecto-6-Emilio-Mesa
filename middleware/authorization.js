const jwt = require("jsonwebtoken");

const decrypt = async (req, res, next) => {
    const token = req.header("x-auth-token");

    if (!token) {
        return res.status(401).json({
            msg: "no hay token, permiso no valido.",
        });
    }


    try {
        const openToken = await jwt.verify(token, process.env.SECRET);
        req.user = openToken.user;
        next();
    } catch (error) {
        res.json({
            msg: "hubo un error con el token.",
        });
    }

    };

 module.exports = decrypt;