import { SubEventWhereInput } from "./SubEventWhereInput";
import { SubEventOrderByInput } from "./SubEventOrderByInput";

export type SubEventFindManyArgs = {
  where?: SubEventWhereInput;
  orderBy?: Array<SubEventOrderByInput>;
  skip?: number;
  take?: number;
};
