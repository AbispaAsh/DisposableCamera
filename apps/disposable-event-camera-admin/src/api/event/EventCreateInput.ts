import { GuestCreateNestedManyWithoutEventsInput } from "./GuestCreateNestedManyWithoutEventsInput";
import { NotificationCreateNestedManyWithoutEventsInput } from "./NotificationCreateNestedManyWithoutEventsInput";
import { SubEventCreateNestedManyWithoutEventsInput } from "./SubEventCreateNestedManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventCreateInput = {
  description?: string | null;
  endsAt?: Date | null;
  guests?: GuestCreateNestedManyWithoutEventsInput;
  name?: string | null;
  notifications?: NotificationCreateNestedManyWithoutEventsInput;
  scheduledAt?: Date | null;
  subEvents?: SubEventCreateNestedManyWithoutEventsInput;
  user?: UserWhereUniqueInput | null;
};
