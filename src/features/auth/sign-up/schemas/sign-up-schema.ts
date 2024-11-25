import { z, ZodType } from "zod";
import { SignUpFormData } from "../ts/interfaces/sign-up-interface";

const passRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.+=_]).{8,}$/;

export const SignUpSchema: ZodType<SignUpFormData> = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, { message: "Enter your first name" })
      .max(50, { message: "Maximum of 50 characters only" }),
    lastName: z
      .string()
      .trim()
      .min(1, { message: "Enter your last name" })
      .max(80, { message: "Maximum of 80 characters only" }),
    email: z.string().min(1, { message: "Please provide an email" }).email(),
    password: z
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
  .refine((data) => data.password === data.cfrmPassword, {
    message: "Passwords do not match",
    path: ["cfrmPassword"],
  });
