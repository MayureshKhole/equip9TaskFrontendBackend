import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;
  const MONGO_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-of0omux-shard-00-00.auqnaht.mongodb.net:27017,ac-of0omux-shard-00-01.auqnaht.mongodb.net:27017,ac-of0omux-shard-00-02.auqnaht.mongodb.net:27017/equip?ssl=true&replicaSet=atlas-4qzukp-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default DBConnection;
