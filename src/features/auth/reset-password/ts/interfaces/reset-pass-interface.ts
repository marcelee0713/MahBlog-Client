import { UpdateUserUseCase } from "@/shared/ts/types/user.types";

export interface ResetPassFormData {
  currentPassword: string;
  password: string;
  cfrmPassword: string;
}

type RemoveCurrPass = Omit<ResetPassFormData, "cfrmPassword">;

export interface ResetPassReqBody extends RemoveCurrPass {
  token: string;
  removeSessions: boolean;
  useCase: UpdateUserUseCase;
}
