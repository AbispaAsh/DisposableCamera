import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { GuestTitle } from "../guest/GuestTitle";

export const PhotoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="caption" multiline source="caption" />
        <TextInput label="filename" source="filename" />
        <ReferenceInput source="guest.id" reference="Guest" label="Guest">
          <SelectInput optionText={GuestTitle} />
        </ReferenceInput>
        <DateTimeInput label="uploadedAt" source="uploadedAt" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
