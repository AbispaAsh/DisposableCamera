import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SubEventWhereInput = {
  description?: StringNullableFilter;
  endsAt?: DateTimeNullableFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  scheduledAt?: DateTimeNullableFilter;
};
