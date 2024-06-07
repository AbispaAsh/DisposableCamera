import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  caption?: SortOrder;
  createdAt?: SortOrder;
  filename?: SortOrder;
  guestId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadedAt?: SortOrder;
  url?: SortOrder;
};
