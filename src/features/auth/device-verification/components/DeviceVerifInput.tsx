import { FieldErrors, UseFormRegister } from "react-hook-form";
import { DeviceVerificationFormData } from "../ts/interfaces/device-verif-interface";

interface props {
  errors: FieldErrors<DeviceVerificationFormData>;
  register: UseFormRegister<DeviceVerificationFormData>;
}

export const CodeInput: React.FC<props> = ({ errors, register }) => {
  return (
    <div className="relative flex flex-col gap-1 h-[50px] text-sm group">
      <input
        id={"code"}
        type="text"
        autoComplete="off"
        maxLength={6}
        onInput={(e) => {
          e.currentTarget.value = e.currentTarget.value.toUpperCase();
        }}
        className={`default-input-border  ${
          errors.code && "!border-2 !border-red-400"
        } `}
        {...register("code")}
      />

      <label
        htmlFor={"code"}
        className={`default-input-label ${
          errors.code && "!text-red-400 font-bold"
        }`}
      >
        Code
      </label>

      {errors.code && (
        <div className="flex gap-2 items-center font-normal text-red-400 px-3">
          <div>{errors.code.message}</div>
        </div>
      )}
    </div>
  );
};
