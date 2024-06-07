import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endsAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  scheduledAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
