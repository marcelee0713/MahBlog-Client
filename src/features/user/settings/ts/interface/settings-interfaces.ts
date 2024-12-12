import { UpdateUserUseCase } from "@/shared/ts/types/user.types";

export interface ChangeNameFormData {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface ChangePasswordFormData {
  password: string;
  newPassword: string;
  cfrmPassword: string;
  useCase: UpdateUserUseCase;
  removeSessions: boolean;
}

export interface ChangeEmailFormData {
  email: string;
  newEmail: string;
  useCase: UpdateUserUseCase;
}

export interface DeleteUserFormData {
  confirmation: string;
  password?: string;
}
