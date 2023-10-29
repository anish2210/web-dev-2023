const mongoose = require("mongoose");

module.exports = () => {
//     return mongoose.connect("mongodb://127.0.0.1:27017/meesho123");
    return   mongoose.connect(`mongodb+srv://mas_alam:arif9718masai@cluster0.9wojz.mongodb.net/MeeshoDB?retryWrites=true&w=majority`);
};
