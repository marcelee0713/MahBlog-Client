import { FieldErrors, UseFormRegister } from "react-hook-form";
import { DeleteUserFormData } from "../../../ts/interface/settings-interfaces";

interface props {
  errors: FieldErrors<DeleteUserFormData>;
  register: UseFormRegister<DeleteUserFormData>;
}

export const DeleteUserInput: React.FC<props> = ({ errors, register }) => {
  return (
    <div className="relative flex flex-col gap-1 h-[50px] text-sm group">
      <input
        type="text"
        autoComplete="off"
        placeholder="sad to see you go..."
        className={`default-input-border  ${
          errors.confirmation && "!border-2 !border-red-400"
        } `}
        {...register("confirmation")}
      />

      {errors.confirmation && (
        <div className="flex gap-2 items-center font-normal text-red-400 px-3">
          <div>{errors.confirmation?.message}</div>
        </div>
      )}
    </div>
  );
};
