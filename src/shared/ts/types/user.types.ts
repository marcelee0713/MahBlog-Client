export type Roles = "USER" | "ADMIN";

export type Status = "ACTIVE" | "SUSPENDED" | "BANNED";

export const UpdateUserUseCaseArr = [
  "CHANGE_PASSWORD",
  "CHANGE_EMAIL",
  "VERIFY_EMAIL",
  "VERIFY_EMAIL_BY_TOKEN",
  "RESET_PASSWORD",
] as const;

export type UpdateUserUseCase = (typeof UpdateUserUseCaseArr)[number];

export const AuthenticatedAsArr = ["LOCAL", "GOOGLE"] as const;

export type AuthenticatedAs = (typeof AuthenticatedAsArr)[number];
