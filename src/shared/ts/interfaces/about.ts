export interface AboutInfo {
  header?: string;
  effectiveDate?: string;
  description: string;
  lists: AboutList[];
  footer?: string;
}

export interface AboutList {
  header: string;
  descriptions: string[];
}
