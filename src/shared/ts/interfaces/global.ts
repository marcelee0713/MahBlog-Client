import { IconType } from "react-icons";
import { Routes } from "../types/global";

export interface ResponseBody<T> {
  status: number;
  data: T;
  message?: string;
  timestamp: Date;
}

export interface ErrorObject {
  code: string;
  message: string;
  cause: string | null;
  where: string | null;
}

export interface ErrorResponse {
  status: number;
  error: ErrorObject;
  timestamp: Date;
}

export interface CallbacksInterface {
  onLoading: () => void;
  onSuccess: <T>(data: T) => Promise<void> | void;
  onError: (err: ErrorObject) => void;
}

export interface IconRoute {
  text: string;
  route: Routes;
  icon: IconType;
  onClick?: () => void;
  className?: string;
}

export type IconButtonType = Omit<IconRoute, "route"> & {
  onClick: () => void;
};
