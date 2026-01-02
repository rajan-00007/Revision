import { z } from "zod";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

export const taskSchema = z.object({
  taskName: z
    .string()
    .min(2, "Task must be at least 2 characters")
    .max(30),

  day: z
    .enum(DAYS)
    .optional()
    .refine((val) => val !== undefined, {
      message: "Please select a day",
    }),
});

export type TaskFormValues = z.infer<typeof taskSchema>;
