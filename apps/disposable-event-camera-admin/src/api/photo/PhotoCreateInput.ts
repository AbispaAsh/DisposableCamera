import { GuestWhereUniqueInput } from "../guest/GuestWhereUniqueInput";

export type PhotoCreateInput = {
  caption?: string | null;
  filename?: string | null;
  guest?: GuestWhereUniqueInput | null;
  uploadedAt?: Date | null;
  url?: string | null;
};
