import { Event } from "../event/Event";

export type SubEvent = {
  createdAt: Date;
  description: string | null;
  endsAt: Date | null;
  event?: Event | null;
  id: string;
  name: string | null;
  scheduledAt: Date | null;
  updatedAt: Date;
};
