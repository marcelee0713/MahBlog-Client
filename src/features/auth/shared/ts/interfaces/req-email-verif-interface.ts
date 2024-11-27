import { UpdateUserUseCase } from "@/shared/ts/types/user.types";

interface ReqEmailVerifyBody {
  email?: string;
  useCase: UpdateUserUseCase;
  token?: string;
}

export type { ReqEmailVerifyBody };
