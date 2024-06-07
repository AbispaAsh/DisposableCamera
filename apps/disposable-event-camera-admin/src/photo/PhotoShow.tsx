import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { GUEST_TITLE_FIELD } from "../guest/GuestTitle";

export const PhotoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="caption" source="caption" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="filename" source="filename" />
        <ReferenceField label="Guest" source="guest.id" reference="Guest">
          <TextField source={GUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadedAt" source="uploadedAt" />
        <TextField label="url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
