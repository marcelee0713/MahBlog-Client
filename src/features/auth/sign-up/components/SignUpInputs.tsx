import { FieldErrors, UseFormRegister } from "react-hook-form";
import { SignUpFormData } from "../ts/interfaces/sign-up-interface";
import { SignUpFormKeys } from "../ts/types/sign-up-types";
import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";

interface props {
  errors: FieldErrors<SignUpFormData>;
  register: UseFormRegister<SignUpFormData>;
  label: string;
  registerName: SignUpFormKeys;
}

export const SignUpInput: React.FC<props> = ({
  errors,
  register,
  label,
  registerName,
}) => {
  return (
    <div className="relative flex flex-col gap-1 h-[50px] text-sm group">
      <input
        id={label}
        type={registerName === "email" ? "email" : "text"}
        autoComplete="off"
        className={`default-input-border  ${
          errors[registerName] && "!border-2 !border-red-400"
        } `}
        {...register(registerName)}
      />

      <label
        htmlFor={label}
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

interface passProps extends props {
  registerName: "password" | "cfrmPassword";
}

export const SignUpPasswordInput: React.FC<passProps> = ({
  errors,
  label,
  register,
  registerName,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative flex flex-col gap-1 h-[50px] text-sm group">
      <input
        id={label}
        type={visible ? "text" : "password"}
        autoComplete="off"
        className={`default-input-border  ${
          errors[registerName] && "!border-2 !border-red-400"
        } `}
        {...register(registerName)}
      />

      {!visible && (
        <IoEyeOff
          className="absolute right-0 top-0 left-0 bottom-0 m-auto mr-2 text-secondary"
          size={25}
          onClick={() => setVisible(true)}
        />
      )}
      {visible && (
        <IoEye
          className="absolute right-0 top-0 left-0 bottom-0 m-auto mr-2 text-secondary"
          size={25}
          onClick={() => setVisible(false)}
        />
      )}

      <label
        htmlFor={label}
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
