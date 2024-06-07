import { Event } from "../event/Event";
import { Guest } from "../guest/Guest";

export type Notification = {
  createdAt: Date;
  event?: Event | null;
  guest?: Guest | null;
  id: string;
  message: string | null;
  read: boolean | null;
  updatedAt: Date;
};
