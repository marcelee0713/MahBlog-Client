import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ChangeEmailFormData } from "../../../ts/interface/settings-interfaces";

interface props {
  errors: FieldErrors<ChangeEmailFormData>;
  register: UseFormRegister<ChangeEmailFormData>;
}

export const EmailInput: React.FC<props> = ({ errors, register }) => {
  return (
    <div className="relative flex flex-col gap-1 h-[50px] text-sm group">
      <input
        id={"newEmail"}
        type="email"
        autoComplete="off"
        className={`default-input-border  ${
          errors.newEmail && "!border-2 !border-red-400"
        } `}
        {...register("newEmail")}
      />

      <label
        htmlFor={"newEmail"}
        className={`default-input-label ${
          errors.newEmail && "!text-red-400 font-bold"
        }`}
      >
        New Email
      </label>

      {errors.newEmail && (
        <div className="flex gap-2 items-center font-normal text-red-400 px-3">
          <div>{errors.newEmail?.message}</div>
        </div>
      )}
    </div>
  );
};
