import mongoose from "mongoose";
import app from "./route";

const port = 50000; // default port to listen

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();
