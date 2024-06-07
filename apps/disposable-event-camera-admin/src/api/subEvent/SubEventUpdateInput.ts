import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SubEventUpdateInput = {
  description?: string | null;
  endsAt?: Date | null;
  event?: EventWhereUniqueInput | null;
  name?: string | null;
  scheduledAt?: Date | null;
};
