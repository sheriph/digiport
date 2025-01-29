import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { RegistrationDialog } from "./registration-dialog";
import { motion } from "framer-motion";

const VerifySeatDialog = ({ trigger }: { trigger: React.ReactNode }) => {
  const [registrationCode, setRegistrationCode] = useState("");
  const [registrationData, setRegistrationData] = useState<any>(null);
  const [isFetching, setIsFetching] = useState(false);

  const handleVerify = async () => {
    if (registrationCode.length !== 6) {
      toast.error("❌ Invalid registration code", {
        description: "Please enter a valid 6-digit registration code.",
      });
      return;
    }

    setIsFetching(true);

    try {
      const response = await fetch(
        `/api/registrations?registrationNumber=${registrationCode}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unable to fetch registration.");
      }

      const data = await response.json();
      setRegistrationData(data);

      toast.success("🎉 Seat verified successfully!", {
        description: `Your seat for the session "${data.session}" is confirmed!`,
      });
    } catch (error: any) {
      toast.error("❌ Verification failed", {
        description: error.message,
      });
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="DialogContent">
        <DialogHeader>
          <DialogTitle>Verify Your Seat</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Enter 6-digit registration code"
            value={registrationCode}
            onChange={(e) =>
              setRegistrationCode(e.target.value.replace(/\D/g, "").slice(0, 6))
            }
            maxLength={6}
          />
          <Button
            onClick={handleVerify}
            className="w-full bg-[#ff4a4a] hover:bg-[#ff4a4a]/90"
            disabled={isFetching}
          >
            {isFetching ? "Verifying..." : "Verify Seat"}
          </Button>
          {registrationData && (
            <div className="border p-4 rounded-md bg-gray-100">
              <h4 className="font-bold text-lg">Registration Details:</h4>
              <p>
                <strong>Name:</strong> {registrationData.name}
              </p>
              <p>
                <strong>Email:</strong> {registrationData.email}
              </p>
              <p>
                <strong>Session:</strong> {registrationData.session}
              </p>
              <p>
                <strong>Organization:</strong> {registrationData.organization}
              </p>
              <p>
                <strong>Payment Status:</strong>{" "}
                {registrationData.paymentStatus}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFE14D] to-[#ff4a4a] opacity-50" />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 pt-32">
        <div className="mx-auto w-full px-4 md:w-[90%] max-w-7xl">
          <div className="flex flex-col items-center justify-center p-4 md:p-16 space-y-8 backdrop-blur-sm bg-white/30 rounded-lg">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none text-center text-black"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              DIGITAL TRANSFORMATION MASTERCLASS - PORTUGAL
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-center max-w-3xl text-black/80"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Transform Your Digital Leadership Skills in the Heart of Porto
            </motion.p>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {[
                { number: "2", text: "Intensive Days" },
                { number: "50", text: "Select Participants" },
                { number: "7", text: "Industry Experts" },
                { number: "100%", text: "Hands-on Approach" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/50 p-4 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-black">
                    {item.number}
                  </div>
                  <div className="text-black/80">{item.text}</div>
                </div>
              ))}
            </motion.div>
            <motion.div
              className="bg-black text-white p-6 rounded-lg text-center shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <p className="text-xl font-bold mb-2">
                Join our 3-Day Intensive Training:
              </p>
              <p>Monthly dates available</p>
              <p className="text-[#FFE14D]">
                Early Bird Registration Now Open!
              </p>
            </motion.div>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <VerifySeatDialog
                trigger={
                  <Button
                    size="lg"
                    className="bg-[#ff4a4a] hover:bg-[#ff4a4a]/90 text-white"
                  >
                    Verify My Seat
                  </Button>
                }
              />
              <RegistrationDialog
                initialView="visa"
                trigger={
                  <Button
                    size="lg"
                    className="bg-[#ff4a4a] hover:bg-[#ff4a4a]/90 text-white"
                  >
                    Request Visa Support
                  </Button>
                }
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
