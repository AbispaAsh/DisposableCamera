import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { PhotoListRelationFilter } from "../photo/PhotoListRelationFilter";

export type GuestWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  phoneNumber?: StringNullableFilter;
  photos?: PhotoListRelationFilter;
};
