const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Shreyas:Rasengan%4010@snackpod.aioqvjd.mongodb.net/?retryWrites=true&w=majority&appName=SnackPod';

// // const mongoDB = () => {
// //     mongoose.connect(mongoURI, () => {
// //         console.log("connected");
// //     });
// // }

// // const mongoose = require('mongoose');
// // const mongoURI = 'mongodb+srv://gofood:mern123@cluster0.unfngxf.mongodb.net/gofoodmern?retryWrites=true&w
// // const mongoURI = 'mongodb://gofood:mern123@ac-kgn9gzn-shard-00-00.unfngxf.mongodb.net:27017, ac-kgn9gzn-shard"
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {

                const foodCategory = await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(function (err, catData) {

                    if (err) console.log(err);
                    else {
                        global.food_items = data
                        global.foodCategory = catData
                    }

                })

            })
        }
    })
}

module.exports = mongoDB;




// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://Shreyas:Rasengan%4010@snackpod.aioqvjd.mongodb.net/snackpod?retryWrites=true&w=majority&appName=SnackPod';

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("Connected");

//         const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
//         console.log(fetched_data); // Print the data
//     } catch (err) {
//         console.error("MongoDB connection error:", err);
//     }
// };

// module.exports = mongoDB;
