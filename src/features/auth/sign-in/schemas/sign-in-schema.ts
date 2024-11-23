import { z, ZodType } from "zod";
import { SignInFormData } from "../ts/interfaces/sign-in-interface";

export const SignInSchema: ZodType<SignInFormData> = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Enter an email" })
    .email({ message: "Invalid email" }),
  password: z.string().trim().min(1, { message: "Provide a password" }),
});
