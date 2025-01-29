import mongoose from "mongoose";
import { IRegistration } from "@/types/models";

const registrationSchema = new mongoose.Schema<IRegistration>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    organization: { type: String, required: true },
    session: { type: String, required: true },
    requirements: { type: String },
    registrationNumber: { type: String, required: true, unique: true },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    autoIndex: false, // Disable autoIndex in production environments
  }
);

// Add the unique compound index programmatically
const Registration =
  mongoose.models.Registration ||
  mongoose.model<IRegistration>("Registration", registrationSchema);

export async function setupIndexes() {
  console.log("Ensuring unique index...");
  try {
    await Registration.collection.createIndex(
      { email: 1, session: 1 }, // Compound index on email and session
      { unique: true } // Enforce uniqueness
    );
    console.log("Unique index created successfully.");
  } catch (err: any) {
    console.error("Error creating unique index:", err.message);
    throw new Error(err);
  }
}

export default Registration;
