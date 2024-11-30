import { z, ZodType } from "zod";
import { ReportType, ReportCategoriesArr } from "../ts/types/report-types";
import { ReportIssueFormData } from "../ts/interfaces/report-interface";

export const ReportIssueSchema: ZodType<ReportIssueFormData> = z.object({
  userId: z.string().trim().optional(),
  description: z
    .string()
    .min(1, { message: "Describe your issue" })
    .max(900, { message: "Maximum length of 900 characters only!" }),
  email: z
    .string()
    .min(1, { message: "Enter an email" })
    .email({ message: "Invalid email" }),
  type: z.literal("ISSUE" as ReportType),
  category: z.enum(ReportCategoriesArr),
});
