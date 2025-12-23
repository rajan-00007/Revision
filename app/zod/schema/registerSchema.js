import { z } from "zod";

/*Address Schema (Nested Object)*/
const addressSchema = z.object({
  city: z.string().min(2, "City is required"),
  pincode: z
    .string()
    .regex(/^[0-9]{6}$/, "Pincode must be 6 digits"),
});

/* Main Register Schema */
export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(20),

    email: z
      .string()
      .email("Invalid email")
      .transform((val) => val.toLowerCase()),

    password: z.string().min(6, "Password must be 6 characters"),

    confirmPassword: z.string(),

    age: z
      .number()
      .min(18, "Must be 18+")
      .max(60),

    role: z.enum(["admin", "user", "manager"], {
      errorMap: () => ({ message: "Role is required" }),
    }),

    address: addressSchema,

    skills: z
      .array(z.string())
      .min(1, "Select at least one skill"),

    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: "You must accept terms" }),
    }),
  })

  /* validation*/
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
