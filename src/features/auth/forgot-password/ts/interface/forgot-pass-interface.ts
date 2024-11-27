export interface ForgotPassFormData {
  email: string;
}

interface FoundUserData {
  email: string;
  userId: string;
  firstName: string;
  lastName: string | null;
  middleName: string | null;
  profilePicture: string | null;
}

export type { FoundUserData };
