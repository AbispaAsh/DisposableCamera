import { GuestUpdateManyWithoutEventsInput } from "./GuestUpdateManyWithoutEventsInput";
import { NotificationUpdateManyWithoutEventsInput } from "./NotificationUpdateManyWithoutEventsInput";
import { SubEventUpdateManyWithoutEventsInput } from "./SubEventUpdateManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventUpdateInput = {
  description?: string | null;
  endsAt?: Date | null;
  guests?: GuestUpdateManyWithoutEventsInput;
  name?: string | null;
  notifications?: NotificationUpdateManyWithoutEventsInput;
  scheduledAt?: Date | null;
  subEvents?: SubEventUpdateManyWithoutEventsInput;
  user?: UserWhereUniqueInput | null;
};
