import { z } from "zod";

export const registerSchema = z.object({
    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .max(30),

    lastName: z
        .string()
        .min(2)
        .max(30),

    email: z.string()
        .email("Enter a valid email"),

    phone: z
        .string()
        .regex(/^[0-9]{10}$/, "Phone must be 10 digits"),


    company: z.string()
        .optional(),

    designation: z
        .string()
        .min(2, "Designation too short")
        .optional(),

    city: z.string().min(2, { message: "City must be at least 2 characters" }),
    state: z.string().min(2, { message: "State must be at least 2 characters" }),


    zip: z
        .string()
        .regex(/^[0-9]{6}$/, "ZIP must be 6 digits"),

    username: z
        .string()
        .min(4)
        .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers & _"),

    password: z
        .string()
        .min(8, "Min 8 characters")
        .regex(/[A-Z]/, "Must contain 1 uppercase")
        .regex(/[0-9]/, "Must contain 1 number"),

    confirmPassword: z.string(),

    gender: z.enum(["male", "female", "other"], {
        message: "Select gender",
    }),

    role: z.enum(["user", "admin"]),

    terms: z.literal(true, {
        message: "You must accept terms",
    }),


    notifications: z.boolean(),


}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
