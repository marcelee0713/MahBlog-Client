import {
  ChangeNameFormData,
  ChangePasswordFormData,
} from "../interface/settings-interfaces";

export type ChangeNameKeys = keyof ChangeNameFormData;
export type FormMode = "NAME" | "EMAIL" | "PASSWORD" | "NONE";
export type ChangePassKeys = keyof ChangePasswordFormData;
