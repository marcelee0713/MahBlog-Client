import { z, ZodType } from "zod";
import { ResetPassFormData } from "../ts/interfaces/reset-pass-interface";

const passRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.+=_]).{8,}$/;

export const ResetPassSchema: ZodType<ResetPassFormData> = z
  .object({
    newPassword: z
      .string()
      .min(1, { message: "Please provide a password" })
      .min(8, { message: "Password must contain at least 8 character(s)" })
      .regex(passRegExp, {
        message: "Invalid password, please follow the format",
      }),
    cfrmPassword: z
      .string()
      .min(1, { message: "Please provide an input" })
      .min(5, { message: "This field must contain at least 8 character(s)" })
      .max(20),
  })
  .refine((data) => data.newPassword === data.cfrmPassword, {
    message: "Passwords do not match",
    path: ["cfrmPassword"],
  });
