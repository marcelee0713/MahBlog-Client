import { z, ZodType } from "zod";
import { DeviceVerificationFormData } from "../ts/interfaces/device-verif-interface";

export const DeviceVerifSchema: ZodType<DeviceVerificationFormData> = z.object({
  code: z
    .string()
    .trim()
    .min(1, { message: "Enter the code" })
    .min(6, { message: "Maximum of 6 characters only." }),
  token: z.string(),
});
