import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { IRegistration } from "@/types/models";

interface RegistrationDialogProps {
  initialView?: "registration" | "visa";
  trigger: React.ReactNode;
}

export function RegistrationDialog({
  initialView = "registration",
  trigger,
}: RegistrationDialogProps) {
  const [view, setView] = useState(initialView);
  const [visaRequestNumber, setVisaRequestNumber] = useState("");
  const [registrationData, setRegistrationData] = useState<any>(null);
  const [selectedSession, setSelectedSession] = useState("");
  const [availableSessions, setAvailableSessions] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate session dates
  useEffect(() => {
    const generateSessions = () => {
      const sessions = [];
      const months = [
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const currentYear = new Date().getFullYear();

      for (const month of months) {
        const sessionDate = `${month} 27-29, ${currentYear}`;
        sessions.push(sessionDate);
      }

      return sessions;
    };

    setAvailableSessions(generateSessions());
  }, []);

  // Handle registration form submission
  const handleRegistrationSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const session = formData.get("session");
    if (!session) {
      toast.error("Please select a session date");
      return;
    }

    const registrationNumber = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const registrationData: Partial<IRegistration> = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      organization: formData.get("organization") as string,
      session: session as string,
      requirements: (formData.get("requirements") as string) || undefined,
      registrationNumber,
      paymentStatus: "pending",
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      const data = await response.json();

      if (response.status === 409) {
        toast.error("🚫 Registration Failed", {
          description: data.error,
        });
        return;
      }

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      toast.success(
        <div>
          <p>🎉 Congratulations! Your registration is complete.</p>
          <p>🔢 Registration Number: {registrationNumber}</p>
          <p>📧 Payment instructions have been sent to your email.</p>
        </div>
      );
    } catch (error) {
      toast.error("😓 Oops! Registration hit a snag. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle visa request form submission
  const handleVisaRequestSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (visaRequestNumber.length !== 6) {
      toast.error("❌ Invalid registration number", {
        description: "Please enter a valid 6-digit registration number.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `/api/registrations?registrationNumber=${visaRequestNumber}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unable to fetch registration.");
      }

      const data = await response.json();
      setRegistrationData(data);

      toast.success("🎉 Registration found!", {
        description: `You are registered for the session: ${data.session}.`,
      });
    } catch (error: any) {
      toast.error("😓 Oops! Unable to process your request.", {
        description: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] DialogContent">
        <DialogHeader>
          <DialogTitle>
            {view === "registration" ? "Registration" : "Visa Letter Request"}
          </DialogTitle>
        </DialogHeader>
        {view === "registration" ? (
          <form onSubmit={handleRegistrationSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="As per official documents"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Business email preferred"
                required
              />
            </div>
            <div>
              <Label htmlFor="organization">Current Organization</Label>
              <Input id="organization" name="organization" required />
            </div>
            <div>
              <Label htmlFor="session">Session Date</Label>
              <Select
                name="session"
                required
                value={selectedSession}
                onValueChange={setSelectedSession}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a session" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {availableSessions.map((session) => (
                    <SelectItem key={session} value={session}>
                      {session}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="requirements">Special Requirements</Label>
              <Input
                id="requirements"
                name="requirements"
                placeholder="Dietary, accessibility, etc."
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#ff4a4a] hover:bg-[#ff4a4a]/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVisaRequestSubmit} className="space-y-4">
            <div>
              <Label htmlFor="registrationNumber">
                6-Digit Registration Number
              </Label>
              <Input
                id="registrationNumber"
                placeholder="Enter your 6-digit number"
                value={visaRequestNumber}
                onChange={(e) =>
                  setVisaRequestNumber(
                    e.target.value.replace(/\D/g, "").slice(0, 6)
                  )
                }
                maxLength={6}
                required
              />
            </div>
            {registrationData && (
              <div className="border p-4 rounded-md">
                <h4 className="font-bold">Registration Details:</h4>
                <p>Name: {registrationData.name}</p>
                <p>Email: {registrationData.email}</p>
                <p>Session: {registrationData.session}</p>
                <p>Organization: {registrationData.organization}</p>
                <p>Payment Status: {registrationData.paymentStatus}</p>
              </div>
            )}
            <Button
              type="submit"
              className="w-full bg-[#FFE14D] hover:bg-[#FFE14D]/90 text-black"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Searching..." : "Request Visa Letter"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
