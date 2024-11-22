import React, { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { SignInFormData } from "../interfaces/sign-in-interface";
import { IoEyeOff, IoEye } from "react-icons/io5";

interface props {
  errors: FieldErrors<SignInFormData>;
  register: UseFormRegister<SignInFormData>;
  label: string;
}

export const EmailInput: React.FC<props> = ({ errors, register, label }) => {
  return (
    <div className="relative flex flex-col gap-1 h-[50px] text-sm group">
      <input
        id={label}
        type="email"
        autoComplete="off"
        className={`default-input-border  ${
          errors.email && "!border-2 !border-red-400"
        } `}
        {...register("email")}
      />

      <label
        htmlFor={label}
        className={`default-input-label ${
          errors.email && "!text-red-400 font-bold"
        }`}
      >
        {label}
      </label>

      {errors.email && (
        <div className="flex gap-2 items-center font-normal text-red-400 px-3">
          <div>{errors.email?.message}</div>
        </div>
      )}
    </div>
  );
};

export const PasswordInput: React.FC<props> = ({ errors, register, label }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative flex flex-col gap-1 h-[50px] text-sm group">
      <input
        id={label}
        type={visible ? "text" : "password"}
        autoComplete="off"
        className={`default-input-border  ${
          errors.password && "!border-2 !border-red-400"
        } `}
        {...register("password")}
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
          errors.password && "!text-red-400 font-bold"
        }`}
      >
        {label}
      </label>
    </div>
  );
};
