import React, { useEffect, useRef, useState } from "react";
import { ReportIssueFormData } from "../ts/interfaces/report-interface";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import {
  ReportCategories,
  ReportCategoriesArr,
} from "../ts/types/report-types";
import { IoIosArrowDown } from "react-icons/io";

interface props {
  errors: FieldErrors<ReportIssueFormData>;
  register: UseFormRegister<ReportIssueFormData>;
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

export const DescriptionInput: React.FC<props> = ({ errors, register }) => {
  return (
    <div className="relative h-[175px] flex flex-col gap-1 text-sm group">
      <textarea
        id={"description"}
        autoComplete="off"
        className={`default-input-border  ${
          errors.description && "!border-2 !border-red-400"
        } `}
        {...register("description")}
      />

      <label
        htmlFor={"description"}
        className={`default-input-label ${
          errors.description && "!text-red-400 font-bold"
        }`}
      >
        Describe the issue
      </label>

      {errors.description && (
        <div className="flex gap-2 items-center font-normal text-red-400 px-3">
          <div>{errors.description?.message}</div>
        </div>
      )}
    </div>
  );
};

interface catProps extends props {
  setValue: UseFormSetValue<ReportIssueFormData>;
  value: ReportCategories;
}

export const ReportCategoriesDropdown: React.FC<catProps> = ({
  errors,
  register,
  setValue,
  value,
}) => {
  const [modal, setModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative h-[50px] flex flex-col gap-1 text-sm group">
      <div
        onClick={() => setModal(!modal)}
        className={`flex peer justify-between items-center default-input-border ${
          errors.category && "!border-2 !border-red-400"
        } !cursor-pointer group-hover:theme-accent transition-colors duration-300 ease-out`}
      >
        <div {...register("category")}>{value}</div>
        <IoIosArrowDown size={20} />
      </div>

      <div
        ref={dropdownRef}
        className={`dropdown-style ${
          modal && "!opacity-100 !z-10"
        } stylish-y-scroll
        `}
      >
        {ReportCategoriesArr.map((val, i) => {
          return (
            <div
              onClick={() => {
                setValue("category", val);
                setModal(false);
              }}
              key={i}
              className={`hover:theme-accent cursor-pointer p-3 ${
                val === value && "theme-accent"
              }`}
            >
              {val}
            </div>
          );
        })}
      </div>

      <label
        htmlFor={"category"}
        className={`default-input-label ${
          errors.category && "!text-red-400 font-bold"
        } group-hover:-translate-y-3 group-hover:opacity-0 transition-all duration-300 ease-out group-hover:bg-transparent ${
          modal && "opacity-0"
        }`}
      >
        Category
      </label>

      {errors.category && (
        <div className="flex gap-2 items-center font-normal text-red-400 px-3">
          <div>{errors.category?.message}</div>
        </div>
      )}
    </div>
  );
};
