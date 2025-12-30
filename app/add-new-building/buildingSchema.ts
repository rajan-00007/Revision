import { z } from "zod";


export const selectOptionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const validationPatterns = {

  buildingName: /^[A-Za-z0-9\s\-'.]+$/, // Letters, numbers, spaces, hyphens, periods

  displayName: /^[A-Za-z\s\-'.]+$/, // Letters, spaces, hyphens, periods

  buildingId: /^[A-Za-z][A-Za-z0-9_-]+$/, // Starts with letter, then alphanumeric, underscore, hyphen

  generalText: /^[A-Za-z0-9\s\-'.,]+$/, // General text with basic punctuation

  address: /^[A-Za-z0-9\s\-'.,/#&()]+$/, // Address with common symbols

  locationName: /^[A-Za-z\s\-'.]+$/, // City/State/Country names

  personName: /^[A-Za-z\s\-'.]+$/, // Person names

  adminDetails: /^[A-Za-z0-9\s\-'.,:;!?()]+$/, // Admin details with punctuation

  locationMarkers: /^[A-Za-z0-9\s\-'.,]+$/, // Location markers
} ;

// Helper validation messages
const errorMessages = {
  noSpaces: "No leading/trailing spaces",
  buildingIdFormat: "Only letters, numbers, _, - allowed",
  nameFormat: "Only letters, spaces, -, ', . allowed",
  addressFormat: "Only letters, numbers, spaces, and basic punctuation",
  textFormat: "Only letters, numbers, spaces, and basic punctuation",
  locationFormat: "Only letters, spaces, -, ', . allowed",
  emailFormat: "Invalid email format",
  phoneFormat: "10-digit Indian number starting with 6-9",
  pinFormat: "6 digits required",
  fileSize: "File must be <5MB",
  fileType: "Only JPG, PNG, WebP allowed",
};

// Main form schema
export const buildingFormSchema = z.object({
  // Basic Details
  buildingName: z.string()
    .min(1, "Required")
    .min(3, "Min 3 characters")
    .max(100, "Max 100 characters")
    .regex(validationPatterns.buildingName, "Invalid characters")
    .refine(val => !val.startsWith(" ") && !val.endsWith(" "), errorMessages.noSpaces)
    .refine(val => !val.includes("  "), "No double spaces"),

  displayName: z.string()
    .min(1, "Required")
    .min(2, "Min 2 characters")
    .max(50, "Max 50 characters")
    .regex(validationPatterns.displayName, "Invalid characters")
    .refine(val => !val.startsWith(" ") && !val.endsWith(" "), errorMessages.noSpaces),

  buildingId: z.string()
    .min(1, "Required")
    .min(3, "Min 3 characters")
    .max(20, "Max 20 characters")
    .regex(validationPatterns.buildingId, errorMessages.buildingIdFormat),

  // Parent Campus - Optional
  parentCampus: z.string()
    .optional()
    .refine(val => !val || validationPatterns.generalText.test(val), "Invalid characters"),

  // Image upload - Required
  image: z.custom<FileList>()
    .refine((files) => files?.length > 0, "Image is required")
    .refine((files) => !files || Array.from(files).every(f => f.size <= 5 * 1024 * 1024), errorMessages.fileSize)
    .refine((files) => !files || Array.from(files).every(f =>
      ["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(f.type)
    ), errorMessages.fileType),

  // Location Details
  addressLine1: z.string()
    .min(1, "Required")
    .min(5, "Min 5 characters")
    .max(200, "Max 200 characters")
    .regex(validationPatterns.address, "Invalid characters")
    .refine(val => !val.startsWith(" ") && !val.endsWith(" "), errorMessages.noSpaces),

  addressLine2: z.string()
    .optional()
    .refine(val => !val || validationPatterns.address.test(val), "Invalid characters"),

  city: z.string()
    .min(1, "Required")
    .min(2, "Min 2 characters")
    .max(50, "Max 50 characters")
    .regex(validationPatterns.locationName, "Invalid characters")
    .refine(val => !val.startsWith(" ") && !val.endsWith(" "), errorMessages.noSpaces),

  state: z.string()
    .optional()
    .refine(val => !val || validationPatterns.locationName.test(val), "Invalid characters"),

  country: z.string()
    .optional()
    .refine(val => !val || validationPatterns.locationName.test(val), "Invalid characters"),

  pinCode: z.string()
    .min(1, "Required")
    .regex(/^\d{6}$/, errorMessages.pinFormat),

  // Coordinates
  latitude: z.string()
    .min(1, "Required")
    .regex(/^-?\d+(\.\d+)?$/, "Invalid number")
    .refine(val => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= -90 && num <= 90;
    }, "Must be between -90 and 90"),

  longitude: z.string()
    .min(1, "Required")
    .regex(/^-?\d+(\.\d+)?$/, "Invalid number")
    .refine(val => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= -180 && num <= 180;
    }, "Must be between -180 and 180"),

  // Location Markers
  locationMarkers: z.string()
    .min(1, "Required")
    .min(3, "Min 3 characters")
    .max(100, "Max 100 characters")
    .regex(validationPatterns.locationMarkers, "Invalid characters")
    .refine(val => !val.startsWith(" ") && !val.endsWith(" "), errorMessages.noSpaces),

  // Contact Details
  contactPerson: z.string()
    .optional()
    .refine(val => !val || (!val.startsWith(" ") && !val.endsWith(" ")), errorMessages.noSpaces),

  administrationDetails: z.string()
    .optional(),

  email: z.string()
    .optional()
    .refine(val => !val || z.string().email().safeParse(val).success, errorMessages.emailFormat)
    .refine(val => !val || val.length <= 100, "Max 100 characters"),

  contactNumber: z.string()
    .optional()
    .refine(val => !val || /^[6-9]\d{9}$/.test(val), errorMessages.phoneFormat),

  // Linked Branches
  linkedBranches: z.array(selectOptionSchema).optional(),
});

// Type inference
export type BuildingFormValues = z.infer<typeof buildingFormSchema>;
export type SelectOption = z.infer<typeof selectOptionSchema>;