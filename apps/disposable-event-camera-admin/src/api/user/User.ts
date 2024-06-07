import { Event } from "../event/Event";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
