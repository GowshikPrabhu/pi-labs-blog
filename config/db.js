const mongoose = require('mongoose');

const connectDB = async () => {
  let MONGO_URI = process.env.DB_DEV_URI;
  if (process.env.NODE_ENV === 'production') {
    MONGO_URI = process.env.DB_URI;
  }

  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  console.log('MongoDB connected HOST:', conn.connection.host);
};

module.exports = connectDB;
