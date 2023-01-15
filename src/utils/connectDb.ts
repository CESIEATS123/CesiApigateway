import mongoose from 'mongoose';
import config from 'config';
import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` })


//const dbName = config.get<string>('dbName');
//const dbPass = config.get<string>('dbPass');


const dbUrl = 'mongodb://cesieat:password123@localhost:6000/jwtAuth?authSource=admin';

//const dbUrl = `mongodb://${dbName}:${dbPass}@localhost:6000/jwtAuth?authSource=admin`;


const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log('Database connected...');
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;

