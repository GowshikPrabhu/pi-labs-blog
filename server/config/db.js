const mongoose = require('mongoose');

const connectDB = async () => {
  let MONGO_URI = process.env.DB_URI;

  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  console.log(
    '\x1b[36m%s\x1b[0m',
    `MongoDB connected HOST: ${conn.connection.host}`
  );
};

module.exports = connectDB;
