import { z, ZodType } from "zod";
import { ForgotPassFormData } from "../ts/interface/forgot-pass-interface";

export const ForgotPassSchema: ZodType<ForgotPassFormData> = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Enter an email" })
    .email({ message: "Invalid email" }),
});
