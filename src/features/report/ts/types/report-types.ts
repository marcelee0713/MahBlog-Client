export const ReportTypeArr = [
  "ISSUE",
  "USER_REPORT",
  "BLOG_REPORT",
  "COMMENT_REPORT",
  "REPLY_REPORT",
] as const;

export const ReportCategoriesArr = [
  "BUG",
  "INAPPROPRIATE_BLOG",
  "SPAM",
  "HARASSMENT",
  "COPYRIGHT_VIOLATION",
  "FAKE_NEWS",
  "HATE_SPEECH",
  "IMPERSONATION",
  "PHISHING",
  "MALWARE",
  "OTHER",
] as const;

export type ReportType = (typeof ReportTypeArr)[number];

export type ReportCategories = (typeof ReportCategoriesArr)[number];
