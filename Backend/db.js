const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Shreyas:Rasengan%4010@snackpod.aioqvjd.mongodb.net/SnackPod?retryWrites=true&w=majority&appName=SnackPod';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("food_category").find({}).toArray();

    global.food_items = fetched_data;
    global.foodCategory = foodCategory;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = mongoDB;
