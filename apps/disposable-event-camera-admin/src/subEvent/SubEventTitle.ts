import { SubEvent as TSubEvent } from "../api/subEvent/SubEvent";

export const SUBEVENT_TITLE_FIELD = "name";

export const SubEventTitle = (record: TSubEvent): string => {
  return record.name?.toString() || String(record.id);
};
