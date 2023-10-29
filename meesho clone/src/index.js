

const express = require("express");
const connect = require("./configs/db");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const userController = require("./controllers/user.controller")
const {register,login} = require("../src/controllers/signup.constrollers")


// Controllers for products of mens, womens, jwelleries
const mensController = require('./controllers/mens.controllers');
const womensController = require('./controllers/womens.controllers');
const jwelleryController = require('./controllers/jwelleries.controllers');

app.use("/products", mensController);
app.use("/womens", womensController);
app.use("/jwelleries", jwelleryController);
// Ended only 6 lines added 

app.use("/users", userController)

app.post("/register", register)

app.post("/login", login)

app.listen(3000, async () => {
    try{
        await connect();
        console.log("listening on port 3000")
    }
    catch(err){
        console.log(err.message);
    }
});
