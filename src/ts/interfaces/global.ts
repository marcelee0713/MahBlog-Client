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
  onSuccess: <T>(data: T) => void;
  onError: (err: ErrorObject) => void;
}
