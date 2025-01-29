import { NextRequest, NextResponse } from "next/server";
import Registration, { setupIndexes } from "@/models/Registration";
import connectDB from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const data = await req.json();

    // Add timestamps
    const registrationData = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await setupIndexes();

    // Create new registration
    const registration = await Registration.create(registrationData);

    // You might want to send an email here about payment instructions
    // await sendPaymentInstructions(registration.email, registration.registrationNumber)

    return NextResponse.json(registration, { status: 201 });
  } catch (error: any) {
    console.error("Registration error:", error);
    console.log("error.code", error.code);

    if (error.code === 11000) {
      return new NextResponse(
        JSON.stringify({
          error:
            "You have already registered for this session. Each email address can only register once per session.",
        }),
        {
          status: 409, // HTTP 409 Conflict
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return NextResponse.json(
      { error: error.message || "Failed to create registration" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    // Parse search query
    const { searchParams } = new URL(req.url);
    const registrationNumber = searchParams.get("registrationNumber");

    // Search by registrationNumber if provided
    if (registrationNumber) {
      const registration = await Registration.findOne({
        registrationNumber,
      }).select("-__v");
      if (!registration) {
        return NextResponse.json(
          { error: "Registration not found." },
          { status: 404 }
        );
      }
      return NextResponse.json(registration);
    }

    // Otherwise, return all registrations
    const registrations = await Registration.find({})
      .sort({ createdAt: -1 })
      .select("-__v");

    return NextResponse.json(registrations);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch registrations" },
      { status: 500 }
    );
  }
}
