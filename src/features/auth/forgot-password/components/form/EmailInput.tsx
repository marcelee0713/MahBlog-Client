import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ForgotPassFormData } from "../../ts/interface/forgot-pass-interface";

interface props {
  errors: FieldErrors<ForgotPassFormData>;
  register: UseFormRegister<ForgotPassFormData>;
}

export const EmailInput: React.FC<props> = ({ errors, register }) => {
  return (
    <div className="relative flex flex-col gap-1 h-[50px] text-sm group">
      <input
        id={"email"}
        type="email"
        autoComplete="off"
        className={`default-input-border  ${
          errors.email && "!border-2 !border-red-400"
        } `}
        {...register("email")}
      />

      <label
        htmlFor={"email"}
        className={`default-input-label ${
          errors.email && "!text-red-400 font-bold"
        }`}
      >
        Email
      </label>

      {errors.email && (
        <div className="flex gap-2 items-center font-normal text-red-400 px-3">
          <div>{errors.email?.message}</div>
        </div>
      )}
    </div>
  );
};
