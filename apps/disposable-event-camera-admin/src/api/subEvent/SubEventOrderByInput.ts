import { SortOrder } from "../../util/SortOrder";

export type SubEventOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endsAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  scheduledAt?: SortOrder;
  updatedAt?: SortOrder;
};
