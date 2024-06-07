import { Photo as TPhoto } from "../api/photo/Photo";

export const PHOTO_TITLE_FIELD = "filename";

export const PhotoTitle = (record: TPhoto): string => {
  return record.filename?.toString() || String(record.id);
};
