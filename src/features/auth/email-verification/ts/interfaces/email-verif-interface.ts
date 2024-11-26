import { UpdateUserUseCase } from "@/shared/ts/types/user.types";

interface EmailVerifyReq {
  token: string | null;
  useCase: UpdateUserUseCase;
}

export type { EmailVerifyReq };
