import mongoose from 'mongoose';

const connectMongo = () => {

  const urlMongoose = process.env.DB_URL_DATABASE;
  
  return mongoose.
  connect(
    urlMongoose, 
    {
      socketTimeoutMS: 30000,
      keepAlive: true,
      autoIndex: false,
      dbName: process.env.DB_NAME,
      authSource: process.env.DB_AUTH_SOURCE,
      auth: {
        username: process.env.DB_USER_NAME,
        password: process.env.DB_USER_PASSWORD,
      },
    }
  )
}

export default connectMongo;

