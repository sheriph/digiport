import { Document } from "mongoose";

export interface IRegistration extends Document {
    name: string;
    email: string;
    organization: string;
    session: string;
    requirements?: string;
    registrationNumber: string;
    createdAt: Date;
    updatedAt: Date;
    paymentStatus: "pending" | "completed" | "failed";
  }