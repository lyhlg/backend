import mongoose from 'mongoose';

const MONGO_URL = 'mongodb://localhost/dbmaster';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connected to mongodb');
    })
    .catch(e => {
      console.error(e);
    });
};
