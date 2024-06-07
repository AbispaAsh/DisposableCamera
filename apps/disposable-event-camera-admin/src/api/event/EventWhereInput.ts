import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GuestListRelationFilter } from "../guest/GuestListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { SubEventListRelationFilter } from "../subEvent/SubEventListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventWhereInput = {
  description?: StringNullableFilter;
  endsAt?: DateTimeNullableFilter;
  guests?: GuestListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  scheduledAt?: DateTimeNullableFilter;
  subEvents?: SubEventListRelationFilter;
  user?: UserWhereUniqueInput;
};
