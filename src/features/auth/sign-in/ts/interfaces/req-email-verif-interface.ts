import { UpdateUserUseCase } from "@/shared/ts/types/user.types";

interface ReqEmailVerifyBody {
  email: string;
  useCase: UpdateUserUseCase;
}

export type { ReqEmailVerifyBody };
