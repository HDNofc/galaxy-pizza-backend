import mongoose from 'mongoose';

mongoose.Promise = Promise;

const connectLink = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/galaxy-pizza';

mongoose.connect(connectLink, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

export { db, mongoose };
