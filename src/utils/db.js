import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    // console.log("connection success");
  } catch (err) {
    throw new Error("conection failed");
  }
};

export default connect;
