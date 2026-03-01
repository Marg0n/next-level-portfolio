/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define DB!!");
}

//? It lets TypeScript know that mongoose is in global object
// declare global {
//   let mongoose: {
//     conn: Mongoose | null;
//     promise: Promise<Mongoose> | null;
//   };
// }

//? global cash check setup which is good for Next.js hot reload
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  // if (!cached.promise) {
  //   cached.promise = mongoose.connect(MONGODB_URI, {
  //     dbName: "portfolio",
  //   });
  // }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
