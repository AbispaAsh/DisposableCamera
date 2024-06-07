import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GuestWhereUniqueInput } from "../guest/GuestWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PhotoWhereInput = {
  caption?: StringNullableFilter;
  filename?: StringNullableFilter;
  guest?: GuestWhereUniqueInput;
  id?: StringFilter;
  uploadedAt?: DateTimeNullableFilter;
  url?: StringNullableFilter;
};
