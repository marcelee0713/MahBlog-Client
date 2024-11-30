import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { ParseError } from "@/shared/utils";
import { ReportIssueFormData } from "../ts/interfaces/report-interface";

export const reportIssue = async (
  data: ReportIssueFormData,
  { onLoading, onSuccess, onError }: CallbacksInterface
): Promise<void> => {
  onLoading();

  const res = await fetch(`/api/user/reports`, {
    body: JSON.stringify({
      ...data,
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  return onSuccess(null);
};
