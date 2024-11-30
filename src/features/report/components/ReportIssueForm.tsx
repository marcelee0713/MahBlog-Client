import React, { useState } from "react";
import { ReportIssueFormData } from "../ts/interfaces/report-interface";
import { ReportIssueSchema } from "../schemas/report-schema";
import { Button } from "@/components/Button";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  DescriptionInput,
  EmailInput,
  ReportCategoriesDropdown,
} from "./ReportInputs";
import { reportIssue } from "../api/report-api";

export const ReportIssueForm = () => {
  const [processing, setProcessing] = useState(false);

  const cb: CallbacksInterface = {
    onLoading() {
      setProcessing(true);

      toast.dismiss();
      toast.loading("Loading...");
    },

    onSuccess() {
      setProcessing(false);
      toast.dismiss();
      toast.success("Successfully sent your report!");

      reset();
    },

    onError(err) {
      setProcessing(false);

      toast.dismiss();
      toast.error(err.message);
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ReportIssueFormData>({
    resolver: zodResolver(ReportIssueSchema),
    defaultValues: {
      category: "OTHER",
      type: "ISSUE",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => await reportIssue(data, cb))}
      className="flex flex-col gap-10"
    >
      <EmailInput errors={errors} register={register} />
      <ReportCategoriesDropdown
        errors={errors}
        register={register}
        setValue={setValue}
        value={watch("category")}
      />
      <DescriptionInput errors={errors} register={register} />
      <Button text="Submit" type="submit" disabled={processing} />
    </form>
  );
};
