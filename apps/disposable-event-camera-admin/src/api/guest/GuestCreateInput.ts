import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { NotificationCreateNestedManyWithoutGuestsInput } from "./NotificationCreateNestedManyWithoutGuestsInput";
import { PhotoCreateNestedManyWithoutGuestsInput } from "./PhotoCreateNestedManyWithoutGuestsInput";

export type GuestCreateInput = {
  event?: EventWhereUniqueInput | null;
  name?: string | null;
  notifications?: NotificationCreateNestedManyWithoutGuestsInput;
  phoneNumber?: string | null;
  photos?: PhotoCreateNestedManyWithoutGuestsInput;
};
