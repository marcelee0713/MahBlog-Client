import { z, ZodType } from "zod";
import {
  ChangeEmailFormData,
  ChangeNameFormData,
  ChangePasswordFormData,
  DeleteUserFormData,
} from "../ts/interface/settings-interfaces";
import { UpdateUserUseCase } from "@/shared/ts/types/user.types";

export const ChangeNameSchema: ZodType<ChangeNameFormData> = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "Enter your first name" })
    .max(50, { message: "Maximum of 50 characters only" }),
  middleName: z
    .string()
    .trim()
    .max(50, { message: "Maximum of 50 characters only" })
    .optional(),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Enter your last name" })
    .max(80, { message: "Maximum of 80 characters only" }),
});

const passRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.+=_]).{8,}$/;

export const ChangePasswordSchema: ZodType<ChangePasswordFormData> = z
  .object({
    password: z
      .string()
      .min(1, { message: "Please provide your current password" }),
    newPassword: z
      .string()
      .min(1, { message: "Please provide a new password" })
      .min(8, { message: "Password must contain at least 8 character(s)" })
      .regex(passRegExp, {
        message: "Invalid password, please follow the format",
      }),
    cfrmPassword: z
      .string()
      .min(1, { message: "Please provide an input" })
      .min(5, { message: "This field must contain at least 8 character(s)" })
      .max(20),
    useCase: z.literal("CHANGE_PASSWORD" as UpdateUserUseCase),
    removeSessions: z.boolean(),
  })
  .refine((data) => data.newPassword === data.cfrmPassword, {
    message: "Passwords do not match",
    path: ["cfrmPassword"],
  });

export const ChangeEmailSchema: ZodType<ChangeEmailFormData> = z
  .object({
    email: z.string().trim().email(),
    newEmail: z
      .string()
      .trim()
      .min(1, { message: "Enter your new email" })
      .email({ message: "Enter a valid email" }),
    useCase: z.literal("CHANGE_EMAIL" as UpdateUserUseCase),
  })
  .refine((data) => data.email !== data.newEmail, {
    message: "You are currently using this email",
    path: ["newEmail"],
  });

export const DeleteUserSchema: ZodType<DeleteUserFormData> = z
  .object({
    confirmation: z.string().trim(),
  })
  .refine((data) => data.confirmation === "delete my account", {
    message: `To continue, type "delete my account" :(`,
    path: ["confirmation"],
  });
