import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`Connected on ${con.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`Error Connecte DB : ${err.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDb;
