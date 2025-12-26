import { z } from "zod";

export const studentSchema = z.object({
  students: z.array(
    z.object(
      {
        name: z
          .string()
          .min(2, "Name must have at least 2 characters")
          .max(100),

        email: z
          .string()
          .email("Invalid email"),

        age: z
          .number()
          .min(18, "Min age 18")
          .max(100, "Max age 100"),

        course: z
          .string()
          .min(2, "Course must have at least 2 characters"),

        mobile: z
          .string()
          .length(10, "Mobile must be 10 digits"),

      })

  )
    .min(1, "Add at least one student"),
});

export type StudentFormType = z.infer<typeof studentSchema>;
