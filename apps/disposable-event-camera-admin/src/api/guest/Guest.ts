import { Event } from "../event/Event";
import { Notification } from "../notification/Notification";
import { Photo } from "../photo/Photo";

export type Guest = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  name: string | null;
  notifications?: Array<Notification>;
  phoneNumber: string | null;
  photos?: Array<Photo>;
  updatedAt: Date;
};
