import { Guest } from "../guest/Guest";
import { Notification } from "../notification/Notification";
import { SubEvent } from "../subEvent/SubEvent";
import { User } from "../user/User";

export type Event = {
  createdAt: Date;
  description: string | null;
  endsAt: Date | null;
  guests?: Array<Guest>;
  id: string;
  name: string | null;
  notifications?: Array<Notification>;
  scheduledAt: Date | null;
  subEvents?: Array<SubEvent>;
  updatedAt: Date;
  user?: User | null;
};
