import React from "react";
import { ChangeNameFormData } from "../../../ts/interface/settings-interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ChangeNameKeys } from "../../../ts/types/settings-types";

interface props {
  errors: FieldErrors<ChangeNameFormData>;
  register: UseFormRegister<ChangeNameFormData>;
  label: string;
  registerName: ChangeNameKeys;
}

export const ChangeNameInput: React.FC<props> = ({
  errors,
  register,
  label,
  registerName,
}) => {
  return (
    <div className="relative flex flex-col gap-1 h-[50px] text-sm group">
      <input
        id={registerName}
        type={"text"}
        autoComplete="off"
        className={`default-input-border  ${
          errors[registerName] && "!border-2 !border-red-400"
        } `}
        {...register(registerName)}
      />

      <label
        htmlFor={registerName}
        className={`default-input-label ${
          errors[registerName] && "!text-red-400 font-bold"
        }`}
      >
        {label}
      </label>

      {errors[registerName] && (
        <div className="flex gap-2 items-center font-normal text-red-400 px-3">
          <div>{errors[registerName].message}</div>
        </div>
      )}
    </div>
  );
};
