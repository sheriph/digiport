import mongoose from "mongoose";

interface MongooseConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseConnection | undefined;
}

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached: MongooseConnection = global.mongoose ?? {
  conn: null,
  promise: null,
};

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(process.env.MONGODB_URI!, opts)
      .then((mongoose) => {
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

export default connectDB;
