import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { GuestWhereUniqueInput } from "../guest/GuestWhereUniqueInput";

export type NotificationCreateInput = {
  event?: EventWhereUniqueInput | null;
  guest?: GuestWhereUniqueInput | null;
  message?: string | null;
  read?: boolean | null;
};
