import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { GuestWhereUniqueInput } from "../guest/GuestWhereUniqueInput";

export type NotificationUpdateInput = {
  event?: EventWhereUniqueInput | null;
  guest?: GuestWhereUniqueInput | null;
  message?: string | null;
  read?: boolean | null;
};
