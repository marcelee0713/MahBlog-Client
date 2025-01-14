import { ErrorObject, ErrorResponse } from "@/shared/ts/interfaces/global";

export const TypewriterEffect = (
  element: HTMLElement | null,
  text: string,
  typingSpeed: number = 100,
  callback?: () => void
): void => {
  if (!element) return;

  let index = 0;

  const type = (): void => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    } else if (callback) {
      callback();
    }
  };

  type();
};

export const SendErrorResponse = async (
  status: number,
  body: ErrorObject
): Promise<Response> => {
  const error: ErrorResponse = {
    status,
    error: body,
    timestamp: new Date(),
  };

  return new Response(JSON.stringify(error), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const ParseRawError = async (res: Response): Promise<Response> => {
  const errorResponse = await res.text();
  return new Response(errorResponse, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("Content-Type") || "application/json",
    },
  });
};

export const ParseError = async (res: Response): Promise<ErrorObject> => {
  if (res.status === 429) {
    const obj: ErrorObject = {
      message: "Too much request, please try again later",
      code: "too-much-request",
      cause: null,
      where: null,
    };

    return obj;
  }

  const body: ErrorResponse = await res.json();

  return body.error;
};
