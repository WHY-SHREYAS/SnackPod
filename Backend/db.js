const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Shreyas:Rasengan@10@snackpod.aioqvjd.mongodb.net/?retryWrites=true&w=majority&appName=SnackPod'
const mongoDB = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected");
    });
}

module.exports = mongoDB;