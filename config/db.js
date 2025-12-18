import { MongoClient } from 'mongodb';

let db;

const connectDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db('scholarstreamDB');
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
  }
};

export const getDB = () => db;
export default connectDB;
