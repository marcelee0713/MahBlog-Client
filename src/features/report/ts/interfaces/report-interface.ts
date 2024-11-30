import { ReportCategories, ReportType } from "../types/report-types";

export interface ReportIssueFormData {
  userId?: string;
  description: string;
  email: string;
  type: ReportType;
  category: ReportCategories;
}
