import { Guest } from "../guest/Guest";

export type Photo = {
  caption: string | null;
  createdAt: Date;
  filename: string | null;
  guest?: Guest | null;
  id: string;
  updatedAt: Date;
  uploadedAt: Date | null;
  url: string | null;
};
