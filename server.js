const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");

require("dotenv").config();
const port = process.env.port || 3005;
const serverUrl = process.env.SERVER_URL || 'http://localhost:${port}';

const connectDB = require("./config/db.js");

connectDB();


const swaggerOptions = {
    definition {
        openapi: "3.0.0",
        info{
            title: "Aplicacion Backend con Autenticacion API",
            version: "1.0.0",
        },
        servers: [
            {
             url: serverUrl,   
            },
        ],
    }
}