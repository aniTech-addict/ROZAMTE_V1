import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useState } from "react";
import { useLoading } from "@/hooks/use-loading";
import LoadingAnimation from "@/components/LoadingAnimation";

// Form validation schema
const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .toLowerCase(),
  userType: z.enum(["worker", "employer"], {
    required_error: "Please select whether you are a worker or employer",
  }),
});

type SignupFormData = z.infer<typeof signupSchema>;

// API function to call backend
const signupUser = async (data: SignupFormData) => {
  const response = axios.post("/api/users/signup", data);
  return (await response).data;
}

const Signup = () => {
  const { theme } = useTheme();
  const { startLoading, stopLoading } = useLoading();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const userType = watch("userType");

  const signupMutation = useMutation({
    mutationFn: signupUser,
    onMutate: () => {
      startLoading("Joining waitlist...");
    },
    onSuccess: (data) => {
      stopLoading();
      toast.success(data.message || "Successfully joined the waitlist!");
      setIsSuccess(true);
      reset(); // Reset form after successful submission
    },
    onError: (error: Error) => {
      stopLoading();
      toast.error(error.message || "Failed to join waitlist. Please try again.");
    },
  });

  const onSubmit = (data: SignupFormData) => {
    signupMutation.mutate(data);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="relative w-full max-w-md z-10">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          {isSuccess ? (
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-4">Welcome to Rozmate!</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Thank you for joining our waitlist. You'll be among the first to know when we launch India's all-in-one workforce platform.
              </p>
              <p className="text-sm text-muted-foreground">
                We'll send you an email notification as soon as we're ready to go live.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                ← Back to signup
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-center mb-6">
            <div className="flex h-18 w-auto items-center justify-center">
              <img
                src={theme === 'dark' ? "/ROZMATE-mark-white.png" : "/ROZMATE-mark--blue.png"}
                alt="Rozmate Mark"
                className="h-12 w-auto transition-opacity duration-300"
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4 text-center">Join the Rozmate Waitlist</h1>
          <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
            Be the first to access India's all-in-one workforce platform. Get notified the moment we launch.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                className={`h-12 text-lg px-4 rounded-xl border-2 transition-colors ${
                  errors.name
                    ? "border-destructive focus:border-destructive"
                    : "border-border focus:border-primary"
                }`}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@gmail.com"
                className={`h-12 text-lg px-4 rounded-xl border-2 transition-colors ${
                  errors.email
                    ? "border-destructive focus:border-destructive"
                    : "border-border focus:border-primary"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="userType" className="text-sm font-medium">
                I am a...
              </Label>
              <Select
                value={userType}
                onValueChange={(value: "worker" | "employer") => setValue("userType", value)}
              >
                <SelectTrigger className={`h-12 text-lg px-4 rounded-xl border-2 transition-colors ${
                  errors.userType
                    ? "border-destructive focus:border-destructive"
                    : "border-border focus:border-primary"
                }`}>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="worker" className="text-lg py-3">
                    Worker (Looking for jobs)
                  </SelectItem>
                  <SelectItem value="employer" className="text-lg py-3">
                    Employer (Looking to hire)
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.userType && (
                <p className="text-sm text-destructive">{errors.userType.message}</p>
              )}
            </div>

                <Button
                  type="submit"
                  disabled={signupMutation.isPending}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg h-14 text-lg font-semibold rounded-xl mt-8 btn-interactive disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {signupMutation.isPending ? (
                    <>
                      <LoadingAnimation size="sm" className="mr-2" />
                      Joining Waitlist...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
