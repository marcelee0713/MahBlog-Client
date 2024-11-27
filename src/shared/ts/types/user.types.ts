export type Roles = "USER" | "ADMIN";

export type Status = "ACTIVE" | "SUSPENDED" | "BANNED";

export const UpdateUserUseCaseArr = [
  "CHANGE_PASSWORD",
  "CHANGE_EMAIL",
  "VERIFY_EMAIL",
  "RESET_PASSWORD",
] as const;

export type UpdateUserUseCase = (typeof UpdateUserUseCaseArr)[number];