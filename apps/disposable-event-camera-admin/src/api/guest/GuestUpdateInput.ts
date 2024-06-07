import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { NotificationUpdateManyWithoutGuestsInput } from "./NotificationUpdateManyWithoutGuestsInput";
import { PhotoUpdateManyWithoutGuestsInput } from "./PhotoUpdateManyWithoutGuestsInput";

export type GuestUpdateInput = {
  event?: EventWhereUniqueInput | null;
  name?: string | null;
  notifications?: NotificationUpdateManyWithoutGuestsInput;
  phoneNumber?: string | null;
  photos?: PhotoUpdateManyWithoutGuestsInput;
};
