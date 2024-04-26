require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection Success!");
  } catch (error) {
    console.error("MongoDB connection Failed!");
    process.exit(1);
  }
};
module.exports = connectDB;
