import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { GuestWhereUniqueInput } from "../guest/GuestWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type NotificationWhereInput = {
  event?: EventWhereUniqueInput;
  guest?: GuestWhereUniqueInput;
  id?: StringFilter;
  message?: StringNullableFilter;
  read?: BooleanNullableFilter;
};
