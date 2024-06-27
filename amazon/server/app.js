require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
require("./dp/conn");
const app = express();
const Products = require("./models/productsSchema");


const DefaultData = require("./defaultdata");

app.listen(3000,() =>{
    console.log("Listening to the port 3000");
});

DefaultData();