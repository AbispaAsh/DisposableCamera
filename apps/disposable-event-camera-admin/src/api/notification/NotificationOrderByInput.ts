import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  guestId?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  read?: SortOrder;
  updatedAt?: SortOrder;
};
