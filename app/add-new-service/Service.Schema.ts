import { z } from "zod";

const onlyText = /^[A-Za-z\s]+$/;

const serviceStepSchema = z.object({
  stepType: z.string().min(1, "Step type is required"),
  stepName: z.string().min(1, "Step name is required"),
  counterNo: z.number().or(z.nan()).refine((val) => !Number.isNaN(val) && val >= 1, "Counter No. is required"),
  deliveryPerson: z.string().optional(),
  performingDepartment: z.string().optional(),
  careTeam: z.string().optional(),
});

export const serviceFormSchema = z.object({

  parentHospital: z
    .string()
    .min(1, "Parent hospital is required").regex(onlyText, "Enter Valid Character"),

  branchUnit: z.string().min(1, "Branch unit is required").regex(onlyText, "Enter Valid Character"),

  serviceName: z.string().min(1, "Service name is required").regex(onlyText, "Enter Valid Character"),

  serviceCode: z.string().min(1, "Service code is required").regex(onlyText, "Enter Valid Character"),

  serviceCategory: z.string().min(1, "Service category is required").regex(onlyText, "Enter Valid Character"),

  serviceType: z.string().min(1, "Service type is required").regex(onlyText, "Enter Valid Character"),

  executedByThirdParty: z.boolean(),

  thirdPartyVendor: z.string().min(1, "Party Vendor is required"),

  performingDepartment: z.string().min(1, "Performing department is required"),

  primaryServiceProvider: z.string().min(1, "Primary service provider is required"),

  basePrice: z.string().min(1, "Base price is required").regex(/^\d+(\.\d{1,2})?$/, "Enter a valid price"),

  totalTaxRate: z.string().min(1, "Total tax rate is required").regex(/^\d+(\.\d{1,2})?$/, "Enter a valid tax rate"),

  cgst: z.string().min(1, "CGST is required").regex(/^\d+(\.\d{1,2})?$/, "Enter a valid CGST rate"),

  sgst: z.string().min(1, "SGST is required").regex(/^\d+(\.\d{1,2})?$/, "Enter a valid SGST rate"),

  steps: z.array(serviceStepSchema).min(1, "At least one step is required"),
});

export type ServiceFormData = z.infer<typeof serviceFormSchema>;