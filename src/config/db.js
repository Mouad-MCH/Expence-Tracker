import mongoose, { mongo } from "mongoose";
import { ENV } from '../../env.js'

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.DATABASE_URL);
    console.log(`database is conected ${ conn.connection.host }`)
  }catch(err) {
    console.error("DATABASE connection error:", err.message);
    process.exit(1);
  }
}